<?php
require_once '../../config/bootstrap_file.php';
//allow only post method
if (getenv('REQUEST_METHOD') === 'POST') {

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    //collect input and validate it
    $email = $password =  "";
    if (isset($data->email)) {
        $email = $utility_class_call::escape($data->email);
    }

    if (isset($data->password)) {
        $password = $utility_class_call::escape($data->password);
    }

    //check if input isempty
    if ($utility_class_call::validate_input($password) || $utility_class_call::validate_input($email)) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    $checkUser = $utility_class_call::getColumsFromField("admin", "*", "email = ? OR email = ?", [$email, $email]);

    if (!$checkUser) {
        $text = $api_response_class_call::$invalidUserDetail;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    $adminId = $checkUser['trackid'];
    $adminPubkey = $checkUser['userpubkey'];
    //fetch password fron usertable and compare
    if (!password_verify($password, $checkUser["password"])) {
        $text = $api_response_class_call::$invalidUserDetail;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure data sent is valid and user data is in database.", "Invalid password"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    $status = $checkUser['status'];
    $activity = "1";

    if ($status == 1) {
        //valid, can login
        $maindata = [];
        $token = $api_status_code_class_call->getTokenToSendAPI($adminPubkey);

        $maindata = [
            "token" => $token,
        ];
        $text = $api_response_class_call::$loginSuccessful;
        $api_status_code_class_call->respondOK($maindata, $text);
    } elseif ($status == 2) { //suspended
        $text = $api_response_class_call::$accountSuspended;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure your account is not banned.", "Ensure your account is active"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    } elseif ($status == 3) { //frozen
        $text = $api_response_class_call::$accountFrozen;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure your account is not banned.", "Ensure your account is active"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    } elseif ($status == 0) { //banned
        $text = $api_response_class_call::$accountBanned;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure your account is not banned.", "Ensure your account is active"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    } else {
        $text = $api_response_class_call::$loginFailedError;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure your account is not banned.", "Ensure your account is active"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    }
} else {
    // method not allowed
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
