package voxgigkokkaikaigirokuapisdk

import (
	"github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/core"
	"github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/entity"
	"github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/feature"
	_ "github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/utility"
)

// Type aliases preserve external API.
type KokkaiKaigirokuApiSDK = core.KokkaiKaigirokuApiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type KokkaiKaigirokuApiEntity = core.KokkaiKaigirokuApiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type KokkaiKaigirokuApiError = core.KokkaiKaigirokuApiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMeetingEntityFunc = func(client *core.KokkaiKaigirokuApiSDK, entopts map[string]any) core.KokkaiKaigirokuApiEntity {
		return entity.NewMeetingEntity(client, entopts)
	}
	core.NewMeetingListEntityFunc = func(client *core.KokkaiKaigirokuApiSDK, entopts map[string]any) core.KokkaiKaigirokuApiEntity {
		return entity.NewMeetingListEntity(client, entopts)
	}
	core.NewSpeechEntityFunc = func(client *core.KokkaiKaigirokuApiSDK, entopts map[string]any) core.KokkaiKaigirokuApiEntity {
		return entity.NewSpeechEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewKokkaiKaigirokuApiSDK = core.NewKokkaiKaigirokuApiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewKokkaiKaigirokuApiSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *KokkaiKaigirokuApiSDK  { return NewKokkaiKaigirokuApiSDK(nil) }
func Test() *KokkaiKaigirokuApiSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
