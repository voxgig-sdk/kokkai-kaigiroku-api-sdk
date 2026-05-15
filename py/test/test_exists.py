# ProjectName SDK exists test

import pytest
from kokkaikaigirokuapi_sdk import KokkaiKaigirokuApiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KokkaiKaigirokuApiSDK.test(None, None)
        assert testsdk is not None
