# KokkaiKaigirokuApi SDK utility: make_context

from core.context import KokkaiKaigirokuApiContext


def make_context_util(ctxmap, basectx):
    return KokkaiKaigirokuApiContext(ctxmap, basectx)
