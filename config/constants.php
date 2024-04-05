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
    const DB_NAME = 'childville';
    const LIVE_DB_NAME = '';

    /**
     * Database user
     * @var string
     */
    const DB_USER = 'root';
    const LIVE_DB_USER = '';

    /**
     * Database password
     * @var string
     */
    const DB_PASSWORD = '';
    const LIVE_DB_PASSWORD = '';



    /**
     * Show or hide error messages on screen
     * @var boolean
     */
    const SHOW_ERRORS = true;
    // App base url, main ho,e page link
    const BASE_URL = "http://localhost/childville_web/";
    const LIVE_BASE_URL = "https://childville.com/";
    const APP_NAME = "Childville - Pre-School";
    const APP_SHORT_KEY = "CHILDVILLE";
    const CURRENT_VERSION = "1.0"; // where all assets is
    const APP_BASE_URL = self::LIVE_OR_LOCAL == 0 ? self::BASE_URL : self::LIVE_BASE_URL;
    const APP_ASSET_PATH = self::APP_BASE_URL . "assets/images/";
}
