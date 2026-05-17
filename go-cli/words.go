package main

import (
	"fmt"
	"strings"

	"github.com/aql-lang/aql/eng"
	sdk "github.com/voxgig-sdk/anapioficeandfire-sdk/go"
)

// registerSDKWords installs three native AQL words bound to the SDK:
//   list   — call <entity>.List(query, nil)
//   load   — call <entity>.Load(query, nil)
//   update — call <entity>.Update(query, nil)
//
// Each word is declared with two overloads, matching the spec
// signature [query?:(Node or Scalar) entity:atom]:
//
//   [entity:Atom]          — no query
//   [query:Any entity:Atom] — query is any Node or Scalar
//
// The entity slot is /q-quoted so the bareword `book` parses as the
// Atom "book" rather than being dispatched as an undefined word.
// ForwardArgs is true so args are collected from the tokens following
// the word — `list book` reads naturally left-to-right.
func registerSDKWords(r *eng.Registry, client *sdk.AnapioficeandfireSDK) {
	for _, op := range []string{"list", "load", "update"} {
		op := op // capture for closure
		single := eng.NativeSig{
			Args:      []*eng.Type{eng.TAtom},
			QuoteArgs: map[int]bool{0: true},
			Handler: func(args []eng.Value, _ map[string]eng.Value, _ []eng.Value, _ *eng.Registry) ([]eng.Value, error) {
				return runOp(client, op, nil, args[0])
			},
			Returns: []*eng.Type{eng.TAny},
		}
		dual := eng.NativeSig{
			Args:      []*eng.Type{eng.TAny, eng.TAtom},
			QuoteArgs: map[int]bool{1: true},
			Handler: func(args []eng.Value, _ map[string]eng.Value, _ []eng.Value, _ *eng.Registry) ([]eng.Value, error) {
				q := args[0]
				return runOp(client, op, &q, args[1])
			},
			Returns: []*eng.Type{eng.TAny},
		}
		r.RegisterNativeFunc(eng.NativeFunc{
			Name:        op,
			ForwardArgs: true,
			Signatures:  []eng.NativeSig{single, dual},
		})
	}
}

// runOp dispatches op on the named SDK entity, optionally passing a
// query coerced to the SDK's `map[string]any` argument shape.
//
// Query coercion:
//   - Map  → underlying Go map (via eng.ToGo)
//   - Scalar → {"id": <scalar>} (lenient default so `load 1 book` works
//     as shorthand for `load {id:1} book`)
//   - nil → nil (the SDK defaults match)
func runOp(client *sdk.AnapioficeandfireSDK, op string, query *eng.Value, entityAtom eng.Value) ([]eng.Value, error) {
	entityName, err := eng.AsAtom(entityAtom)
	if err != nil {
		return nil, fmt.Errorf("%s: entity argument is not an atom: %w", op, err)
	}
	ent, err := entityFor(client, entityName)
	if err != nil {
		return nil, fmt.Errorf("%s: %w", op, err)
	}

	var arg map[string]any
	if query != nil {
		arg, err = queryToMap(*query)
		if err != nil {
			return nil, fmt.Errorf("%s: %w", op, err)
		}
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(arg, nil)
	case "load":
		result, err = ent.Load(arg, nil)
	case "update":
		result, err = ent.Update(arg, nil)
	default:
		return nil, fmt.Errorf("unknown op %q", op)
	}
	if err != nil {
		return nil, err
	}
	// SDK list/load returns either an entity wrapper or a slice of
	// them; unwrap each via .Data() so the AQL output is plain data
	// rather than opaque *Entity pointers.
	return []eng.Value{eng.FromGo(extractData(result))}, nil
}

func entityFor(client *sdk.AnapioficeandfireSDK, name string) (sdk.AnapioficeandfireEntity, error) {
	switch strings.ToLower(name) {
	case "book":
		return client.Book(nil), nil
	case "character":
		return client.Character(nil), nil
	case "house":
		return client.House(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q (try: book, character, house)", name)
}

// queryToMap converts an AQL Value (Map or Scalar) into the
// `map[string]any` shape the SDK expects. Maps are unwrapped via
// eng.ToGo. Scalars are wrapped as {"id": <value>} so the shorthand
// `load 1 book` becomes `load {id:1} book`.
func queryToMap(v eng.Value) (map[string]any, error) {
	if v.VType.Matches(eng.TMap) {
		m, ok := eng.ToGo(v).(map[string]any)
		if !ok {
			return nil, fmt.Errorf("query map could not be unwrapped")
		}
		return m, nil
	}
	if v.VType.Matches(eng.TScalar) {
		return map[string]any{"id": eng.ToGo(v)}, nil
	}
	return nil, fmt.Errorf("query must be a Map or Scalar, got %s", v.VType)
}

// extractData walks the SDK result and replaces any sdk.Entity wrapper
// with the underlying record via .Data(). The SDK returns
// []any of *Entity for list ops; load returns a single *Entity.
func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}
