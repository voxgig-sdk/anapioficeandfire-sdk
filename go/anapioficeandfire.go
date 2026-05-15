package voxgiganapioficeandfiresdk

import (
	"github.com/voxgig-sdk/anapioficeandfire-sdk/core"
	"github.com/voxgig-sdk/anapioficeandfire-sdk/entity"
	"github.com/voxgig-sdk/anapioficeandfire-sdk/feature"
	_ "github.com/voxgig-sdk/anapioficeandfire-sdk/utility"
)

// Type aliases preserve external API.
type AnapioficeandfireSDK = core.AnapioficeandfireSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AnapioficeandfireEntity = core.AnapioficeandfireEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AnapioficeandfireError = core.AnapioficeandfireError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBookEntityFunc = func(client *core.AnapioficeandfireSDK, entopts map[string]any) core.AnapioficeandfireEntity {
		return entity.NewBookEntity(client, entopts)
	}
	core.NewCharacterEntityFunc = func(client *core.AnapioficeandfireSDK, entopts map[string]any) core.AnapioficeandfireEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewHousEntityFunc = func(client *core.AnapioficeandfireSDK, entopts map[string]any) core.AnapioficeandfireEntity {
		return entity.NewHousEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAnapioficeandfireSDK = core.NewAnapioficeandfireSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
