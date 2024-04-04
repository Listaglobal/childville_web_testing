<?php

namespace Config;

/**
 * Application configuration
 *
 * PHP version 5.4
 */
class Constants
{

    /**
     * Database host
     * @var string
     */
    const DB_HOST = 'localhost';
    const LIVE_DB_HOST = 'localhost';
    const LIVE_OR_LOCAL = 0; //0 local 1 live
    const LIVE_OR_TEST_VEND = 1; //0 live or test for vend

    /**
     * Database name
     * @var string
     */
    const DB_NAME = 'light_ng';
    const LIVE_DB_NAME = 'lightdotng_version1.0';

    /**
     * Database user
     * @var string
     */
    const DB_USER = 'root';
    const LIVE_DB_USER = 'lightdotng_root_user';

    /**
     * Database password
     * @var string
     */
    const DB_PASSWORD = '';
    const LIVE_DB_PASSWORD = 'Zebrat1ng...';



    /**
     * Show or hide error messages on screen
     * @var boolean
     */
    const SHOW_ERRORS = true;
    // App base url, main ho,e page link
    const BASE_URL = "http://localhost/lightng/";
    const LIVE_BASE_URL = "https://light.ng/";
    const APP_NAME = "LightNG";
    const APP_SHORT_KEY = "LNG";
    const CURRENT_VERSION = "1.0"; // where all assets is
    const APP_BASE_URL = self::LIVE_OR_LOCAL == 0 ? self::BASE_URL : self::LIVE_BASE_URL;
    const APP_ASSET_PATH = self::APP_BASE_URL . "assets/images/";
}
