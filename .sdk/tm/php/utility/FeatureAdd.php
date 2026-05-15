<?php
declare(strict_types=1);

// Anapioficeandfire SDK utility: feature_add

class AnapioficeandfireFeatureAdd
{
    public static function call(AnapioficeandfireContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
