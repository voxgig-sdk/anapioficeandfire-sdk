<?php
declare(strict_types=1);

// Anapioficeandfire SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AnapioficeandfireUtility::setRegistrar(function (AnapioficeandfireUtility $u): void {
    $u->clean = [AnapioficeandfireClean::class, 'call'];
    $u->done = [AnapioficeandfireDone::class, 'call'];
    $u->make_error = [AnapioficeandfireMakeError::class, 'call'];
    $u->feature_add = [AnapioficeandfireFeatureAdd::class, 'call'];
    $u->feature_hook = [AnapioficeandfireFeatureHook::class, 'call'];
    $u->feature_init = [AnapioficeandfireFeatureInit::class, 'call'];
    $u->fetcher = [AnapioficeandfireFetcher::class, 'call'];
    $u->make_fetch_def = [AnapioficeandfireMakeFetchDef::class, 'call'];
    $u->make_context = [AnapioficeandfireMakeContext::class, 'call'];
    $u->make_options = [AnapioficeandfireMakeOptions::class, 'call'];
    $u->make_request = [AnapioficeandfireMakeRequest::class, 'call'];
    $u->make_response = [AnapioficeandfireMakeResponse::class, 'call'];
    $u->make_result = [AnapioficeandfireMakeResult::class, 'call'];
    $u->make_point = [AnapioficeandfireMakePoint::class, 'call'];
    $u->make_spec = [AnapioficeandfireMakeSpec::class, 'call'];
    $u->make_url = [AnapioficeandfireMakeUrl::class, 'call'];
    $u->param = [AnapioficeandfireParam::class, 'call'];
    $u->prepare_auth = [AnapioficeandfirePrepareAuth::class, 'call'];
    $u->prepare_body = [AnapioficeandfirePrepareBody::class, 'call'];
    $u->prepare_headers = [AnapioficeandfirePrepareHeaders::class, 'call'];
    $u->prepare_method = [AnapioficeandfirePrepareMethod::class, 'call'];
    $u->prepare_params = [AnapioficeandfirePrepareParams::class, 'call'];
    $u->prepare_path = [AnapioficeandfirePreparePath::class, 'call'];
    $u->prepare_query = [AnapioficeandfirePrepareQuery::class, 'call'];
    $u->result_basic = [AnapioficeandfireResultBasic::class, 'call'];
    $u->result_body = [AnapioficeandfireResultBody::class, 'call'];
    $u->result_headers = [AnapioficeandfireResultHeaders::class, 'call'];
    $u->transform_request = [AnapioficeandfireTransformRequest::class, 'call'];
    $u->transform_response = [AnapioficeandfireTransformResponse::class, 'call'];
});
