<?php

require_once '../../../config/bootstrap_file.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // check Authorization
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

    // data sent in the request
    $user_id = " ";
    if (isset($_POST['user_id'])) {
        $user_id = $utility_class_call::escape($_POST['user_id']);
    }

    $review_by = " ";
    if (isset($_POST['review_by'])) {
        $review_by = $utility_class_call::escape($_POST['review_by']);
    }

    $review = " ";
    if (isset($_POST['review'])) {
        $review = $utility_class_call::escape($_POST['review']);
    }

    $status = " ";
    if (isset($_POST['status'])) {
        $status = $utility_class_call::escape($_POST['status']);
    }

    // checking all paramater are passed

    if (
        $utility_class_call::validate_input($user_id) || $utility_class_call::validate_input($review_by) || $utility_class_call::validate_input($review) || $utility_class_call::validate_input($status)
    ) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    //inserting into Database 
    $data = [
        "user_id" => $user_id,
        "review_by" => $review_by,
        "review" => $review,
        "status" => $status
    ];

    $StaffReview = $reviewDBCall::addReview($data);

    if (!$StaffReview) {
        $text = $api_response_class_call::$errorAdded;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }
    $maindata = [];
    $text = $api_response_class_call::$reviewdone;
    $api_status_code_class_call->respondOK($maindata, $text);
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
