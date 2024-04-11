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
class Users_Table extends Config\DB_Connect
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
    public const  tableName = "users";
    public static $supportMail = "support@light.ng";
    public static $imagesPath = "staff";
    public static $defaultProfilePath = "web";
    public static $baseurl = Constants::LIVE_OR_LOCAL == "1" ? Constants::LIVE_BASE_URL : Constants::BASE_URL;
    public static $loginSessionType = 1;
    public static $registerSessionType = 2;
    private static $minId = 0;

    public static function getUserByIdorEmailorUsername($username = "", $dataToGet = "*")
    {
        //input type checks if its from post request or just normal function call
        $connect = static::getDB();
        $alldata = [];
        $default_url = self::$baseurl . "assets/" . self::$defaultProfilePath . "/avatar.png";


        $checkdata = $connect->prepare("SELECT $dataToGet FROM users WHERE user_id = ? || email=? || phoneno=? || id=?");
        $checkdata->bind_param("ssss", $username, $username, $username, $username);
        $checkdata->execute();
        $getresultemail = $checkdata->get_result();
        if ($getresultemail->num_rows > 0) {
            $getthedata = $getresultemail->fetch_assoc();
            if (isset($getthedata['profile_pic']) && strlen($getthedata['profile_pic']) > 3) {
                $getthedata['profileLink'] = self::$baseurl . "assets/images/" . self::$imagesPath . "/" . $getthedata['profile_pic'];
            } else {
                $getthedata['profileLink'] = $default_url;
            }
            $alldata = $getthedata;
        }
        return $alldata;
    }

    public static function updateFcmToken($user_id, $fcm)
    {
        $connect = static::getDB();
        $error = false;
        $tokenQuery = "UPDATE users SET fcm = ? WHERE trackid = ?";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $fcm, $user_id);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                $successful = true;
                return ['updated' => true];
            } else {
                return ['updated' => false];
            }
        }
        return $error;
    }
    public static function updateLogInTime($user_id)
    {
        $connect = static::getDB();
        $error = false;
        $timeis = time();
        $tokenQuery = "UPDATE users SET last_login = ? WHERE trackid = ?";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("is", $timeis, $user_id);
        $executed = $tokenStmt->execute();
        if ($executed) {
            if ($tokenStmt->affected_rows > 0) {
                $successful = true;
                return ['updated' => true];
            } else {
                return ['updated' => false];
            }
        }
        return $error;
    }

    public static  function getIdentity($userIdentity, $data = "*")
    {
        $connect = static::getDB();
        $alldata = [];
        $sqlQuery = "SELECT $data FROM users where email  = ? OR user_id = ?";
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
    public static function addStaff($data)
    {
        $user_id =  Utility_Functions::generateUniqueShortKey("users", "user_id");
        $hashPassword = Utility_Functions::Password_encrypt($data["password"]);
        $user_pub_key =  Utility_Functions::generateUniquePubKey("users", "userpubkey");
        $status = 1;

        unset($data["password"]);

        $params = [];
        $paramString = "";
        foreach ($data as $key => $val) {
            $params[] = $val;
            $paramString .= "s";
        }

        $data = "INSERT INTO `users`( `user_id`, `password`, `userpubkey`, `status`, `fname`, `lname`, `dob`,`sex`, `class`, `profile_pic`, `phoneno`, `email`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $connect = static::getDB();
        $stmt = $connect->prepare($data);
        $stmt->bind_param("ssssssssssss", $user_id, $hashPassword, $user_pub_key, $status , ...$params );
        $executed = $stmt->execute();
        if ($executed) {
            return true;
        } else {
            return false;
        }
    }
    public static function verifyMail($user_id)
    {
        $connect = static::getDB();
        $emailverified = 1;
        $tokenQuery = "UPDATE users SET email_verified = ? WHERE  trackid = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $emailverified, $user_id);
        $exe = $tokenStmt->execute();
        if ($exe) {
            if ($tokenStmt->affected_rows >= 0) {
                $res = ($tokenStmt->affected_rows > 0) ? $tokenStmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function updateUserInfo($firstName, $lastname, $user_id)
    {
        $connect = static::getDB();
        $sql = "UPDATE users SET fname = ?, lname = ? WHERE trackid = ?";
        $stmt = $connect->prepare($sql);
        $stmt->bind_param('sss', $firstName, $lastname, $user_id);
        $exe = $stmt->execute();
        if ($exe) {
            if ($stmt->affected_rows >= 0) {
                $res = ($stmt->affected_rows > 0) ? $stmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function updateProfilePic($image, $user_id)
    {
        $connect = static::getDB();
        $sql = "UPDATE users SET profile_pic = ? WHERE trackid = ?";
        $stmt = $connect->prepare($sql);
        $stmt->bind_param('ss', $image, $user_id);
        $exe = $stmt->execute();
        if ($exe) {
            if ($stmt->affected_rows >= 0) {
                $res = ($stmt->affected_rows > 0) ? $stmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function checkIfUser($userPubKey)
    {
        $connect = static::getDB();
        $sqlQuery = 'SELECT user_id, id, email, phoneno FROM users where userpubkey = ?';
        $stmt = $connect->prepare($sqlQuery);
        $stmt->bind_param("s", $userPubKey);
        $stmt->execute();
        $result = $stmt->get_result();


        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            $id = $row['user_id'];
            return $id;
        }
        return false;
    }

    public static function changeUserPassword($user_id, $password)
    {
        $connect = static::getDB();
        $key = 1;
        $tokenQuery = "UPDATE users SET password = ?, password_changed = ? WHERE user_id = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("sss", $password, $key, $user_id);
        $exe = $tokenStmt->execute();
        if ($exe) {
            if ($tokenStmt->affected_rows >= 0) {
                $res = ($tokenStmt->affected_rows > 0) ? $tokenStmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function addActivityLog($user_id, $activity, $type)
    {
        $connect = static::getDB();

        $browser = $_SERVER['HTTP_USER_AGENT']; // get_browser()->browser . " " . get_browser()->version;
        $ipAddress = Utility_Functions::getUserIp();
        $usertype = 1;
        $status = 1;
        $code = Utility_Functions::generateUniqueShortKey("usersessionlog", "sessioncode");


        $data = "INSERT INTO `usersessionlog`(`user_id`, `activity`, `activity_type`, `sessioncode`, `ipaddress`, `browser`, `status`, `user_type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $activityStmt = $connect->prepare($data);
        $activityStmt->bind_param("ssssssss", $user_id, $activity, $type, $code, $ipAddress, $browser, $status, $usertype);
        $executed = $activityStmt->execute();

        if ($executed) {
            return true;
        } else {
            return false;
        }
    }

    public static function getUserWithPubKey($userpubkey)
    {
        $connect = static::getDB();
        // Check if the email or phone number is already in the database
        $query = 'SELECT user_id FROM users WHERE userpubkey = ?';
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $userpubkey);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0) {
            $row =  mysqli_fetch_assoc($result);
            $user_id = $row['user_id'];
            return $user_id;
        }

        return false;
    }


    public static function getUserSessionLog($user_id, $page, $offset, $noPerPage, $sortQuery, $paramString, $params = [])
    {
        $connect = static::getDB();
        $alldata = [];

        $query = "SELECT usersessionlog.*, users.fname, users.lname FROM `usersessionlog` LEFT JOIN users ON users.trackid = usersessionlog.user_id WHERE user_id = ? $sortQuery";
        $checkdata = $connect->prepare($query);
        $checkdata->bind_param("s$paramString", $user_id, ...$params);
        $checkdata->execute();
        $result = $checkdata->get_result();
        $total_numRow = $result->num_rows;
        $total_pages = ceil($total_numRow / $noPerPage);

        $paramString .= "ss";
        $params[] = $offset;
        $params[] = $noPerPage;

        $query = "$query ORDER BY usersessionlog.id DESC LIMIT ?,?";
        $checkdata = $connect->prepare($query);
        $checkdata->bind_param("s$paramString", $user_id, ...$params);
        $checkdata->execute();
        $result = $checkdata->get_result();
        $numRow = $result->num_rows;

        if ($numRow > 0) {

            while ($row = $result->fetch_assoc()) {
                $row['id'] = $row['sessioncode'];

                if ($row['activity_type'] == 1) {
                    $row['activity_type_value'] = "Login";
                } elseif ($row['activity_type'] == 2) {
                    $row['activity_type_value'] = "Registration";
                } else {
                    $row['activity_type_value'] = "";
                }



                $fullDate = Utility_Functions::gettheTimeAndDate(strtotime($row['inserttime']));

                $dateAndTime = explode(" ", $fullDate);
                $row['date'] = $dateAndTime[0];
                $row['time'] = $dateAndTime[1];

                $row['userfullname'] = $row['fname'] . " " . $row['lname'];




                unset($row['sessioncode']);
                unset($row['fname']);
                unset($row['lname']);

                $data = json_decode(json_encode($row), true);

                array_push($alldata, $data);
            }


            $results = [
                'page' => $page,
                'per_page' => $noPerPage,
                'total_data' => $total_numRow,
                'totalPage' => $total_pages,
                'activity' => $alldata
            ];

            return $results;
        }

        return false;
    }

    public static function updateBio($user_id, $bio)
    {
        $connect = static::getDB();
        $sql = "UPDATE `users` SET `bio_enabled`= ? WHERE `user_id` = ?";
        $stmt = $connect->prepare($sql);
        $stmt->bind_param('ss', $bio, $user_id);
        $exe = $stmt->execute();
        if ($exe) {
            if ($stmt->affected_rows >= 0) {
                $res = ($stmt->affected_rows > 0) ? $stmt->affected_rows : "no";
                return ['status' => true];
            } else {
                return ['status' => false];
            }
        } else {
            return false;
        }
    }

    public static function deleteAccount($user_id)
    {
        $connect = static::getDB();
        $status = 4;

        $query = "UPDATE `users` SET `status` = ? WHERE `trackid` = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $status, $user_id);
        $executed = $stmt->execute();
        if ($executed) {
            if ($stmt->affected_rows > 0) {
                return ["status" => true];
            } else {
                return ["status" => false];
            }
        }

        return false;
    }

    public static function getAllStaff($page, $offset, $noPerPage, $searchQuery, $sortQuery, $paramString, $params = [])
    {
        $connect = static::getDB();
        $alldata = [];

        //SELECT `id`, `trackid`, `email`, `fname`, `lname`, `businessname`, `businessnumber`, `address`, `username`, `phoneno`, `country`, `image`, `image_type`, `password`, `userpubkey`, `user_type`, `status`, `email_verified`, `deleted`, `profile_pic`, `created_at`, `updated_at` FROM `users` WHERE 1
        //get all data in database
        $query = "SELECT * FROM `users` WHERE users.id > ? $searchQuery $sortQuery";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$paramString", self::$minId,...$params);
        $stmt->execute();
        $result = $stmt->get_result();
        $total_numRow = $result->num_rows;
        $total_pages = ceil($total_numRow / $noPerPage);

        $paramString .= "ss";
        $params[] = $offset;
        $params[] = $noPerPage;

        $query = "$query ORDER BY id DESC LIMIT ?,? ";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$paramString", self::$minId,...$params);
        $stmt->execute();
        $result = $stmt->get_result();
        $numRow = $result->num_rows;


        if ($numRow > 0) {
            while ($row = $result->fetch_assoc()) {
                // unset all variables needed
                unset($row['id']);
                //status_value=> 1- active 2 - suspended 3 - banned 4 -frozen
                if ($row['status'] == 1) {
                    $row['status_value'] = 'Active';
                } else if ($row['status'] == 2) {
                    $row['status_value'] = 'Banned';
                } else if ($row['status'] == 3) {
                    $row['status_value'] = 'Deleted';
                } else {
                    $row['status_value'] = 'Undefined';
                }

                $row['created_at'] = Utility_Functions::gettheTimeAndDate(strtotime($row['created_at']));

                unset($row['updated_at']);
                unset($row['trackid']);
                unset($row['userpubkey']);
                unset($row['password']);
                unset($row['updated_at']);


                $data = json_decode(json_encode($row), true);
                array_push($alldata, $data);
            }
            $alldata = [
                'page' => $page,
                'per_page' => $noPerPage,
                'total_data' => $total_numRow,
                'totalPage' => $total_pages,
                'staff' => $alldata
            ];
            return $alldata;
        } else {
            return $alldata;
        }
    }


    public static function deleteUser($userid)
    {
        $connect = static::getDB();
        $adminQuery = 'DELETE FROM `users` WHERE trackid = ?';
        $adminStmt = $connect->prepare($adminQuery);
        $adminStmt->bind_param("s", $userid);
        $exe = $adminStmt->execute();
        if ($exe) {
            return true;
        } else {
            return false;
        }
    }

    public static function sendForgotPasswordToken($userId, $identity, $verifyType)
    {
        // generate token and insert it into the token table
        $token = Utility_Functions::generateUniqueNumericKey("token", "token", 4);
        // set expireTime of the token to 5 minutes
        $expiresin = "5";
        $created_time = new \DateTimeImmutable();
        $expiretime = $created_time->modify("+$expiresin minutes")->getTimestamp();
        $otptype = 3; //forget password

        

        return false;
    }

    public static function sendVerifyDetailsOTP($userId, $phone, $email, $firstname)
    {
        // send email and sms otp
        // set expireTime of the token to 5 minutes
        $expiresin = "5";
        $created_time = new \DateTimeImmutable();
        $expiretime = $created_time->modify("+$expiresin minutes")->getTimestamp();
        $receivername = $firstname;
        $phoneVerifyType = 2;
        $emailVerifyType =  1;
        $identity = $phone;
        $otptype = 2; //verify email

        // send phone OTP 
        $token = Utility_Functions::generateUniqueNumericKey("token", "token", 4);

    }

    public static function verifyUserPhoneOrEmail($user_id, $verifyType)
    {
        $connect = static::getDB();

        $columnToSet = $verifyType == 1 ? "email_verified" : "phone_verified";

        $value = 1;
        $tokenQuery = "UPDATE users SET $columnToSet = ? WHERE user_id = ? ";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $value, $user_id);
        $exe = $tokenStmt->execute();
        if ($exe) {
            if ($tokenStmt->affected_rows >= 0) {
                $res = ($tokenStmt->affected_rows > 0) ? $tokenStmt->affected_rows : "no";
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function creditUserAccount($user_id, $creditAmount)
    {
        $connect = static::getDB();
        $columnToSet = "bal";
        $tableName = self::tableName;
        $value = $creditAmount;
        $tokenQuery = "UPDATE $tableName  SET $columnToSet = $columnToSet + ? WHERE user_id = ?";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $value, $user_id);
        $exe = $tokenStmt->execute();
        if ($exe) {
            if ($tokenStmt->affected_rows >= 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function debitUserAccount($user_id, $debitAmount)
    {
        $connect = static::getDB();
        $columnToSet = "bal";
        $tableName = self::tableName;
        $value = $debitAmount;
        $tokenQuery = "UPDATE $tableName  SET $columnToSet = $columnToSet - ? WHERE user_id = ?";
        $tokenStmt = $connect->prepare($tokenQuery);
        $tokenStmt->bind_param("ss", $value, $user_id);
        $exe = $tokenStmt->execute();
        if ($exe) {
            if ($tokenStmt->affected_rows >= 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static function giveReferralCashback($user_id, $reffferedUserId){
        $data = [
            "user_id" => $user_id,
            "referred_id" => $reffferedUserId,
            "transaction_id" => ""
        ];

    }
}
