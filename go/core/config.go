package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Anapioficeandfire",
			"slug": "anapioficeandfire",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://anapioficeandfire.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"book": map[string]any{},
				"character": map[string]any{},
				"house": map[string]any{},
			},
		},
		"entity": map[string]any{
			"book": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authors",
						"short": "An array of names of the authors that wrote this book",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "characters",
						"short": "An array of character resource URLs that has been in this book",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "country",
						"short": "The country that this book was published in",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isbn",
						"short": "The International Standard Book Number (ISBN-13) that uniquely identifies this book",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mediaType",
						"short": "The type of media this book was released in",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of this book",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "numberOfPages",
						"short": "The number of pages in this book",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "povCharacters",
						"short": "An array of character resource URLs that has had a POV-chapter in this book",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "publisher",
						"short": "The company that published this book",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "released",
						"short": "The date (ISO 8601) when this book was released",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The hypermedia URL of this resource",
						"type": "`$STRING`",
					},
				},
				"name": "book",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/books",
								"parts": []any{
									"books",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/books/{id}",
								"parts": []any{
									"books",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aliases",
						"short": "The aliases that this character goes by",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "allegiances",
						"short": "An array of house resource URLs that this character is loyal to",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "books",
						"short": "An array of book resource URLs that this character has been in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "born",
						"short": "Textual representation of when and where this character was born",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "culture",
						"short": "The culture that this character belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "died",
						"short": "Textual representation of when and where this character died",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "father",
						"short": "The character resource URL of this character's father",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mother",
						"short": "The character resource URL of this character's mother",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of this character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "playedBy",
						"short": "An array of actor names that have played this character in the TV show",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "povBooks",
						"short": "An array of book resource URLs that this character has had a POV-chapter in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "spouse",
						"short": "The character resource URL of this character's spouse",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "titles",
						"short": "The titles that this character holds",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tvSeries",
						"short": "An array of season names that this character has been in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"short": "The hypermedia URL of this resource",
						"type": "`$STRING`",
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "culture",
											"orig": "culture",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters",
								"parts": []any{
									"characters",
								},
								"select": map[string]any{
									"exist": []any{
										"culture",
										"name",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}",
								"parts": []any{
									"characters",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"house": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ancestralWeapons",
						"short": "An array of names of the ancestral weapons of this house",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cadetBranches",
						"short": "An array of house resource URLs that was founded from this house",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coatOfArms",
						"short": "Text describing the coat of arms of this house",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentLord",
						"short": "The character resource URL of this house's current lord",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedOut",
						"short": "The year that this house died out",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "founded",
						"short": "The year that this house was founded",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "founder",
						"short": "The character resource URL that founded this house",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "heir",
						"short": "The character resource URL of this house's heir",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of this house",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overlord",
						"short": "The house resource URL that this house answers to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"short": "The region that this house resides in",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seats",
						"short": "The seats that this house holds",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "swornMembers",
						"short": "An array of character resource URLs that are sworn to this house",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"short": "The titles that this house holds",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"short": "The hypermedia URL of this resource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "words",
						"short": "The words of this house",
						"type": "`$STRING`",
					},
				},
				"name": "house",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/houses",
								"parts": []any{
									"houses",
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"page",
										"page_size",
										"region",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/houses/{id}",
								"parts": []any{
									"houses",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
