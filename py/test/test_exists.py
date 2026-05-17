# ProjectName SDK exists test

import pytest
from anapioficeandfire_sdk import AnapioficeandfireSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AnapioficeandfireSDK.test(None, None)
        assert testsdk is not None
