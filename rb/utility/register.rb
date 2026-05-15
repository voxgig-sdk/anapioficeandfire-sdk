# Anapioficeandfire SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AnapioficeandfireUtility.registrar = ->(u) {
  u.clean = AnapioficeandfireUtilities::Clean
  u.done = AnapioficeandfireUtilities::Done
  u.make_error = AnapioficeandfireUtilities::MakeError
  u.feature_add = AnapioficeandfireUtilities::FeatureAdd
  u.feature_hook = AnapioficeandfireUtilities::FeatureHook
  u.feature_init = AnapioficeandfireUtilities::FeatureInit
  u.fetcher = AnapioficeandfireUtilities::Fetcher
  u.make_fetch_def = AnapioficeandfireUtilities::MakeFetchDef
  u.make_context = AnapioficeandfireUtilities::MakeContext
  u.make_options = AnapioficeandfireUtilities::MakeOptions
  u.make_request = AnapioficeandfireUtilities::MakeRequest
  u.make_response = AnapioficeandfireUtilities::MakeResponse
  u.make_result = AnapioficeandfireUtilities::MakeResult
  u.make_point = AnapioficeandfireUtilities::MakePoint
  u.make_spec = AnapioficeandfireUtilities::MakeSpec
  u.make_url = AnapioficeandfireUtilities::MakeUrl
  u.param = AnapioficeandfireUtilities::Param
  u.prepare_auth = AnapioficeandfireUtilities::PrepareAuth
  u.prepare_body = AnapioficeandfireUtilities::PrepareBody
  u.prepare_headers = AnapioficeandfireUtilities::PrepareHeaders
  u.prepare_method = AnapioficeandfireUtilities::PrepareMethod
  u.prepare_params = AnapioficeandfireUtilities::PrepareParams
  u.prepare_path = AnapioficeandfireUtilities::PreparePath
  u.prepare_query = AnapioficeandfireUtilities::PrepareQuery
  u.result_basic = AnapioficeandfireUtilities::ResultBasic
  u.result_body = AnapioficeandfireUtilities::ResultBody
  u.result_headers = AnapioficeandfireUtilities::ResultHeaders
  u.transform_request = AnapioficeandfireUtilities::TransformRequest
  u.transform_response = AnapioficeandfireUtilities::TransformResponse
}
