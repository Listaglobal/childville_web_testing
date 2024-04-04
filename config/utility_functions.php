<?php

namespace Config;

use Config;
use DateTime;


/**
 * View 
 *
 * PHP version 5.4
 */
class Utility_Functions  extends DB_Connect

{
    public static $baseurl = Constants::LIVE_OR_LOCAL == "1" ? Constants::LIVE_BASE_URL : Constants::BASE_URL;
    public static $allowedImages = array('jpg','jpeg','svg','png','gif');
    public static $allowedFileType = array('image/png', 'image/x-png', 'image/jpeg', 'image/pjpeg');
    public static $max_file_size = 2097152;
    public static $systemInitials = "GNG";
    public static $notificationBot = "6727269353:AAFRseCdJNEAquh6Q_5b7kXm6rorq7K9MN4";
    public static $crashBot = "6696254602:AAHWEH8pCKdG0c-JMGYwExRqwquLNg9tLEs";
    public static $notificationChatId = "-1002046207147";
    public static function escape($data)
    {
        $conn = static::getDB();
        $input = $data;
        // This removes all the HTML tags from a string. This will sanitize the input string, and block any HTML tag from entering into the database.
        // filter_var($geeks, FILTER_SANITIZE_STRING);
        // $input = filter_var($input, FILTER_SANITIZE_STRING);
        $input = trim($input, " \t\n\r");
        // htmlspecialchars() convert the special characters to HTML entities while htmlentities() converts all characters.
        // Convert the predefined characters "<" (less than) and ">" (greater than) to HTML entities:
        $input = htmlspecialchars($input, ENT_QUOTES,'UTF-8');
        // prevent javascript codes, Convert some characters to HTML entities:
        $input = htmlentities($input, ENT_QUOTES, 'UTF-8');
        $input = stripslashes(strip_tags($input));
        $input = mysqli_real_escape_string($conn, $input);

        return $input;
    }

    public static function shutdownHandler() {
      
        $errfile = "unknown file";
        $errstr  = "shutdown";
        $errno   = E_CORE_ERROR;
        $errline = 0;
    
        $error = error_get_last();
        if($error !== NULL) {
        $chatId="-4144614380";
        
            $errno   = $error["type"];
            $errfile =str_replace("public_html","",$error["file"]);
            $errline = $error["line"];
            $errstr  = $error["message"];
        
        $botidtouse= self::$crashBot;
        $keyboard= [];
        $response="*Crash Notification*\n\nError File: $errfile\n\nError No:$errno\n\nError Line:$errline\n\nError String:$errstr";
        $telegramSent = Utility_Functions::replyuser($chatId, "0", $response,true, $keyboard, $botidtouse, "markdown");
        }
    }

    public static function getCurrentFullURL(){
        $protocol = strtolower(substr($_SERVER["SERVER_PROTOCOL"],0,strpos( $_SERVER["SERVER_PROTOCOL"],'/'))).'://';
        // Get the server name and port
        $servername = $_SERVER['SERVER_NAME'];
        $port = $_SERVER['SERVER_PORT'];
        // Get the path to the current script
        $path = $_SERVER['PHP_SELF'];
        // Combine the above to form the full URL
        $endpoint = $protocol . $servername . ":" . $port . $path;
        return $endpoint;
    }

    public static function getIPAddress() {  
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        } else if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else if (isset($_SERVER['HTTP_X_FORWARDED'])) {
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        } else if (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        } else if (isset($_SERVER['HTTP_FORWARDED'])) {
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        } else if (isset($_SERVER['REMOTE_ADDR'])) {
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        } else {
            $ipaddress = 'UNKNOWN';
        }

