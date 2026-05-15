<?php
declare(strict_types=1);

// Anapioficeandfire SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AnapioficeandfireMakeContext
{
    public static function call(array $ctxmap, ?AnapioficeandfireContext $basectx): AnapioficeandfireContext
    {
        return new AnapioficeandfireContext($ctxmap, $basectx);
    }
}
