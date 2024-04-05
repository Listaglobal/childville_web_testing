<?php

namespace DatabaseCall;

use Config;
use Config\Utility_Functions;

/**
 * Post model
 *
 * PHP version 5.4
 */
class System_Defaults extends Config\DB_Connect
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

    public static function getAPIJwtData()
    {
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];
        $first = 1;
        $checkdata = $connect->prepare("SELECT  * FROM  apidatatable WHERE id = ?");
        $checkdata->bind_param("s", $first);
        $checkdata->execute();
        $getresultemail = $checkdata->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }
    public static function getAllSystemSetting()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM systemsettings WHERE id=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            //split youtubelinks by comma
            // $getthedata['youtubelinks'] = explode(',', $getthedata['youtubelinks']);
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function getDetailedSystemSetting()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM systemsettings WHERE id=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            //split youtubelinks by comma
            $getthedata['youtubelinks'] = explode(',', $getthedata['youtubelinks']);
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function updateApiData($data)
    {
        //privatekey`, `tokenexpiremin`, `servername`, `
        $connect = static::getDB();
        $id = 1;
        $tokenQuery = "UPDATE apidatatable SET privatekey = ?, tokenexpiremin = ?, servername = ? WHERE id = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ssss", $data->privatekey, $data->tokenexpiremin, $data->servername, $id);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows >= 0) {
                $res = ($tokenStmt->affected_rows > 0) ? $tokenStmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function updateSystem($name, $iosversion, $androidversion, $webversion, $activesmssystem, $activemailsystem, $emailfrom, $baseurl, $location, $appshortdetail, $activepaysystem, $activebanksystem, $supportemail, $appimgurl, $activebvnsystem, $youtubelinks)
    {
        //SELECT `id`, `name`, `iosversion`, `androidversion`, `webversion`, `activesmssystem`, `activemailsystem`, `emailfrom`, `baseurl`, `location`, `appshortdetail`, `activepaysystem`, 
        //`activebanksystem`, `activebvnsystem`, `supportemail`, `youtubelinks`, `appimgurl`, `referalpointforusers`, `maxngn_auto`,  FROM `systemsettings` WHERE 1
        $connect = static::getDB();
        $id = 1;
        $tokenQuery = "UPDATE systemsettings SET `name` = ?, `iosversion` = ?, `androidversion` = ?, `webversion` = ?, `activesmssystem` = ?, `activemailsystem` = ?, `emailfrom` = ?, `baseurl` = ?, `location` = ?, `appshortdetail` = ?, `activepaysystem` = ?, `activebanksystem` = ?, activebvnsystem = ?, `supportemail` = ?, youtubelinks = ?, `appimgurl` = ? WHERE id = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("sssssssssssssssss", $name, $iosversion, $androidversion, $webversion, $activesmssystem, $activemailsystem, $emailfrom, $baseurl, $location, $appshortdetail, $activepaysystem, $activebanksystem, $activebvnsystem, $supportemail, $youtubelinks, $appimgurl,  $id);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows >= 0) {
                $res = ($tokenStmt->affected_rows > 0) ? $tokenStmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function  GetActiveSendGridApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM sendgridapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }
    public static function  GetActiveTermiApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM termiapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }
    public static function  GetActiveKudiApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM kudiapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }
    public static function  GetActiveSmartSolutionApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM smartsolutionapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function  GetActiveZeptoApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM zeptoapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function GetActiveSimpuApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM simpuapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }


    public static function GetActivePaystackApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM paystackapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function GetActiveFirebaseApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM firebasedetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function GetActiveCountryApi()
    {
        $connect = static::getDB();
        $alldata = [];
        $active = 1;
        $getdataemail =  $connect->prepare("SELECT * FROM countryapidetails WHERE status=?");
        $getdataemail->bind_param("s", $active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function GetActiveVtPassApi(){
        $connect = static::getDB();
        $alldata=[];
        $active=1;
        $getdataemail =  $connect->prepare("SELECT * FROM vtpassdetails WHERE status=?");
        $getdataemail->bind_param("s",$active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if( $getresultemail->num_rows> 0){
            $getthedata= $getresultemail->fetch_assoc();
            $alldata=$getthedata;
        }
        return $alldata;
    }

    public static function GetActiveOneappApi(){
        $connect = static::getDB();
        $alldata=[];
        $active=1;
        $getdataemail =  $connect->prepare("SELECT * FROM oneappapidetails WHERE status=?");
        $getdataemail->bind_param("s",$active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if( $getresultemail->num_rows> 0){
            $getthedata= $getresultemail->fetch_assoc();
            $alldata=$getthedata;
        }
        return $alldata;
    }

    public static function GetActiveBuyPowerApi(){
        $connect = static::getDB();
        $alldata=[];
        $active=1;
        $getdataemail =  $connect->prepare("SELECT * FROM buypowerdetails WHERE status=?");
        $getdataemail->bind_param("s",$active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if( $getresultemail->num_rows> 0){
            $getthedata= $getresultemail->fetch_assoc();
            $alldata=$getthedata;
        }
        return $alldata;
    }

    public static function GetActiveMoniffyApi(){
        $connect = static::getDB();
        $alldata=[];
        $active=1;
        $getdataemail =  $connect->prepare("SELECT * FROM monifyapidetails WHERE status=?");
        $getdataemail->bind_param("s",$active);
        $getdataemail->execute();
        $getresultemail = $getdataemail->get_result();
        if( $getresultemail->num_rows> 0){
            $getthedata= $getresultemail->fetch_assoc();
            $alldata=$getthedata;
        }
        return $alldata;
    }

}
