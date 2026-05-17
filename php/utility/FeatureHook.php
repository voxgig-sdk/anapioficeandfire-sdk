<?php
declare(strict_types=1);

// Anapioficeandfire SDK utility: feature_hook

class AnapioficeandfireFeatureHook
{
    public static function call(AnapioficeandfireContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
