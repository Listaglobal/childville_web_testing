<?php

use Firebase\JWT\JWT;

require_once '../../../config/bootstrap_file.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // add try and catch
    // Get the request body
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $decodedToken = $api_status_code_class_call->ValidateAPITokenSentIN();
    $admin_pubkey = $decodedToken->usertoken;

    $adminManager = $api_admin_table_class_call::checkIfIsAdmin($admin_pubkey);

    if (!$adminManager) {
        $text = $api_response_class_call::$unauthorized_token;
        $errorcode = $api_error_code_class_call::$internalHackerFatal;
        $maindata = [];
        $hint = ["Only registered user can access this route"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    }
    // Alldata sent in
    $trackid = $status = "";
    if (isset($data->trackid)) {
        $trackid = $utility_class_call::escape($data->trackid);
    }
    //pass token
    if (isset($data->status)) {
        $status = $utility_class_call::escape($data->status);
    }

    // Validate input
    if ($utility_class_call::validate_input($trackid)) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    // 1=active, 0=ban
    if ($status != 2 && $status != 3) {
        $text = $api_response_class_call::$invalidStatus;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in valid status", "status 0, 1"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    // check if id sent is a valid admin
    if (!$utility_class_call::checkIfExist("request", "trackid", $trackid)) {
        $text = $api_response_class_call::$invalidTrackid;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to pass data to all fields."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    $updateStatus = $utility_class_call::changeStatus("request", $status, "trackid", $trackid);

    if (!$updateStatus) {
        $text = $api_response_class_call::$dbUpdatingError;
        $errorcode = $api_error_code_class_call::$internalUpdateDBFatal;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "Error updating manager status in database"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    // Sendsuccess response
    $maindata = [];
    $text = $api_response_class_call::$statusChangedMessage;
    $api_status_code_class_call->respondOK($maindata, $text);
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalHackerWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
