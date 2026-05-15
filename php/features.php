<?php
declare(strict_types=1);

// Anapioficeandfire SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AnapioficeandfireFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AnapioficeandfireBaseFeature();
            case "test":
                return new AnapioficeandfireTestFeature();
            default:
                return new AnapioficeandfireBaseFeature();
        }
    }
}
