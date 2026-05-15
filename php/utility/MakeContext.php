<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KokkaiKaigirokuApiMakeContext
{
    public static function call(array $ctxmap, ?KokkaiKaigirokuApiContext $basectx): KokkaiKaigirokuApiContext
    {
        return new KokkaiKaigirokuApiContext($ctxmap, $basectx);
    }
}
