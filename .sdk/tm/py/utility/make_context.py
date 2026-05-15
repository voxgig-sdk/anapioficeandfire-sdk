# Anapioficeandfire SDK utility: make_context

from core.context import AnapioficeandfireContext


def make_context_util(ctxmap, basectx):
    return AnapioficeandfireContext(ctxmap, basectx)
