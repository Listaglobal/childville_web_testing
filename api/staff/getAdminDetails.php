<?php

require_once '../../config/bootstrap_file.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Check for authorization
    $decodedToken = $api_status_code_class_call->ValidateAPITokenSentIN();
    $user_pubkey = $decodedToken->usertoken;

    $userid = $usersTableClassCall::checkIfUser($user_pubkey);
    // Unauthorized user
    if (!$userid) {
        $text = $api_response_class_call::$unauthorized_token;
        $errorcode = $api_error_code_class_call::$internalHackerFatal;
        $maindata = [];
        $hint = ["Only registered user can access this route"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondUnauthorized($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    $adminDetails = $usersTableClassCall::getIdentity($userid);


    if ($adminDetails) {
        $adminDetails['id'] = $adminDetails['user_id'];
        unset($adminDetails['password']);
        unset($adminDetails['userpubkey']);
        unset($adminDetails['trackid']);
        unset($adminDetails['updated_at']);
        $maindata = $adminDetails;
        $text = $api_response_class_call::$getRequestFetched;
        $api_status_code_class_call->respondOK($maindata, $text);
    } else {
        $maindata = (object) [];
        $text = $api_response_class_call::$getRequestNoRecords;
        $api_status_code_class_call->respondOK($maindata, $text);
    }
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
