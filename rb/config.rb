# Anapioficeandfire SDK configuration

module AnapioficeandfireConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Anapioficeandfire",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://anapioficeandfire.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "book" => {},
          "character" => {},
          "house" => {},
        },
      },
      "entity" => {
        "book" => {
          "fields" => [
            {
              "name" => "authors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "characters",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "country",
              "type" => "`$STRING`",
            },
            {
              "name" => "isbn",
              "type" => "`$STRING`",
            },
            {
              "name" => "mediaType",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "numberOfPages",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "povCharacters",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "publisher",
              "type" => "`$STRING`",
            },
            {
              "name" => "released",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "book",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/books",
                  "parts" => [
                    "books",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "page_size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/books/{id}",
                  "parts" => [
                    "books",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "character" => {
          "fields" => [
            {
              "name" => "aliases",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "allegiances",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "books",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "born",
              "type" => "`$STRING`",
            },
            {
              "name" => "culture",
              "type" => "`$STRING`",
            },
            {
              "name" => "died",
              "type" => "`$STRING`",
            },
            {
              "name" => "father",
              "type" => "`$STRING`",
            },
            {
              "name" => "mother",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "playedBy",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "povBooks",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "spouse",
              "type" => "`$STRING`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "tvSeries",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "culture",
                        "orig" => "culture",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters",
                  "parts" => [
                    "characters",
                  ],
                  "select" => {
                    "exist" => [
                      "culture",
                      "name",
                      "page",
                      "page_size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}",
                  "parts" => [
                    "characters",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "house" => {
          "fields" => [
            {
              "name" => "ancestralWeapons",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "cadetBranches",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "coatOfArms",
              "type" => "`$STRING`",
            },
            {
              "name" => "currentLord",
              "type" => "`$STRING`",
            },
            {
              "name" => "diedOut",
              "type" => "`$STRING`",
            },
            {
              "name" => "founded",
              "type" => "`$STRING`",
            },
            {
              "name" => "founder",
              "type" => "`$STRING`",
            },
            {
              "name" => "heir",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "overlord",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "type" => "`$STRING`",
            },
            {
              "name" => "seats",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "swornMembers",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "words",
              "type" => "`$STRING`",
            },
          ],
          "name" => "house",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/houses",
                  "parts" => [
                    "houses",
                  ],
                  "select" => {
                    "exist" => [
                      "name",
                      "page",
                      "page_size",
                      "region",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/houses/{id}",
                  "parts" => [
                    "houses",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AnapioficeandfireFeatures.make_feature(name)
  end
end
