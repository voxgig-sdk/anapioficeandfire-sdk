package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBookEntityFunc func(client *AnapioficeandfireSDK, entopts map[string]any) AnapioficeandfireEntity

var NewCharacterEntityFunc func(client *AnapioficeandfireSDK, entopts map[string]any) AnapioficeandfireEntity

var NewHouseEntityFunc func(client *AnapioficeandfireSDK, entopts map[string]any) AnapioficeandfireEntity

