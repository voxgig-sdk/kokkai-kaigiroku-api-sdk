# KokkaiKaigirokuApi SDK feature factory

from feature.base_feature import KokkaiKaigirokuApiBaseFeature
from feature.test_feature import KokkaiKaigirokuApiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KokkaiKaigirokuApiBaseFeature(),
        "test": lambda: KokkaiKaigirokuApiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
