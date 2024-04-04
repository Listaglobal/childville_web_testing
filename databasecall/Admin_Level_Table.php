<?php

namespace DatabaseCall;

use Config;
use Config\Utility_Functions;

/**
 * Post model
 *
 * PHP version 5.4
 */
class Admin_Level_Table extends Config\DB_Connect
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
    //`access_admin`, `access_admins`, `access_statistics`, `access_integration`, `access_estates`, `access_settings`, `access_dash_stats`, `access_user_details`, `delete_user`, `access_user_phone`, `ban_user`,
    public static function getAdminLevel($page, $offset, $noPerPage, $searchQuery,$sortQuery, $paramString, $params=[]){
        
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];

        if (!empty($search) && $search!="" && $search!=' '){
            $searchParam = "%{$search}%";

            $query = "SELECT * FROM admin_levels WHERE admin_levels.id > 0 $searchQuery $sortQuery";
            $stmt= $connect->prepare($query);
            $stmt->bind_param("s".$paramString, $searchParam, ...$params);
            $stmt->execute();
            $result= $stmt->get_result();
            $total_numRow = $result->num_rows;
            $total_pages = ceil($total_numRow / $noPerPage);

            $paramString .= "ss";
            $params[] = $offset;
            $params[] = $noPerPage;

            $query = "$query ORDER BY admin_levels.id DESC LIMIT ?,?";
            $stmt= $connect->prepare($query);
            $stmt->bind_param("s".$paramString, $searchParam, ...$params);
            $stmt->execute();
            $result= $stmt->get_result();
            $total_numRow = $result->num_rows;
        }

        if ( $total_numRow > 0 ){

            // iterate over the result
            while ( $row= $result->fetch_assoc() ){
                $row['id'] = $row['levelid'];

                //`, `access_admins`, `access_statistics`, `access_integration`, `access_estates`, `access_settings`, `access_dash_stats`, `access_user_details`, `delete_user`, `access_user_phone`, `ban_user`
                $row['access_admin_value'] = ($row['access_admin'] == 1) ? "Yes" : "No";
                $row['access_admins_value'] = ($row['access_admins'] == 1) ? "Yes" : "No";
                $row['access_statistics_value'] = ($row['access_statistics'] == 1) ? "Yes" : "No";
                $row['access_integration_value'] = ($row['access_integration'] == 1) ? "Yes" : "No";
                $row['access_settings_value'] = ($row['access_settings'] == 1) ? "Yes" : "No";
                $row['access_dash_stats_value'] = ($row['access_dash_stats'] == 1) ? "Yes" : "No";
                $row['access_user_details_value'] = ($row['access_user_details'] == 1) ? "Yes" : "No";
                $row['delete_user_value'] = ($row['delete_user'] == 1) ? "Yes" : "No";
                $row['access_user_phone_value'] = ($row['access_user_phone'] == 1) ? "Yes" : "No";
                $row['ban_user_value'] = ($row['ban_user'] == 1) ? "Yes" : "No";
               

                unset($row['levelid']);

                $data = json_decode(json_encode($row), true);

                array_push($alldata, $data);
            }

            $results = [
                'page' => $page,
                'per_page' => $noPerPage,
                'total_data' => $total_numRow,
                'totalPage' => $total_pages,
                'adminLevels'=> $alldata
            ];

            return $results;
        }

        return false;

    }

    public static function addAdminLevel($data){
        $connect = static::getDB();
        $insertQuery = "INSERT INTO admin_levels (`access_admin`, `access_admins`, `access_statistics`, `access_integration`, `access_estates`, `access_settings`, `access_dash_stats`, `access_user_details`, `delete_user`, `access_user_phone`, `ban_user`, `levelid`, `levelname`) VALUES (?,?,?,?,?,?,?, ?, ?, ?, ?, ?, ?)";
        $checkdata = $connect->prepare($insertQuery);
        $checkdata->bind_param("sssssssssssss", $data->access_admin, $data->access_admins, $data->access_statistics, $data->access_integration, $data->access_estates, $data->access_settings, $data->access_dash_stats, $data->access_user_details, $data->delete_user, $data->access_user_phone, $data->ban_user, $data->levelid, $data->levelname );
        $executed = $checkdata->execute();
        if ( $executed ){
            return true;
        }

        return false;
    }

    public static function updateAdminLevel($data){
        $connect = static::getDB();
        $insertQuery = "UPDATE admin_levels SET access_admin = ?, access_admins = ?, `access_statistics` = ?, `access_integration` = ?, `access_estates` = ?, `access_settings` = ?, `access_dash_stats` = ?, `access_user_details` = ?,  `delete_user` = ?, `access_user_phone` = ?, `ban_user` = ?, `levelname` = ? WHERE levelid = ?";
        $checkdata = $connect->prepare($insertQuery);
        $checkdata->bind_param("sssssssssssssssssss", $data->access_admin, $data->access_admins, $data->access_statistics, $data->access_integration, $data->access_estates, $data->access_settings, $data->access_dash_stats, $data->access_user_details, $data->delete_user, $data->access_user_phone, $data->ban_user, $data->levelname, $data->levelid, );
        $executed = $checkdata->execute();
        if ( $executed ){
            if( $checkdata->affected_rows > 0 ){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

    public static function deleteAdminlevel($levelid){
        $connect = static::getDB();
        $adminQuery = 'DELETE FROM `admin_levels` WHERE levelid = ?';
        $adminStmt = $connect->prepare($adminQuery);
        $adminStmt->bind_param("s", $levelid);
        $exe = $adminStmt->execute();
        if($exe ){
            return true;
        }
        else{
            return false;
        }
    }

   

    public static function changeAdminLevel($level, $data){
        // check field
        $connect = static::getDB();
        $query = "UPDATE admin SET `userlevel` = ? WHERE id = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $level, $data );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return true;
        }

        return false;
    }

    public static function getAdminLevelAccess($adminid){
        $alldata = [];
        // check field
        $connect = static::getDB();
        $query = "SELECT admin.trackid AS admin_id, admin_levels.* FROM `admin` LEFT JOIN admin_levels ON admin_levels.levelid = admin.admin_level WHERE admin.trackid = ?" ;
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $adminid);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0) {
            $row = $result->fetch_assoc();
            unset($row['id']);
            unset($row['created_at']);
            unset($row['updated_at']);
            // $data = json_decode(json_encode($row), true);
            // array_push($alldata, $data);
            return $row;
        }

        return false;
    }


}
