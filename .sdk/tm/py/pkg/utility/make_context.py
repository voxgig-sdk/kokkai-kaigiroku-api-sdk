# KokkaiKaigirokuApi SDK utility: make_context

from projectname_sdk.core.context import KokkaiKaigirokuApiContext


def make_context_util(ctxmap, basectx):
    return KokkaiKaigirokuApiContext(ctxmap, basectx)
