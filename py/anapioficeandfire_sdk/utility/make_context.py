# Anapioficeandfire SDK utility: make_context

from anapioficeandfire_sdk.core.context import AnapioficeandfireContext


def make_context_util(ctxmap, basectx):
    return AnapioficeandfireContext(ctxmap, basectx)
