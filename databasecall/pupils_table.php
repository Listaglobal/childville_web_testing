<?php

namespace DatabaseCall;

use Config;
use Config\Constants;
use Config\Mail_SMS_Responses;
use Config\Utility_Functions;

/**
 * Post model
 *
 * PHP version 5.4
 */
class PuPils_Table extends Config\DB_Connect
{
    /**
     * Get all the posts as an associative array
     *
     * @return array
     */

    /*
    If a data is not needed send empty to it, bank name and namk code should be join as bankname^bankcode

     */
    // APi functions
    public const  tableName = "pupils";
    public static $baseurl = Constants::APP_BASE_URL;
    public static $assetUrl = Constants::APP_ASSET_PATH . "pupils/";
    private static $minId = 0;
    public static $path = "pupils/";

    public static function addPuPils($data)
    {
        $connect = static::getDB();
        $tableName = self::tableName;

        $trackid = Config\Utility_Functions::generateUniqueShortKey($tableName, 'trackid');
        $status = 1;

        $params = [];
        $paramString = "";
        foreach ($data as $key => $val) {
            $params[] = $val;
            $paramString .= "s";
        }


        $insertQuery = "INSERT INTO `pupils`(`trackid`, `status`,`fullName`, `parentEmail`, `image`, `parentName`, `pcontant`, `age`, `DOB`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $connect->prepare($insertQuery);
        $stmt->bind_param("ss$paramString", $trackid, $status, ...$params);
        $executed = $stmt->execute();

        if ($executed) {
            return true;
        }

        return false;
    }



}
