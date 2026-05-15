<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility registration

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

KokkaiKaigirokuApiUtility::setRegistrar(function (KokkaiKaigirokuApiUtility $u): void {
    $u->clean = [KokkaiKaigirokuApiClean::class, 'call'];
    $u->done = [KokkaiKaigirokuApiDone::class, 'call'];
    $u->make_error = [KokkaiKaigirokuApiMakeError::class, 'call'];
    $u->feature_add = [KokkaiKaigirokuApiFeatureAdd::class, 'call'];
    $u->feature_hook = [KokkaiKaigirokuApiFeatureHook::class, 'call'];
    $u->feature_init = [KokkaiKaigirokuApiFeatureInit::class, 'call'];
    $u->fetcher = [KokkaiKaigirokuApiFetcher::class, 'call'];
    $u->make_fetch_def = [KokkaiKaigirokuApiMakeFetchDef::class, 'call'];
    $u->make_context = [KokkaiKaigirokuApiMakeContext::class, 'call'];
    $u->make_options = [KokkaiKaigirokuApiMakeOptions::class, 'call'];
    $u->make_request = [KokkaiKaigirokuApiMakeRequest::class, 'call'];
    $u->make_response = [KokkaiKaigirokuApiMakeResponse::class, 'call'];
    $u->make_result = [KokkaiKaigirokuApiMakeResult::class, 'call'];
    $u->make_point = [KokkaiKaigirokuApiMakePoint::class, 'call'];
    $u->make_spec = [KokkaiKaigirokuApiMakeSpec::class, 'call'];
    $u->make_url = [KokkaiKaigirokuApiMakeUrl::class, 'call'];
    $u->param = [KokkaiKaigirokuApiParam::class, 'call'];
    $u->prepare_auth = [KokkaiKaigirokuApiPrepareAuth::class, 'call'];
    $u->prepare_body = [KokkaiKaigirokuApiPrepareBody::class, 'call'];
    $u->prepare_headers = [KokkaiKaigirokuApiPrepareHeaders::class, 'call'];
    $u->prepare_method = [KokkaiKaigirokuApiPrepareMethod::class, 'call'];
    $u->prepare_params = [KokkaiKaigirokuApiPrepareParams::class, 'call'];
    $u->prepare_path = [KokkaiKaigirokuApiPreparePath::class, 'call'];
    $u->prepare_query = [KokkaiKaigirokuApiPrepareQuery::class, 'call'];
    $u->result_basic = [KokkaiKaigirokuApiResultBasic::class, 'call'];
    $u->result_body = [KokkaiKaigirokuApiResultBody::class, 'call'];
    $u->result_headers = [KokkaiKaigirokuApiResultHeaders::class, 'call'];
    $u->transform_request = [KokkaiKaigirokuApiTransformRequest::class, 'call'];
    $u->transform_response = [KokkaiKaigirokuApiTransformResponse::class, 'call'];
});
