// Command anapioficeandfire is a CLI + REPL for the An API of Ice and
// Fire SDK, built on the AQL engine. The CLI joins its positional
// arguments into a single AQL expression and evaluates it. With no
// arguments it falls into a REPL.
//
// Usage:
//
//	anapioficeandfire list book
//	anapioficeandfire load {url:"https://anapioficeandfire.com/api/books/1"} book
//	anapioficeandfire                    # REPL
//
// Words list / load / update have the signature
//
//	[query?:(Node or Scalar) entity:atom]
//
// and are defined natively in Go (see words.go). They dispatch to the
// matching SDK entity (book, character, hous) and call the named
// operation. The CLI does not pull in any third-party flag parser —
// the AQL parser is the only argument-interpretation layer.
package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/aql-lang/aql/eng"
	"github.com/aql-lang/aql/eng/parser"
	sdk "github.com/voxgig-sdk/anapioficeandfire-sdk/go"
)

func main() {
	os.Exit(run(os.Args[1:], os.Stdin, os.Stdout, os.Stderr))
}

func run(args []string, in io.Reader, out, errOut io.Writer) int {
	client := sdk.NewAnapioficeandfireSDK(nil)

	r, err := eng.NewRegistry()
	if err != nil {
		fmt.Fprintf(errOut, "registry: %v\n", err)
		return 1
	}
	registerSDKWords(r, client)
	if err := r.Err(); err != nil {
		fmt.Fprintf(errOut, "word registration: %v\n", err)
		return 1
	}
	r.SetParseFunc(parser.Parse)
	r.InitRootContext()
	r.MarkReady()

	if len(args) > 0 {
		return evalOnce(r, strings.Join(args, " "), out, errOut)
	}
	repl(r, in, out)
	return 0
}

func evalOnce(r *eng.Registry, src string, out, errOut io.Writer) int {
	values, err := parser.Parse(src)
	if err != nil {
		fmt.Fprintf(errOut, "parse: %v\n", err)
		return 1
	}
	result, err := eng.NewTop(r).Run(values)
	if err != nil {
		fmt.Fprintf(errOut, "error: %v\n", err)
		return 1
	}
	for _, v := range result {
		fmt.Fprintln(out, v.String())
	}
	return 0
}

func repl(r *eng.Registry, in io.Reader, out io.Writer) {
	scanner := bufio.NewScanner(in)
	scanner.Buffer(make([]byte, 0, 64*1024), 1024*1024)
	for {
		fmt.Fprint(out, "anapioficeandfire> ")
		if !scanner.Scan() {
			fmt.Fprintln(out)
			return
		}
		line := strings.TrimSpace(scanner.Text())
		if line == "" {
			continue
		}
		switch line {
		case ":quit", ":q", ":exit":
			return
		case ":help", ":h", ":?":
			fmt.Fprintln(out, "commands: list / load / update <query?> <entity>")
			fmt.Fprintln(out, "entities: book character hous")
			fmt.Fprintln(out, "meta:     :quit :help")
			continue
		}
		values, err := parser.Parse(line)
		if err != nil {
			fmt.Fprintf(out, "  parse error: %v\n", err)
			continue
		}
		result, err := eng.NewTop(r).Run(values)
		if err != nil {
			fmt.Fprintf(out, "  error: %v\n", err)
			continue
		}
		for _, v := range result {
			fmt.Fprintln(out, v.String())
		}
	}
}
