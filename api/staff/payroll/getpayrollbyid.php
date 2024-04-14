<?php
require_once '../../../config/bootstrap_file.php';
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


    //pass sort params
    $params = [];
    // $status = 1;
    // $params[] = $status;
    $params[] = $userid;
    $paramString = "s";
    $sortQuery = ' AND ' . $payrollDBCall::tableName . '.user_id = ?';
    $searchQuery = "";
    $single_post = false;


    // sort by status
    if (isset($_GET['trackid'])) {
        $single_post = true;
        $status = $utility_class_call::escape($_GET['trackid']);
        $sortQuery .= ' AND ' . $payrollDBCall::tableName . '.trackid = ?';
        $paramString .= "s";
        $params[] = $status;
    } else {
        $single_post = false;
    }

    // Other sort parameters can be passed here
    if (isset($_GET['search'])) {
        $tableName = $payrollDBCall::tableName;
        $search = $utility_class_call::escape($_GET['search']);
        if (!empty($search) && $search != '' && $search != " ") {
            $searchValue = "%" . $search . "%";
            $searchQuery = " AND ( $tableName.topic LIKE ? OR $tableName.venue LIKE ?)";
            for ($i = 0; $i < 2; $i++) {
                $params[] = $searchValue;
                $paramString .= "s";
            }
        }
    }


    if (!isset($_GET['page'])) {
        $page_no = 1;
    } else {
        $page_no = $_GET['page'];
    }

    if (!isset($_GET['noPerPage'])) {
        $noPerPage = 100;
    } else {
        $noPerPage = $_GET['noPerPage'];
    }

    $offset = ($page_no - 1) * $noPerPage;

    $AllReview = $payrollDBCall::getAllPayroll($page_no, $offset, $noPerPage, $searchQuery, $sortQuery, $paramString, $params);

    if ($AllReview) {
        $maindata = $AllReview;
        $text = $api_response_class_call::$getRequestFetched;
        $api_status_code_class_call->respondOK($maindata, $text);
    } else {

        $maindata = null;
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
