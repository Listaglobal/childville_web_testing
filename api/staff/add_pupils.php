<?php

require_once '../../config/bootstrap_file.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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

    // data sent in the request
    $lname = " ";
    if (isset($_POST['lname'])) {
        $lname = $utility_class_call::escape($_POST['lname']);
    }

    $fname = " ";
    if (isset($_POST['fname'])) {
        $fname = $utility_class_call::escape($_POST['fname']);
    }

    $age = " ";
    if (isset($_POST['age'])) {
        $age = $utility_class_call::escape($_POST[' ']->age);
    }

    $dob = " ";
    if (isset($_POST[' ']->dob)) {
        $dob = $utility_class_call::escape($_POST[' ']->dob);
    }

    $image = " ";
    if (isset($_POST[' ']->image)) {
        $image = $utility_class_call::escape($_POST[' ']->image);
    }

    $parentName = " ";
    if (isset($_POST[' ']->parentName)) {
        $parentName = $utility_class_call::escape($_POST[' ']->parentName);
    }

    $parentContact = " ";
    if (isset($_POST[' ']->parentContact)) {
        $parentContact = $utility_class_call::escape($_POST[' ']->parentContact);
    }

    // checking all paramater are passed

    if ($utility_class_call::validate_input($first_name) || $utility_class_call::validate_input($fname)) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    if (!$utility_class_call::validateEmail($email)) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    // check if email exist 
    $emailExist = $utility_class_call::checkIfExist("users", "email",  $email);
    if ($emailExist) {
        $text = $api_response_class_call::$emailExits;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    //inserting into Database 
    $data = [
        "first_name" => $first_name,
        "fname" => $fname,
        "email" => $email,
    ];

    $addUser = $usersTableClassCall::addUsers($data);

    if (!$addUser) {
        $text = $api_response_class_call::$errorAdded;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }
    $maindata = [];
    $text = $api_response_class_call::$UserAdded;
    $api_status_code_class_call->respondOK($maindata, $text);
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
