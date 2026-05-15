<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility: result_body

class KokkaiKaigirokuApiResultBody
{
    public static function call(KokkaiKaigirokuApiContext $ctx): ?KokkaiKaigirokuApiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
