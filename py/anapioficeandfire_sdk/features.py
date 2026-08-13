# Anapioficeandfire SDK feature factory

from anapioficeandfire_sdk.feature.base_feature import AnapioficeandfireBaseFeature
from anapioficeandfire_sdk.feature.test_feature import AnapioficeandfireTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AnapioficeandfireBaseFeature(),
        "test": lambda: AnapioficeandfireTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
