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
//   - Map  → underlying Go map
//   - Scalar (string/atom/number/…) → {"id": <scalar>} (lenient default
//     so `load 1 book` works as shorthand for `load {id:1} book`)
//   - nil  → nil (the SDK defaults match)
//
// Returns a single-element slice containing the result wrapped as an
// AQL value. Errors bubble back to the engine, which displays them.
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
		arg, err = valueToMatch(*query)
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
	return []eng.Value{wrapAny(result)}, nil
}

func entityFor(client *sdk.AnapioficeandfireSDK, name string) (sdk.AnapioficeandfireEntity, error) {
	switch strings.ToLower(name) {
	case "book":
		return client.Book(nil), nil
	case "character":
		return client.Character(nil), nil
	case "hous", "house": // spec name is "hous"; accept both
		return client.Hous(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q (try: book, character, hous)", name)
}

// valueToMatch flattens an AQL value into the `map[string]any` shape
// the SDK expects for reqmatch / reqdata. A Map is unwrapped. A Scalar
// is wrapped as {"id": <value>} so `load 1 book` behaves as shorthand.
// Other shapes (lists, etc.) return an error.
func valueToMatch(v eng.Value) (map[string]any, error) {
	if v.VType.Matches(eng.TMap) {
		rm, err := eng.AsMap(v)
		if err != nil {
			return nil, err
		}
		out := make(map[string]any, rm.Len())
		for _, k := range rm.Keys() {
			vv, _ := rm.Get(k)
			out[k] = unwrap(vv)
		}
		return out, nil
	}
	if v.VType.Matches(eng.TScalar) {
		return map[string]any{"id": unwrap(v)}, nil
	}
	return nil, fmt.Errorf("query must be a Map or Scalar, got %s", v.VType)
}

// unwrap converts an AQL value back to a plain Go value for sending
// over the SDK boundary. Best-effort: anything not recognised falls
// back to the value's String() form.
func unwrap(v eng.Value) any {
	switch {
	case v.VType.Matches(eng.TString):
		s, _ := eng.AsString(v)
		return s
	case v.VType.Matches(eng.TInteger):
		n, _ := eng.AsInteger(v)
		return n
	case v.VType.Matches(eng.TDecimal):
		f, _ := eng.AsDecimal(v)
		return f
	case v.VType.Matches(eng.TBoolean):
		b, _ := eng.AsBoolean(v)
		return b
	case v.VType.Matches(eng.TAtom):
		a, _ := eng.AsAtom(v)
		return a
	case v.VType.Matches(eng.TMap):
		rm, err := eng.AsMap(v)
		if err != nil {
			return v.String()
		}
		out := make(map[string]any, rm.Len())
		for _, k := range rm.Keys() {
			vv, _ := rm.Get(k)
			out[k] = unwrap(vv)
		}
		return out
	case v.VType.Matches(eng.TList):
		rl, err := eng.AsList(v)
		if err != nil {
			return v.String()
		}
		out := make([]any, rl.Len())
		for i := 0; i < rl.Len(); i++ {
			out[i] = unwrap(rl.Get(i))
		}
		return out
	}
	return v.String()
}

// wrapAny lifts a value returned by the SDK (typically []any of
// sdk.Entity, or a map[string]any from a load/update) into an
// eng.Value the AQL engine can display and operate on.
func wrapAny(x any) eng.Value {
	switch v := x.(type) {
	case nil:
		return eng.NewNone()
	case sdk.Entity:
		return wrapAny(v.Data())
	case []any:
		out := make([]eng.Value, len(v))
		for i, e := range v {
			out[i] = wrapAny(e)
		}
		return eng.NewList(out)
	case map[string]any:
		m := eng.NewOrderedMap()
		for k, vv := range v {
			m.Set(k, wrapAny(vv))
		}
		return eng.NewMap(m)
	case string:
		return eng.NewString(v)
	case bool:
		return eng.NewBoolean(v)
	case int:
		return eng.NewInteger(int64(v))
	case int64:
		return eng.NewInteger(v)
	case float64:
		// Promote integer-valued floats to Integer to match calc's pattern.
		if v == float64(int64(v)) {
			return eng.NewInteger(int64(v))
		}
		return eng.NewDecimal(v)
	}
	return eng.NewString(fmt.Sprintf("%v", x))
}
