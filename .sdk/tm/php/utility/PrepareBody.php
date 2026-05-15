<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility: prepare_body

class KokkaiKaigirokuApiPrepareBody
{
    public static function call(KokkaiKaigirokuApiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
