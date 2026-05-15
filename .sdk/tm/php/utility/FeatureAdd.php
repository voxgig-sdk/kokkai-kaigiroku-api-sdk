<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility: feature_add

class KokkaiKaigirokuApiFeatureAdd
{
    public static function call(KokkaiKaigirokuApiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
