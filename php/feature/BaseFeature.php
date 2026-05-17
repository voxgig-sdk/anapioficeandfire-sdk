<?php
declare(strict_types=1);

// Anapioficeandfire SDK base feature

class AnapioficeandfireBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AnapioficeandfireContext $ctx, array $options): void {}
    public function PostConstruct(AnapioficeandfireContext $ctx): void {}
    public function PostConstructEntity(AnapioficeandfireContext $ctx): void {}
    public function SetData(AnapioficeandfireContext $ctx): void {}
    public function GetData(AnapioficeandfireContext $ctx): void {}
    public function GetMatch(AnapioficeandfireContext $ctx): void {}
    public function SetMatch(AnapioficeandfireContext $ctx): void {}
    public function PrePoint(AnapioficeandfireContext $ctx): void {}
    public function PreSpec(AnapioficeandfireContext $ctx): void {}
    public function PreRequest(AnapioficeandfireContext $ctx): void {}
    public function PreResponse(AnapioficeandfireContext $ctx): void {}
    public function PreResult(AnapioficeandfireContext $ctx): void {}
    public function PreDone(AnapioficeandfireContext $ctx): void {}
    public function PreUnexpected(AnapioficeandfireContext $ctx): void {}
}