        return $ipaddress;
    }
    public static function getLoc($userIp){
        // $url = "http://ipinfo.io/".$userIp."/geo";
        // $json     = file_get_contents($url);
        // $json     = json_decode($json, true);
        // // $country  = ($json['country']) ?  $json['country'] : "";
        // // $region   = ($json['region']) ? $json['region'] : "";
        // // $city     = ($json['city']) ? $json['city'] : "";
        
        // if (array_key_exists('loc', $json) ){
        //     $location = ($json['loc']) ? $json['loc'] : "";

        // }else{
        //     $location = "";
        // }
        
        $location = "";

        return $location;
    }
    public static function gettheTimeAndDate($time){
        $data = $time;
        $date =  date("d-M-Y h:ia", $data);
        return $date;
    }
    
    public static function generateUniqueNumericKey($tableName, $field, $strength){
        $connect = static::getDB();
        $loop = 0;
        while ($loop == 0){
            $key = static::generateNumericKey($strength);
            if ( static::checkIfCodeisInDB($tableName, $field ,$key) ){
                $loop = 0;
            }else {
                $loop = 1;
                break;
            }
        }

        return $key;
    }
    public static function generateNumericKey($strength){
        $input = "01234567890987654321";
        $output = static::generate_string($input, $strength);

        return $output;
    }
    public static function generate_string($input, $strength){
        $input_length = strlen($input);
        $random_string = '';
        for ($i = 0; $i < $strength; $i++) {
            $random_character = $input[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }
    
        return $random_string;
    }
    public static function checkIfCodeisInDB($tableName, $field ,$pubkey) {
        $connect = static::getDB();
        $alldata = [];
        // Check if the email or phone number is already in the database
        $query = "SELECT $field FROM $tableName WHERE $field = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $pubkey);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            return true;
        }

        return $alldata;
        
    }

    public static function checkIfCodeisInDBWhereMultiple($tableName, $whereField , $value = []) {
        $connect = static::getDB();
        $alldata = [];
        $id = 0;

        $params = '';
        foreach ($value as $data) {
            $params .= "s";
        }

        // Check if the email or phone number is already in the database
        $query = "SELECT id FROM $tableName WHERE id > ? $whereField";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$params", $id, ...$value );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            return true;
        }

        return $alldata;
        
    }

    public static function date_duration($date){
        date_default_timezone_set("Africa/Lagos");
        $date1 = new DateTime($date);
        $date2 = new DateTime();
        $interval = $date1->diff($date2);
        if($interval->y > 0 and $interval->y < 2){
            return $interval->y.'y';
        }else if($interval->y > 1){
            return $interval->y.'y';
        }else if($interval->m > 0 and $interval->m < 2){
            return '4w';
        }else if($interval->m > 1){
            return $interval->m.' month ago';
        }else if($interval->d > 1){
            return $interval->d.' day(s) ago';
        }else{
            if($interval->h > 0 and $interval->h < 2){
                return $interval->h.' hours ago';
            }else if($interval->h > 1){
                return $interval->h.' hours ago';
            }else{
                if($interval->i > 0 and $interval->i < 2){
                    return $interval->i.' minutes ago';
                }else if($interval->i > 1){
                    return $interval->i.' minutes ago';
                }else{
                    return 'now';
                }
            }
        }
    }

    public static function validateDate($date, $format = 'Y-m-d'){
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }

    public static function validateDateTime($date, $format = 'Y-m-d H:i:s'){
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }


    public static function countRowWhere($table, $where, $data){
        $connect = static::getDB();
        // check field
        $query = "SELECT id FROM $table WHERE id > 0 $where";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $data);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return $num_row;
        }

        return "0";
    }

    public static function Password_encrypt($user_pass){
        $BlowFish_Format="$2y$10$";
        $salt_len=24;
        $salt= static::Get_Salt($salt_len);
        $the_format=$BlowFish_Format . $salt;
        
        $hash_pass=crypt($user_pass, $the_format);
        return $hash_pass;
    }

    public static  function Get_Salt($size){
        $Random_string= md5(uniqid(mt_rand(), true));
        
        $Base64_String= base64_encode($Random_string);
        
        $change_string=str_replace('+', '.', $Base64_String);
        
        $salt=substr($change_string, 0, $size);
        
        return $salt;
    }

    public static function validate_input($data)
    {
        $incorrectdata=false;
        if(strlen($data)==0){
            $incorrectdata=true;
        }else if($data==null){
            $incorrectdata=true;
        }else if(empty($data)){
            $incorrectdata=true;
        }

        return $incorrectdata;
    }

    public static function validateEmail($email) {
        if ( filter_var($email, FILTER_VALIDATE_EMAIL) ){
            return true;
        }else{
            return false;
        }
    }
    public static function validatePassword($password){
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number    = preg_match('@[0-9]@', $password);
        $specialChars = preg_match('@[^\w]@', $password);
        
        // if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 6) {

        if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 6) {
            return false;
        }
        return true;
    }

    public static function validatePhone($phone) {
        $regExp = '/^[0-9]{11}+$/';
        if (preg_match($regExp, $phone)){
            return true;
        }else{
            return false;
        }
    }


    public static function check_pass($pass, $storedPass){
        $Hash=crypt($pass, $storedPass);
        if ($Hash===$storedPass) {
            return(true);
        } else {
            return(false);
        }
    }
    public static  function greetUsers(){
        $welcome_string="Welcome!";
        $numeric_date=date("G");

        //Start conditionals based on military time
        if($numeric_date>=0&&$numeric_date<=11)
        $welcome_string="🌅 Good Morning";
        else if($numeric_date>=12&&$numeric_date<=17)
        $welcome_string="☀️ Good Afternoon";
        else if($numeric_date>=18&&$numeric_date<=23)
        $welcome_string="😴 Good Evening";

        return $welcome_string;
    }
    public static function exceptionHandler($exception)
    {
        // Code is 404 (not found) or 500 (general error)
        $code = $exception->getCode();
        if ($code != 404) {
            $code = 500; 
        }
        http_response_code($code);

        $error = error_get_last();
        $errno   ="";
        $errfile = "";
        $errline = "";
        $errstr  = "";
        if ($error !== null) {
            $errno   = $error["type"];
            $errfile = $error["file"];
            $errline = $error["line"];
            $errstr  = $error["message"];
        }
 
        if (Constants::SHOW_ERRORS) {
            echo "<h1>Fatal error</h1>";
            echo "<p>Uncaught exception: '" . get_class($exception) . "'</p>";
            echo "<p>Message: '" . $exception->getMessage() . "'</p>";
            echo "<p>Stack trace:<pre>" . $exception->getTraceAsString() . "</pre></p>";
            echo "<p>Thrown in '" . $exception->getFile() . "' on line " . $exception->getLine() . "</p>";
        } else {
            $log = dirname(__DIR__) . '/logs/' . date('Y-m-d') . '.txt';
            ini_set('error_log', $log);

            $message = "Uncaught exception: '" . get_class($exception) . "'";
            $message .= " with message '" . $exception->getMessage() . "'";
            $message .= "\nStack trace: " . $exception->getTraceAsString();
            $message .= "\nThrown in '" . $exception->getFile() . "' on line " . $exception->getLine();
            $message .=  "\nOTHER ERRORS'" .$errno." ".$errfile." ".$errline." ". $errstr;

            error_log($message);
        }
    }
    public static function errorHandler($level, $message, $file, $line)
    {
        if (error_reporting() !== 0) {  // to keep the @ operator working
            throw new \ErrorException($message, 0, $level, $file, $line);
        }
    }

    public static function checkIfExist($table, $field, $data){
        // check field
        $connect = static::getDB();
        $query = "SELECT * FROM $table WHERE $field = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $data );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return true;
        }

        return false;
    }

    public static function changeStatus($table, $status, $field, $data){
        // check field
        $connect = static::getDB();
        $query = "UPDATE $table SET `status` = ? WHERE $field = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $status, $data );
        $executed = $stmt->execute();

        if ( $executed ){
            if( $stmt->affected_rows >= 0 ){
                $res = ($stmt->affected_rows > 0) ? $stmt->affected_rows : "no";
                return $res;
            }else{
                return false;
            }
        }
        return false;
    }

    public static function updateTableColumn($table, $updateField , $updateColumn, $wherefield, $data){
        // check field
        $connect = static::getDB();
        $query = "UPDATE $table SET $updateField = ? WHERE $wherefield = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $updateColumn, $data );
        $executed = $stmt->execute();

        if ( $executed ){
            if( $stmt->affected_rows >= 0 ){
                $res = ($stmt->affected_rows > 0) ? $stmt->affected_rows : "no";
                return $res;
            }else{
                return false;
            }
        }
        return false;
    }

    public static function getMultipleColumnFromField($tablename, $columns ,$fieldname, $fieldvalue){
        $connect = static::getDB();

        $query = "SELECT $columns FROM $tablename WHERE $fieldname = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $fieldvalue );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            $row = $result->fetch_assoc();
            $allValue = json_decode(json_encode($row), true);
            return $allValue;

        }else{
            return false;
        }


    }

    public static function generatePubKey($strength){
        $input = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        $output = static::generate_string($input, $strength);

        return $output;
    }
    

    public static function generateShortKey($strength){
        $input = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $output = static::generate_string($input, $strength);

        return $output;
    }

    public static function generateUniqueShortKey($tableName, $field, $shortKey = Constants::APP_SHORT_KEY){
        $loop = 0;
        while ($loop == 0){
            $userKey = $shortKey.static::generateShortKey(5);
            if ( static::checkIfCodeisInDB($tableName, $field ,$userKey) ){
                $loop = 0;
            }else {
                $loop = 1;
                break;
            }
        }

        return $userKey;
    }

    public static function generateCodeWithTag($tag, $tableName, $field, $strength)
    {
        // checkIfCodeisInDB($tableName, $field, $userKey)
        $connect = static::getDB();
        // global $connect;
        $loop = 0;
        while ($loop == 0) {
            $key = self::generateShortKey($strength);
            $code = $tag . "-" . $key;
            if (self::checkIfCodeisInDB( $tableName, $field, $code)) {
                $loop = 0;
            } else {
                $loop = 1;
                break;
            }
        }

        return $code;
    }

    public static function generateUniquePubKey($tableName, $field){
        $loop = 0;
        while ($loop == 0){
            $userKey = "GNG".static::generatePubKey(37). $tableName;
            if ( static::checkIfCodeisInDB($tableName,$field,$userKey) ){
                $loop = 0;
            }else {
                $loop = 1;
                break;
            }
        }

        return $userKey;
    }

    public static function checkIsEmailorPhone($userIdentity){
        //verifytype 1 = email, 2=phone
        $phone =  (static::validatePhone($userIdentity)) ? 2 : null;
        $email = (filter_var($userIdentity, FILTER_VALIDATE_EMAIL)) ? 1 : null;
 
        if ($phone){
         return $phone;
        }
 
        if ($email){
         return $email;
        }

        if(!$phone && !$email){
            return null;
        }
 
    }

    public static function checkIfExistWhereMultiple($table, $whereClause, $data = []){
        $connect = static::getDB();
        $string= "";
        foreach( $data as $item ){
            $string .= "s";
        }
        $query = "SELECT id FROM $table WHERE id > 0 AND $whereClause";
        $stmt = $connect->prepare($query);
        if ( count($data) >= 1 ){
            $stmt->bind_param($string, ...$data );
        }
        
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;
    
        if ($num_row > 0){
           return $num_row;
        }
    
        return false;
    
    }

    public static function uploadImage($file, $path){
        $img_name = $file['name'];
        $img_size = $file['size'];
        $tmp_name = $file['tmp_name'];
        $error = $file['error'];

        $status_code = new API_Status_Code;       


        if ($error === 0){
            if ($img_size > 2097152) {

                $text = API_User_Response::$imageTooLarge;
                $errorcode = API_Error_Code::$internalUserWarning;
                $maindata = [];
                $hint = ["Ensure to send valid data to the API fields."];
                $linktosolve = "https://";
                $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);

            }else{
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);


                $allowed_exs = array('jpg','jpeg','svg','png','gif','webp','jiff');
                

               
                if (in_array($img_ex_lc, $allowed_exs)) {
                    $folderPath = realpath(dirname(__DIR__));
                    // $path = $folderPath."/assets/images/$path/";
                    $path = $folderPath . "../assets/images/$path/";
                    // $path = "../../assets/images/$path/";
                    if ( !is_dir($path) ){
                        mkdir("$path", 0777, true);
                    }
                    $new_img_name = uniqid( self::$systemInitials. "-", true). "." . $img_ex_lc;
                    $img_upload_path =  $path. $new_img_name;
                    move_uploaded_file($tmp_name, $img_upload_path);

                   
                    return $new_img_name;
                }else{

                    $text = API_User_Response::$imageTypeNotAllowed;
                    $errorcode = API_Error_Code::$internalUserWarning;
                    $maindata = [];
                    $hint = ["Ensure to send valid data to the API fields."];
                    $linktosolve = "https://";
                    $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);

                }
            }
        }else{

            $text = API_User_Response::$unknownErrorImgeUpload;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);

        }
    }

    

    public static function uploadDocumentFile($file, $path, $checkExt = true){
        $file_name = $file['name'];
        $file_size = $file['size'];
        $tmp_name = $file['tmp_name'];
        $error = $file['error'];

        $status_code = new API_Status_Code;       


        if ($error === 0){
            if ($file_size > 10097152) {

                $text = API_User_Response::$fileTooLarge;
                $errorcode = API_Error_Code::$internalUserWarning;
                $maindata = [];
                $hint = ["Ensure to send valid data to the API fields."];
                $linktosolve = "https://";
                $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);

            }else{
                $file_ex = pathinfo($file_name, PATHINFO_EXTENSION);
                $file_ex_lc = strtolower($file_ex);
                

                $allowed_exs = array('pdf','doc','docx','ppt','pptx','txt');
                
                if ( $checkExt  ){
                    if (in_array($file_ex_lc, $allowed_exs)) {
                        $folderPath = realpath(dirname(__DIR__));
                        $path = $folderPath."/assets/files/$path/";
                        // $path = "../../assets/images/$path/";
                        if ( !is_dir($path) ){
                            mkdir("$path", 0777, true);
                        }
                        $new_file_name = uniqid( self::$systemInitials. "-", true). "." . $file_ex_lc;
                        $file_upload_path =  $path. $new_file_name;
                        move_uploaded_file($tmp_name, $file_upload_path);
    
                       
                        return [ 'name' => $new_file_name, 'type' => $file_ex_lc ];
                    }else{
    
                        $text = API_User_Response::$fileTypeNotAllowed;
                        $errorcode = API_Error_Code::$internalUserWarning;
                        $maindata = [];
                        $hint = ["Ensure to send valid data to the API fields."];
                        $linktosolve = "https://";
                        $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);
    
                    }
                }else{
                    $folderPath = realpath(dirname(__DIR__));
                    $path = $folderPath."/assets/files/$path/";
                    // $path = "../../assets/images/$path/";
                    if ( !is_dir($path) ){
                        mkdir("$path", 0777, true);
                    }
                    $new_file_name = uniqid( self::$systemInitials. "-", true). "." . $file_ex_lc;
                    $file_upload_path =  $path. $new_file_name;
                    move_uploaded_file($tmp_name, $file_upload_path);

                    
                    return [ 'name' => $new_file_name, 'type' => $file_ex_lc ];
                }
            }
        }else{

            $text = API_User_Response::$unknownErrorFileUpload;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);

        }
    }

    public static function deleteTableImage($image, $path){
        if ( filter_var($image, FILTER_VALIDATE_URL) ){
            $img_type = "2";
        }else{
            $img_type = "1";
        }
        if ( $img_type == 1 ){
            $folderPath = realpath(dirname(__DIR__));
            $filepath = $folderPath."/assets/images/$path/$image";

            if ( file_exists($filepath) ){
                $status = unlink($filepath);
                if ( $status ){
                    return true;
                }
                return false;
            }
            return true;
        }
    }



    public static function countRowWhereParams($table, $where, $data=[]){
        $connect = static::getDB();
        $strings = '';
        foreach ($data as $value) {
            $strings .= "s";
        }
        // check field
        $min_value = 0;
        $query = "SELECT id FROM $table WHERE id > ? $where";
        $stmt = $connect->prepare($query);
        if ( count($data) > 0 ){
            $stmt->bind_param("s$strings", $min_value, ...$data);
        }else{
            $stmt->bind_param("s", $min_value);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return $num_row;
        }

        return "0";
    }

    public static function countNumberRowWhereParams($table, $where, $data=[]){
        $connect = static::getDB();
        $strings = '';
        foreach ($data as $value) {
            $strings .= "s";
        }
        // check field
        $min_value =0;
        $query = "SELECT id FROM $table WHERE id > ? AND $where";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$strings", $min_value, ...$data);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return $num_row;
        }

        return 0;
    }

    public static function countRow($table, $field){
        $connect = static::getDB();
        // check field
        $query = "SELECT $field FROM $table";
        $countRow = $connect->prepare($query);
        $countRow->execute();
        $result = $countRow->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
           return $num_row;
        }

        return false;
    }

    public static function getColumnFromField($tablename, $column ,$fieldname, $fieldvalue){
        $connect = static::getDB();

        $query = "SELECT $column FROM $tablename WHERE $fieldname = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $fieldvalue );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            $row = $result->fetch_assoc();

            $value = $row["$column"];

            return "$value";

        }else{
            return false;
        }


    }

    public static function generatePassword($strength){
        $input = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&";
        $output = static::generate_string($input, $strength);

        return $output;
    }

    public static function generateNumericPassword($strength, $initials = ""){
        $input = "0123456789";
        $output = static::generate_string($input, $strength);

        $response = $initials.$output;

        return $response;
    }

    public static function getBase64ImageSize($base64Image){ //return memory size in B, KB, MB
        try{
            $size_in_bytes = (int) (strlen(rtrim($base64Image, '=')) * 3 / 4);
            $size_in_kb    = $size_in_bytes / 1024;
            $size_in_mb    = $size_in_kb / 1024;
            
    
            return $size_in_kb;
        }
        catch(\Exception $e){
            return $e;
        }
    }

    public static function validateImage ($base64Image){
        $status_code = new API_Status_Code;
        $hrarray = getimagesize($base64Image);
        
        if(self::getBase64ImageSize($base64Image) > self::$max_file_size ){
            $text = API_User_Response::$imageTooLarge;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);
        }elseif ( !isset($hrarray['mime']) || !in_array( $hrarray['mime'], self::$allowedFileType) || explode("/",$hrarray['mime'])[0]!="image"){
            $text = API_User_Response::$imageTypeNotAllowed;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);
        }elseif( self::validate_input($base64Image) ){
            $text = API_User_Response::$invalidImageSent;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);
        }
    }

    public static function uploadBase64Image ($base64Image,  $path){
        $status_code = new API_Status_Code;
        $mainImage = explode(',', $base64Image);
        $realImage = base64_decode( $mainImage[1] );
        $imagePath = "/assets/images/$path/";

        $imageType = self::getBase64ImageType($base64Image);

        $imagename = uniqid( self::$systemInitials. "-", true). "." . $imageType;

        $folderPath = realpath(dirname(__DIR__));
        $path = $folderPath. $imagePath;
        if ( !is_dir($path) ){
            mkdir("$path", 0777, true);
        }

        // wrap file put contents in try catch
        try{
            file_put_contents($path.$imagename, $realImage);
            $image_link = self::$baseurl . $imagePath . $imagename;
            return $image_link;

        }catch(\Exception $e){
            $text = API_User_Response::$imageUploadFailed;
            $errorcode = API_Error_Code::$internalUserWarning;
            $maindata = [];
            $hint = ["Ensure to send valid data to the API fields."];
            $linktosolve = "https://";
            $status_code->respondBadRequest($maindata,$text,$hint,$linktosolve,$errorcode);
        }
        
    }

    public static function getBase64ImageType($base64Image){
        $hrarray = getimagesize($base64Image);
        $image_type = explode( "/", $hrarray['mime'] );
        return $image_type[1];
    }

    public static function getUserIp(){
        $ip = "";

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        return $ip;
    }

    
    public static function showpost($text) {
        $text = str_replace("\\r\\n", "", $text);
        $text = str_replace("\\n", "\n", $text);
        $text = trim(preg_replace('/\t+/', '', $text));
        
        $text = htmlspecialchars_decode($text, ENT_QUOTES);
        $text =html_entity_decode($text, ENT_QUOTES, 'UTF-8');
        $text = htmlspecialchars_decode($text, ENT_QUOTES);
        $text = nl2br($text);
        $text = str_replace("<br />", "", $text);
        $text = str_replace("<br \/>", "", $text);
        return $text;
    }

    public static function getColumsFromField($tableName, $columns, $whereClause, $whereValue=[] ){
        $connect = static::getDB();
        $string= "";
        foreach( $whereValue as $item ){
            $string .= "s";
        }
        $query = "SELECT $columns FROM $tableName WHERE $tableName.id > 0 AND $whereClause";
        $stmt = $connect->prepare($query);
        if($whereValue){
            $stmt->bind_param("$string", ...$whereValue );
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            $row = $result->fetch_assoc();
            return $row;
        }else{
            return false;
        }
    }

    public static function checkIfSubStringInString($string, $substring){
        if (strpos($string, $substring) !== false) {
            return true;
        }else{
            return false;
        }
    }

    public static function getNumberOfDaysLeft($expiry_time){
        $current = time();
        $target = $expiry_time;
        
        if($target > $current){
        
            $span = $target - $current;
            $span = ceil($span / (60 * 60 * 24));
        
            return $span;
        
        } else {
        
           return 0;
        
        }
        
    }

    public static function stripFirstZeroInPhoneNo($phone){
        if (  strpos($phone, "+") !== false ){
            $phone =str_replace("+","", $phone);
        }
            
        if ( strpos(substr( $phone, 0, 4 ), "234") !== false ){
            return $phone;
        }else{
            $strnew = ltrim($phone, '0');
            $output = "234". $strnew;
            return $output;
        }
    }

    public static function generateIncrementalCode( $tableName, $countField, $strength, $extraValue = 0 ,$initials = "" ,$data = [], $startsFrom = 0 ){
        $countCurrentData = self::countRowWhereParams($tableName, "$countField", $data);
        $value = "";
        $newCountValue = $countCurrentData + 1 + $extraValue;

        // strength = 3 or 4

        if ( $strength == 3 ){
            if ( $startsFrom == 0 ){
                if ( $countCurrentData >= 99  ){
                    $value = $newCountValue;
                }elseif ( $countCurrentData >= 9 ){
                    $value = "0". $newCountValue;
                }else{
                    $value = "00". $newCountValue;
                }  
            }else{
                $initValue = 100;
                if ( $countCurrentData >= 99  ){
                    $value = $newCountValue;
                }elseif ( $countCurrentData >= 9 ){
                    $value = "1". $newCountValue;
                }else{
                    $value = "10". $newCountValue;
                }
            }
            
        }elseif ( $strength == 4 ){
            if ( $countCurrentData >= 999  ){
                $value = $countCurrentData;
            }elseif ( $countCurrentData >= 99  ){
                $value = "0" . $newCountValue;
            }elseif ( $countCurrentData >= 9 ){
                $value = "00". $newCountValue;
            }else{
                $value = "000". $newCountValue;
            }
        }else{
            $value = self::generateNumericKey($strength);
        }

        

        return $initials . $value;
        
    }

    public static function generateUniqueNumericIncrementalCode($tableName, $field, $countField, $strength, $initials = "" ,$data = [], $startsFrom = 0){
        $connect = static::getDB();

        $extraCheck = "$countField AND $field = ?";
        $loop = 0;
        $extraValue = 0;
        while ($loop == 0){
            $key = static::generateIncrementalCode($tableName, $countField, $strength, $extraValue ,$initials, $data, $startsFrom);
            array_push($data, $key);
            if ( static::checkIfCodeisInDBWhereMultiple($tableName, $extraCheck , $data) ){
                $extraValue++;
                array_pop($data);
                $loop = 0;
            }else {
                $loop = 1;
                break;
            }
        }

        return $key;
    }

    public static function generateAlphaNumericKey($strength){
        $input = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $output = static::generate_string($input, $strength);

        return $output;
    }

    public static function generateUniqueAlphaNumericKey($tableName, $field, $strength){
        //add role to your generate function
        //if user (checkIfPubKeyisInDB), return $userkey
        //else if admin (checkIfIsAdmin), return $adminkey
        //else (checkIfPubKeyisInDB), so we wont edit all api
        $initials = Constants::APP_SHORT_KEY;
        $loop = 0;
        while ($loop == 0){
            $userKey = $initials .static::generateAlphaNumericKey($strength);
            if ( static::checkIfCodeisInDB($tableName,$field,$userKey) ){
                $loop = 0;
            }else {
                $loop = 1;
                break;
            }
        }

        return $userKey;
    }

    public static function getAllDataFromFields($table, $where, $fields="*" ,$data = []){
        $connect = static::getDB();
        $paramString= "";
        foreach( $data as $item ){
            $paramString .= "s";
        }

        $whereData = ( $where != "" )? " AND $where" : "";
        $minId = 0;
        // check field
        $query = "SELECT $fields FROM $table WHERE $table.id > ? $whereData";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$paramString", $minId, ...$data );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        $all_values = [];
        if ($num_row > 0){
            $stmt->close();
            while ($row = $result->fetch_assoc()){
                unset($row['updated_at']);
                array_push($all_values, json_decode(json_encode($row), true));
            }
            return $all_values;
        }

        return false;
    }

    

    public static function replyuser($chatid, $message_id, $message, $botkey, $buttonadded, $keyboard=[],$markdown="html"){
        $path = "https://api.telegram.org/bot$botkey";
        // &parse_mode=html to mke html tag work
        //     <b>bold</b>, <strong>bold</strong>
        // <i>italic</i>, <em>italic</em>
        // <a href="http://www.example.com/">inline URL</a>
        // <code>inline fixed-width code</code>
        // <pre>pre-formatted fixed-width code block</pre>
        if ($buttonadded) {
            file_get_contents($path."/sendmessage?chat_id=".$chatid."&reply_to_message_id=".$message_id."&text=$message&parse_mode=$markdown");
        } else {
            if(empty($keyboard)){
                   $url = $path."/sendmessage";
            $encodedKeyboard = json_encode($keyboard);
            $parameters =
           array(
               'chat_id' => $chatid,
               'text' => $message,
               'reply_to_message_id'=>$message_id,
               'parse_mode'=>"$markdown"
           );
       
            $curld = curl_init();
            curl_setopt($curld, CURLOPT_POST, true);
            curl_setopt($curld, CURLOPT_POSTFIELDS, http_build_query($parameters));
            curl_setopt($curld, CURLOPT_URL, $url);
            curl_setopt($curld, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($curld);
            // echo $output;
            curl_close($curld);
            }else{
            $url = $path."/sendmessage";
            $encodedKeyboard = json_encode(['inline_keyboard' => $keyboard]);
    
            // echo $encodedKeyboard;
            $parameters =
           array(
               'chat_id' => $chatid,
               'text' => $message,
               'reply_to_message_id'=>$message_id,
               'reply_markup' => $encodedKeyboard,
               'parse_mode'=>"$markdown"
           );
       
            $curld = curl_init();
            curl_setopt($curld, CURLOPT_POST, true);
            curl_setopt($curld, CURLOPT_POSTFIELDS, http_build_query($parameters));
            curl_setopt($curld, CURLOPT_URL, $url);
            curl_setopt($curld, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($curld);
            // echo $output;
            curl_close($curld);
            // return $output;
            }
            
        }
    }

    public static function sumRowWhere($table, $columnToSum ,$where, $data=[]){
        $connect = static::getDB();
        $strings = '';
        foreach ($data as $value) {
            $strings .= "s";
        }
        // check field
        $min_value =0;
        $query = "SELECT SUM($columnToSum) as $columnToSum FROM $table WHERE id > ? AND $where";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s$strings", $min_value, ...$data);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        if ($num_row > 0){
            $row = $result->fetch_assoc();
            $value = $row[$columnToSum];
            return ($value != null)? $value: 0;
        }

        return 0;
    }

    public static function breakStringWithEllipsis($inputString, $chunkSize = 500) {
        // Check if the string is longer than the specified chunk size
        if (strlen($inputString) > $chunkSize) {
            // Use substr to get the first chunk and add an ellipsis
            $firstChunk = substr($inputString, 0, $chunkSize) . '...';
            
            // Use str_split to break the remaining string into an array of chunks
            $remainingChunks = str_split(substr($inputString, $chunkSize), $chunkSize);
    
            // Combine the first chunk and remaining chunks into a single string
            $resultString = $firstChunk . implode('', $remainingChunks);
    
            return $resultString;
        } else {
            // If the string is shorter than the chunk size, return the original string
            return $inputString;
        }
    }

    public static  function updateColumInTable($value, $valueField ,$table, $wherefield, $whereData ){
        $connect = static::getDB();

        $query = "UPDATE $table SET $valueField = ? WHERE $wherefield = ?";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("ss", $value , $whereData);
        if ( $stmt->execute() ){

        }else{

        }
    }

    public static function getTableData($table, $where, $data){
        $connect = static::getDB();
        // check field
        $query = "SELECT * FROM $table WHERE $where";
        $stmt = $connect->prepare($query);
        $stmt->bind_param("s", $data );
        $stmt->execute();
        $result = $stmt->get_result();
        $num_row = $result->num_rows;

        $all_values = [];
        if ($num_row > 0){
            $stmt->close();
            while ($row = $result->fetch_assoc()){
                unset($row['id']);
                unset($row['oneapp_code']);
                unset($row['created_at']);
                unset($row['updated_at']);
                array_push($all_values, json_decode(json_encode($row), true));
            }
            return $all_values;
        }

        return false;
    }

}

?>