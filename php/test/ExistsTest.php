<?php
declare(strict_types=1);

// Anapioficeandfire SDK exists test

require_once __DIR__ . '/../anapioficeandfire_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AnapioficeandfireSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
