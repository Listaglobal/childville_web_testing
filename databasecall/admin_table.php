<?php

namespace DatabaseCall;

use Config;
use Config\Constants;
use Config\Utility_Functions;

/**
 * Post model
 *
 * PHP version 5.4
 */
class Admin_Table extends Config\DB_Connect
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
    public static $imagesPath = "profile";
    public static $baseurl = Constants::LIVE_OR_LOCAL == "1" ? Constants::LIVE_BASE_URL : Constants::BASE_URL;
    public static function getAdminByEmail($email = "", $data = "*")
    {
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];

        $checkdata = $connect->prepare("SELECT  $data FROM admin WHERE email = ?");
        $checkdata->bind_param("s", $email);
        $checkdata->execute();
        $getresultemail = $checkdata->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static  function getIdentity($userIdentity, $data = "*")
    {
        $connect = static::getDB();
        $alldata = [];
        $sqlQuery = "SELECT $data FROM admin where email  = ? OR trackid = ?";
        $stmt = $connect->prepare($sqlQuery);
        $stmt->bind_param("ss", $userIdentity, $userIdentity);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            return $row;
        }
        return $alldata;
    }

    public static function checkIfIsAdmin($pubkey)
    {
        $connect = static::getDB();
        $adminQuery = 'SELECT * FROM admin where userpubkey = ?';
        $adminStmt = $connect->prepare($adminQuery);
        $adminStmt->bind_param("s", $pubkey);
        $adminStmt->execute();
        $result = $adminStmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0) {
            $row = $result->fetch_assoc();
            $adminId = $row['trackid'];
            return $adminId;
        }

        return false;
    }

    public static function getAdminWithEmailorUserid($username)
    {
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];
        $checkdata = $connect->prepare("SELECT * FROM admin WHERE email = ? || username = ? || trackid = ? || id = ?");
        $checkdata->bind_param("ssss", $username, $username, $username, $username);
        $checkdata->execute();
        $getresultemail = $checkdata->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function getAllAdmin($page, $offset, $noPerPage, $searchQuery, $sortQuery, $paramString,  $params = [])
    {
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];


        $query = "SELECT * FROM admin WHERE admin.id > 0 $sortQuery $searchQuery";
        $stmt = $connect->prepare($query);
        if (count($params) > 0) {
            $stmt->bind_param($paramString, ...$params);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $total_numRow = $result->num_rows;
        $total_pages = ceil($total_numRow / $noPerPage);

        $paramString .= "ss";
        $params[] = $offset;
        $params[] = $noPerPage;

        $query = "$query ORDER BY admin.id DESC LIMIT ?,?";
        $stmt = $connect->prepare($query);
        if (count($params) > 0) {
            $stmt->bind_param($paramString, ...$params);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $total_numRow = $result->num_rows;



        if ($total_numRow > 0) {

            // iterate over the result
            while ($row = $result->fetch_assoc()) {
                $row['id'] = $row['trackid'];
                $row['status_value'] = ($row['status'] == 1) ? "Active" : "Inactive";
                // $row['can_ban'] = ($adminAccess['ban_user'] == 1 && $row['trackid'] != $adminid && $row['userlevel'] != "WYF1") ? true : false;
                // $row['can_delete'] = ($adminAccess['delete_user'] == 1 && $row['trackid'] != $adminid && $row['userlevel'] != "WYF1") ? true : false;
                $row['is_super_admin'] = $row['admin_level'] === "WYF1"  ? 1 : 0;
                $access = Admin_Level_Table::getAdminLevelAccess($row['trackid']);
                $row['access'] = ($access) ? $access : false;

                unset($row['password']);
                unset($row['trackid']);
                unset($row['adminpubkey']);
                unset($row['updated_at']);
                $data = json_decode(json_encode($row), true);

                array_push($alldata, $data);
            }

            $results = [
                'page' => $page,
                'per_page' => $noPerPage,
                'total_data' => $total_numRow,
                'totalPage' => $total_pages,
                'admins' => $alldata
            ];

            return $results;
        }

        return false;
    }

    public static function addAdmin($name, $adminLevel, $email, $password)
    {
        $connect = static::getDB();
        // generate manger pubkey
        $pubkey = Utility_Functions::generateUniquePubKey("admin", "adminpubkey");
        $trackid = Utility_Functions::generateUniqueShortKey("admin", "trackid");
        $passwordEncrypt = Utility_Functions::Password_encrypt($password);
        $status = 1;
        $password_updated = 0;

        $insertQuery = "INSERT INTO admin (`email`, `name`, `password`, `status`, `adminpubkey`, `userlevel`, password_updated, `trackid`) VALUES ( ?,?,?, ?, ?, ?, ?, ?)";
        $checkdata = $connect->prepare($insertQuery);
        $checkdata->bind_param("ssssssss", $email, $name, $passwordEncrypt, $status, $pubkey, $adminLevel, $password_updated, $trackid);
        $executed = $checkdata->execute();
        if ($executed) {
            return true;
        }

        return false;
    }

    public static function deleteAdmin($adminid)
    {
        $connect = static::getDB();
        $adminQuery = 'DELETE FROM `admin` WHERE trackid = ?';
        $adminStmt = $connect->prepare($adminQuery);
        $adminStmt->bind_param("s", $adminid);
        $exe = $adminStmt->execute();
        if ($exe) {
            return true;
        } else {
            return false;
        }
    }

    public static function changeAdminPAssword($adminid, $password)
    {
        $connect = static::getDB();
        $passwordEncrypt = Utility_Functions::Password_encrypt($password);
        $tokenQuery = "UPDATE admin SET password = ? WHERE trackid = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $passwordEncrypt, $adminid);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function resetAdminPAssword($adminid, $password)
    {
        $connect = static::getDB();
        $password_updated = 0;
        $passwordEncrypt = Utility_Functions::Password_encrypt($password);
        $tokenQuery = "UPDATE admin SET password = ?, password_updated = ? WHERE trackid = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("sss", $passwordEncrypt, $password_updated, $adminid);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function updateNewAdminInfo($name, $username, $password, $adminid)
    {
        $connect = static::getDB();
        $profile_updated = 1;
        $password_updated = 1;
        $tokenQuery = "UPDATE admin SET name = ?, username = ?, password = ?, profile_updated = ?, password_updated = ? WHERE trackid = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ssssss", $name, $username, $password, $profile_updated, $password_updated, $adminid);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function updateAdminProfile($name, $username, $adminid)
    {
        $connect = static::getDB();
        $tokenQuery = "UPDATE admin SET name = ?, username = ? WHERE trackid = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("sss", $name, $username, $adminid);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function changeAdminLevel($level, $adminid)
    {
        // check field
        $connect = static::getDB();
        $query = "UPDATE admin SET `userlevel` = ? WHERE teckid = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $level, $adminid);
        $executed = $stmt->execute();
        if ($executed) {
            if ($stmt->affected_rows > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function checkIfIsSuperAdmin($pubkey)
    {
        $connect = static::getDB();
        $adminQuery = 'SELECT trackid, userlevel FROM admin
        where adminpubkey = ? OR trackid = ? ';
        $adminStmt = $connect->prepare($adminQuery);
        $adminStmt->bind_param("ss", $pubkey, $pubkey);
        $adminStmt->execute();
        $result = $adminStmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0) {
            $row = $result->fetch_assoc();
            $adminId = $row['trackid'];
            if ($row['userlevel'] == "WYF1") {
                return $adminId;
            }
        }

        return false;
    }
}
