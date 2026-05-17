package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/anapioficeandfire-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK.
type Args struct {
	Entity string         `json:"entity" jsonschema:"book | character | house"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, {} or omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.AnapioficeandfireSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "aoiaf_list",
		Description: "List records from An API of Ice and Fire. " +
			"Args: entity ('book'|'character'|'house'), query (optional filter map, " +
			"e.g. {\"name\":\"Stark\"} for house). Returns the first page (≈10 records) " +
			"as a JSON array.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "aoiaf_load",
		Description: "Load a single record from An API of Ice and Fire. " +
			"Args: entity ('book'|'character'|'house'), query ({\"id\":N} required). " +
			"Returns the record as a JSON object.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.AnapioficeandfireSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
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

// extractData walks an SDK result and replaces any sdk.Entity wrapper
// with its underlying record (via .Data()). Same helper as in go-cli;
// duplicated here to keep go-mcp's dep graph minimal (no aql/eng).
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

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
