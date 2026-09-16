-- Anapioficeandfire SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Anapioficeandfire",
      slug = "anapioficeandfire",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://anapioficeandfire.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["book"] = {},
        ["character"] = {},
        ["house"] = {},
      },
    },
    entity = {
      ["book"] = {
        ["fields"] = {
          {
            ["name"] = "authors",
            ["short"] = "An array of names of the authors that wrote this book",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "characters",
            ["short"] = "An array of character resource URLs that has been in this book",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "country",
            ["short"] = "The country that this book was published in",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isbn",
            ["short"] = "The International Standard Book Number (ISBN-13) that uniquely identifies this book",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mediaType",
            ["short"] = "The type of media this book was released in",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of this book",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "numberOfPages",
            ["short"] = "The number of pages in this book",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "povCharacters",
            ["short"] = "An array of character resource URLs that has had a POV-chapter in this book",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "publisher",
            ["short"] = "The company that published this book",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "released",
            ["short"] = "The date (ISO 8601) when this book was released",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "The hypermedia URL of this resource",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "book",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/books",
                ["segments"] = {
                  {
                    ["lit"] = "books",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "books",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/books/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "books",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "books",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "aliases",
            ["short"] = "The aliases that this character goes by",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "allegiances",
            ["short"] = "An array of house resource URLs that this character is loyal to",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "books",
            ["short"] = "An array of book resource URLs that this character has been in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "born",
            ["short"] = "Textual representation of when and where this character was born",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "culture",
            ["short"] = "The culture that this character belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "died",
            ["short"] = "Textual representation of when and where this character died",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "father",
            ["short"] = "The character resource URL of this character's father",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mother",
            ["short"] = "The character resource URL of this character's mother",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of this character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playedBy",
            ["short"] = "An array of actor names that have played this character in the TV show",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "povBooks",
            ["short"] = "An array of book resource URLs that this character has had a POV-chapter in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "spouse",
            ["short"] = "The character resource URL of this character's spouse",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "titles",
            ["short"] = "The titles that this character holds",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "tvSeries",
            ["short"] = "An array of season names that this character has been in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "The hypermedia URL of this resource",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "culture",
                      ["orig"] = "culture",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/characters",
                ["segments"] = {
                  {
                    ["lit"] = "characters",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "culture",
                    "name",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "characters",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/characters/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "characters",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["house"] = {
        ["fields"] = {
          {
            ["name"] = "ancestralWeapons",
            ["short"] = "An array of names of the ancestral weapons of this house",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "cadetBranches",
            ["short"] = "An array of house resource URLs that was founded from this house",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "coatOfArms",
            ["short"] = "Text describing the coat of arms of this house",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "currentLord",
            ["short"] = "The character resource URL of this house's current lord",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "diedOut",
            ["short"] = "The year that this house died out",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "founded",
            ["short"] = "The year that this house was founded",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "founder",
            ["short"] = "The character resource URL that founded this house",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "heir",
            ["short"] = "The character resource URL of this house's heir",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of this house",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "overlord",
            ["short"] = "The house resource URL that this house answers to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["short"] = "The region that this house resides in",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "seats",
            ["short"] = "The seats that this house holds",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "swornMembers",
            ["short"] = "An array of character resource URLs that are sworn to this house",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "titles",
            ["short"] = "The titles that this house holds",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "The hypermedia URL of this resource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "words",
            ["short"] = "The words of this house",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "house",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/houses",
                ["segments"] = {
                  {
                    ["lit"] = "houses",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "name",
                    "page",
                    "page_size",
                    "region",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "houses",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/houses/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "houses",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "houses",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
