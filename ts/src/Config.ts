
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Anapioficeandfire',
        slug: "anapioficeandfire",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://anapioficeandfire.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      book: {
      },

      character: {
      },

      house: {
      },

    }
  }


  entity = {
    "book": {
      "fields": [
        {
          "name": "authors",
          "short": "An array of names of the authors that wrote this book",
          "type": "`$ARRAY`"
        },
        {
          "name": "characters",
          "short": "An array of character resource URLs that has been in this book",
          "type": "`$ARRAY`"
        },
        {
          "name": "country",
          "short": "The country that this book was published in",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "isbn",
          "short": "The International Standard Book Number (ISBN-13) that uniquely identifies this book",
          "type": "`$STRING`"
        },
        {
          "name": "mediaType",
          "short": "The type of media this book was released in",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of this book",
          "type": "`$STRING`"
        },
        {
          "name": "numberOfPages",
          "short": "The number of pages in this book",
          "type": "`$INTEGER`"
        },
        {
          "name": "povCharacters",
          "short": "An array of character resource URLs that has had a POV-chapter in this book",
          "type": "`$ARRAY`"
        },
        {
          "name": "publisher",
          "short": "The company that published this book",
          "type": "`$STRING`"
        },
        {
          "name": "released",
          "short": "The date (ISO 8601) when this book was released",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "The hypermedia URL of this resource",
          "type": "`$STRING`"
        }
      ],
      "name": "book",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/books",
              "parts": [
                "books"
              ],
              "select": {
                "exist": [
                  "page",
                  "page_size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/books/{id}",
              "parts": [
                "books",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "character": {
      "fields": [
        {
          "name": "aliases",
          "short": "The aliases that this character goes by",
          "type": "`$ARRAY`"
        },
        {
          "name": "allegiances",
          "short": "An array of house resource URLs that this character is loyal to",
          "type": "`$ARRAY`"
        },
        {
          "name": "books",
          "short": "An array of book resource URLs that this character has been in",
          "type": "`$ARRAY`"
        },
        {
          "name": "born",
          "short": "Textual representation of when and where this character was born",
          "type": "`$STRING`"
        },
        {
          "name": "culture",
          "short": "The culture that this character belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "died",
          "short": "Textual representation of when and where this character died",
          "type": "`$STRING`"
        },
        {
          "name": "father",
          "short": "The character resource URL of this character's father",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "mother",
          "short": "The character resource URL of this character's mother",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of this character",
          "type": "`$STRING`"
        },
        {
          "name": "playedBy",
          "short": "An array of actor names that have played this character in the TV show",
          "type": "`$ARRAY`"
        },
        {
          "name": "povBooks",
          "short": "An array of book resource URLs that this character has had a POV-chapter in",
          "type": "`$ARRAY`"
        },
        {
          "name": "spouse",
          "short": "The character resource URL of this character's spouse",
          "type": "`$STRING`"
        },
        {
          "name": "titles",
          "short": "The titles that this character holds",
          "type": "`$ARRAY`"
        },
        {
          "name": "tvSeries",
          "short": "An array of season names that this character has been in",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "short": "The hypermedia URL of this resource",
          "type": "`$STRING`"
        }
      ],
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "culture",
                    "orig": "culture",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "parts": [
                "characters"
              ],
              "select": {
                "exist": [
                  "culture",
                  "name",
                  "page",
                  "page_size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}",
              "parts": [
                "characters",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "house": {
      "fields": [
        {
          "name": "ancestralWeapons",
          "short": "An array of names of the ancestral weapons of this house",
          "type": "`$ARRAY`"
        },
        {
          "name": "cadetBranches",
          "short": "An array of house resource URLs that was founded from this house",
          "type": "`$ARRAY`"
        },
        {
          "name": "coatOfArms",
          "short": "Text describing the coat of arms of this house",
          "type": "`$STRING`"
        },
        {
          "name": "currentLord",
          "short": "The character resource URL of this house's current lord",
          "type": "`$STRING`"
        },
        {
          "name": "diedOut",
          "short": "The year that this house died out",
          "type": "`$STRING`"
        },
        {
          "name": "founded",
          "short": "The year that this house was founded",
          "type": "`$STRING`"
        },
        {
          "name": "founder",
          "short": "The character resource URL that founded this house",
          "type": "`$STRING`"
        },
        {
          "name": "heir",
          "short": "The character resource URL of this house's heir",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of this house",
          "type": "`$STRING`"
        },
        {
          "name": "overlord",
          "short": "The house resource URL that this house answers to",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "short": "The region that this house resides in",
          "type": "`$STRING`"
        },
        {
          "name": "seats",
          "short": "The seats that this house holds",
          "type": "`$ARRAY`"
        },
        {
          "name": "swornMembers",
          "short": "An array of character resource URLs that are sworn to this house",
          "type": "`$ARRAY`"
        },
        {
          "name": "titles",
          "short": "The titles that this house holds",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "short": "The hypermedia URL of this resource",
          "type": "`$STRING`"
        },
        {
          "name": "words",
          "short": "The words of this house",
          "type": "`$STRING`"
        }
      ],
      "name": "house",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "region",
                    "orig": "region",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/houses",
              "parts": [
                "houses"
              ],
              "select": {
                "exist": [
                  "name",
                  "page",
                  "page_size",
                  "region"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/houses/{id}",
              "parts": [
                "houses",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

