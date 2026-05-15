<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility: result_headers

class KokkaiKaigirokuApiResultHeaders
{
    public static function call(KokkaiKaigirokuApiContext $ctx): ?KokkaiKaigirokuApiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
