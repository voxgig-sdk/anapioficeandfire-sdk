// Typed models for the Anapioficeandfire SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Book is the typed data model for the book entity.
type Book struct {
	Author *[]any `json:"author,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Country *string `json:"country,omitempty"`
	Isbn *string `json:"isbn,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfPage *int `json:"number_of_page,omitempty"`
	PovCharacter *[]any `json:"pov_character,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Released *string `json:"released,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BookLoadMatch is the typed request payload for Book.LoadTyped.
type BookLoadMatch struct {
	Id int `json:"id"`
}

// BookListMatch mirrors the book fields as an all-optional match
// filter (Go analog of Partial<Book>).
type BookListMatch struct {
	Author *[]any `json:"author,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Country *string `json:"country,omitempty"`
	Isbn *string `json:"isbn,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfPage *int `json:"number_of_page,omitempty"`
	PovCharacter *[]any `json:"pov_character,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Released *string `json:"released,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Character is the typed data model for the character entity.
type Character struct {
	Alias *[]any `json:"alias,omitempty"`
	Allegiance *[]any `json:"allegiance,omitempty"`
	Book *[]any `json:"book,omitempty"`
	Born *string `json:"born,omitempty"`
	Culture *string `json:"culture,omitempty"`
	Died *string `json:"died,omitempty"`
	Father *string `json:"father,omitempty"`
	Mother *string `json:"mother,omitempty"`
	Name *string `json:"name,omitempty"`
	PlayedBy *[]any `json:"played_by,omitempty"`
	PovBook *[]any `json:"pov_book,omitempty"`
	Spouse *string `json:"spouse,omitempty"`
	Title *[]any `json:"title,omitempty"`
	TvSeries *[]any `json:"tv_series,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch mirrors the character fields as an all-optional match
// filter (Go analog of Partial<Character>).
type CharacterListMatch struct {
	Alias *[]any `json:"alias,omitempty"`
	Allegiance *[]any `json:"allegiance,omitempty"`
	Book *[]any `json:"book,omitempty"`
	Born *string `json:"born,omitempty"`
	Culture *string `json:"culture,omitempty"`
	Died *string `json:"died,omitempty"`
	Father *string `json:"father,omitempty"`
	Mother *string `json:"mother,omitempty"`
	Name *string `json:"name,omitempty"`
	PlayedBy *[]any `json:"played_by,omitempty"`
	PovBook *[]any `json:"pov_book,omitempty"`
	Spouse *string `json:"spouse,omitempty"`
	Title *[]any `json:"title,omitempty"`
	TvSeries *[]any `json:"tv_series,omitempty"`
	Url *string `json:"url,omitempty"`
}

// House is the typed data model for the house entity.
type House struct {
	AncestralWeapon *[]any `json:"ancestral_weapon,omitempty"`
	CadetBranch *[]any `json:"cadet_branch,omitempty"`
	CoatOfArm *string `json:"coat_of_arm,omitempty"`
	CurrentLord *string `json:"current_lord,omitempty"`
	DiedOut *string `json:"died_out,omitempty"`
	Founded *string `json:"founded,omitempty"`
	Founder *string `json:"founder,omitempty"`
	Heir *string `json:"heir,omitempty"`
	Name *string `json:"name,omitempty"`
	Overlord *string `json:"overlord,omitempty"`
	Region *string `json:"region,omitempty"`
	Seat *[]any `json:"seat,omitempty"`
	SwornMember *[]any `json:"sworn_member,omitempty"`
	Title *[]any `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	Word *string `json:"word,omitempty"`
}

// HouseLoadMatch is the typed request payload for House.LoadTyped.
type HouseLoadMatch struct {
	Id int `json:"id"`
}

// HouseListMatch mirrors the house fields as an all-optional match
// filter (Go analog of Partial<House>).
type HouseListMatch struct {
	AncestralWeapon *[]any `json:"ancestral_weapon,omitempty"`
	CadetBranch *[]any `json:"cadet_branch,omitempty"`
	CoatOfArm *string `json:"coat_of_arm,omitempty"`
	CurrentLord *string `json:"current_lord,omitempty"`
	DiedOut *string `json:"died_out,omitempty"`
	Founded *string `json:"founded,omitempty"`
	Founder *string `json:"founder,omitempty"`
	Heir *string `json:"heir,omitempty"`
	Name *string `json:"name,omitempty"`
	Overlord *string `json:"overlord,omitempty"`
	Region *string `json:"region,omitempty"`
	Seat *[]any `json:"seat,omitempty"`
	SwornMember *[]any `json:"sworn_member,omitempty"`
	Title *[]any `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	Word *string `json:"word,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
