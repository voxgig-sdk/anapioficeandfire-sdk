// Typed models for the Anapioficeandfire SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/anapioficeandfire-sdk/go/core"
)

// Book is the typed data model for the book entity.
type Book struct {
	Authors *[]any `json:"authors,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Country *string `json:"country,omitempty"`
	Isbn *string `json:"isbn,omitempty"`
	MediaType *string `json:"mediaType,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfPages *int `json:"numberOfPages,omitempty"`
	PovCharacters *[]any `json:"povCharacters,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Released *string `json:"released,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BookLoadMatch is the typed request payload for Book.LoadTyped.
type BookLoadMatch struct {
	Id int `json:"id"`
}

// BookListMatch is the typed request payload for Book.ListTyped.
type BookListMatch struct {
	Authors *[]any `json:"authors,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Country *string `json:"country,omitempty"`
	Isbn *string `json:"isbn,omitempty"`
	MediaType *string `json:"mediaType,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfPages *int `json:"numberOfPages,omitempty"`
	PovCharacters *[]any `json:"povCharacters,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Released *string `json:"released,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Character is the typed data model for the character entity.
type Character struct {
	Aliases *[]any `json:"aliases,omitempty"`
	Allegiances *[]any `json:"allegiances,omitempty"`
	Books *[]any `json:"books,omitempty"`
	Born *string `json:"born,omitempty"`
	Culture *string `json:"culture,omitempty"`
	Died *string `json:"died,omitempty"`
	Father *string `json:"father,omitempty"`
	Mother *string `json:"mother,omitempty"`
	Name *string `json:"name,omitempty"`
	PlayedBy *[]any `json:"playedBy,omitempty"`
	PovBooks *[]any `json:"povBooks,omitempty"`
	Spouse *string `json:"spouse,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	TvSeries *[]any `json:"tvSeries,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Aliases *[]any `json:"aliases,omitempty"`
	Allegiances *[]any `json:"allegiances,omitempty"`
	Books *[]any `json:"books,omitempty"`
	Born *string `json:"born,omitempty"`
	Culture *string `json:"culture,omitempty"`
	Died *string `json:"died,omitempty"`
	Father *string `json:"father,omitempty"`
	Mother *string `json:"mother,omitempty"`
	Name *string `json:"name,omitempty"`
	PlayedBy *[]any `json:"playedBy,omitempty"`
	PovBooks *[]any `json:"povBooks,omitempty"`
	Spouse *string `json:"spouse,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	TvSeries *[]any `json:"tvSeries,omitempty"`
	Url *string `json:"url,omitempty"`
}

// House is the typed data model for the house entity.
type House struct {
	AncestralWeapons *[]any `json:"ancestralWeapons,omitempty"`
	CadetBranches *[]any `json:"cadetBranches,omitempty"`
	CoatOfArms *string `json:"coatOfArms,omitempty"`
	CurrentLord *string `json:"currentLord,omitempty"`
	DiedOut *string `json:"diedOut,omitempty"`
	Founded *string `json:"founded,omitempty"`
	Founder *string `json:"founder,omitempty"`
	Heir *string `json:"heir,omitempty"`
	Name *string `json:"name,omitempty"`
	Overlord *string `json:"overlord,omitempty"`
	Region *string `json:"region,omitempty"`
	Seats *[]any `json:"seats,omitempty"`
	SwornMembers *[]any `json:"swornMembers,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Url *string `json:"url,omitempty"`
	Words *string `json:"words,omitempty"`
}

// HouseLoadMatch is the typed request payload for House.LoadTyped.
type HouseLoadMatch struct {
	Id int `json:"id"`
}

// HouseListMatch is the typed request payload for House.ListTyped.
type HouseListMatch struct {
	AncestralWeapons *[]any `json:"ancestralWeapons,omitempty"`
	CadetBranches *[]any `json:"cadetBranches,omitempty"`
	CoatOfArms *string `json:"coatOfArms,omitempty"`
	CurrentLord *string `json:"currentLord,omitempty"`
	DiedOut *string `json:"diedOut,omitempty"`
	Founded *string `json:"founded,omitempty"`
	Founder *string `json:"founder,omitempty"`
	Heir *string `json:"heir,omitempty"`
	Name *string `json:"name,omitempty"`
	Overlord *string `json:"overlord,omitempty"`
	Region *string `json:"region,omitempty"`
	Seats *[]any `json:"seats,omitempty"`
	SwornMembers *[]any `json:"swornMembers,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Url *string `json:"url,omitempty"`
	Words *string `json:"words,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
