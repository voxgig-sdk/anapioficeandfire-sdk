<?php
declare(strict_types=1);

// Anapioficeandfire SDK utility: result_body

class AnapioficeandfireResultBody
{
    public static function call(AnapioficeandfireContext $ctx): ?AnapioficeandfireResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
