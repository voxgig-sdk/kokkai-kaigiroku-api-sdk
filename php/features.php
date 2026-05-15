<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KokkaiKaigirokuApiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KokkaiKaigirokuApiBaseFeature();
            case "test":
                return new KokkaiKaigirokuApiTestFeature();
            default:
                return new KokkaiKaigirokuApiBaseFeature();
        }
    }
}
