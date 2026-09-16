# KokkaiKaigirokuApi SDK feature factory

from kokkaikaigirokuapi_sdk.feature.base_feature import KokkaiKaigirokuApiBaseFeature
from kokkaikaigirokuapi_sdk.feature.ratelimit_feature import KokkaiKaigirokuApiRatelimitFeature
from kokkaikaigirokuapi_sdk.feature.retry_feature import KokkaiKaigirokuApiRetryFeature
from kokkaikaigirokuapi_sdk.feature.test_feature import KokkaiKaigirokuApiTestFeature
from kokkaikaigirokuapi_sdk.feature.timeout_feature import KokkaiKaigirokuApiTimeoutFeature


_FEATURES = {
    "base": lambda: KokkaiKaigirokuApiBaseFeature(),
    "ratelimit": lambda: KokkaiKaigirokuApiRatelimitFeature(),
    "retry": lambda: KokkaiKaigirokuApiRetryFeature(),
    "test": lambda: KokkaiKaigirokuApiTestFeature(),
    "timeout": lambda: KokkaiKaigirokuApiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
