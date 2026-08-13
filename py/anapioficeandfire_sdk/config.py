# Anapioficeandfire SDK configuration


def make_config():
    return {
        "main": {
            "name": "Anapioficeandfire",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://anapioficeandfire.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "book": {},
                "character": {},
                "house": {},
            },
        },
        "entity": {
      "book": {
        "fields": [
          {
            "active": True,
            "name": "authors",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "characters",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "isbn",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "mediaType",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "numberOfPages",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "povCharacters",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "publisher",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "released",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "book",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/books",
                "parts": [
                  "books",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/books/{id}",
                "parts": [
                  "books",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "character": {
        "fields": [
          {
            "active": True,
            "name": "aliases",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "allegiances",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "books",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "born",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "culture",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "died",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "father",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "mother",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "playedBy",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "povBooks",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "spouse",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "titles",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "tvSeries",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "culture",
                      "orig": "culture",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/characters",
                "parts": [
                  "characters",
                ],
                "select": {
                  "exist": [
                    "culture",
                    "name",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{id}",
                "parts": [
                  "characters",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "house": {
        "fields": [
          {
            "active": True,
            "name": "ancestralWeapons",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "cadetBranches",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "coatOfArms",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "currentLord",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "diedOut",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "founded",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "founder",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "heir",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "overlord",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "seats",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "swornMembers",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "titles",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "words",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
        ],
        "name": "house",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/houses",
                "parts": [
                  "houses",
                ],
                "select": {
                  "exist": [
                    "name",
                    "page",
                    "page_size",
                    "region",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/houses/{id}",
                "parts": [
                  "houses",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
