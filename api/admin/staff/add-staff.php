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
    $fname = " ";
    if (isset($_POST['fname'])) {
        $fname = $utility_class_call::escape($_POST['fname']);
    }

    $lname = " ";
    if (isset($_POST['lname'])) {
        $lname = $utility_class_call::escape($_POST['lname']);
    }

    $dob = " ";
    if (isset($_POST['dob'])) {
        $dob = $utility_class_call::escape($_POST['dob']);
    }

    $sex = " ";
    if (isset($_POST['sex'])) {
        $sex = $utility_class_call::escape($_POST['sex']);
    }

    $class = " ";
    if (isset($_POST['class'])) {
        $class = $utility_class_call::escape($_POST['class']);
    }

    $image = " ";
    if (isset($_FILES['image'])) {
        $image = $_FILES['image'];
    }

    $staffNumber = " ";
    if (isset($_POST['staffNumber'])) {
        $staffNumber = $utility_class_call::escape($_POST['staffNumber']);
    }

    $email = " ";
    if (isset($_POST['email'])) {
        $email = $utility_class_call::escape($_POST['email']);
    }

    $password = " ";
    if (isset($_POST['password'])) {
        $password = $utility_class_call::escape($_POST['password']);
    }

    $confirmpassword = " ";
    if (isset($_POST['confirmpassword'])) {
        $confirmpassword = $utility_class_call::escape($_POST['confirmpassword']);
    }


    // checking all paramater are passed

    if ($utility_class_call::validate_input($fname) || $utility_class_call::validate_input($lname) ||
        $utility_class_call::validate_input($sex) ||  $utility_class_call::validate_input($dob)  || $utility_class_call::validate_input($staffNumber) || $utility_class_call::validate_input($email) || $utility_class_call::validate_input($password) || $utility_class_call::validate_input($confirmpassword) ) {
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

    // check if password and confirm password are the same 
    if ($password != $confirmpassword ){
        $text = $api_response_class_call::$passwordnotSame;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    $imageUploaded = "";
    if (!is_array($image)) {
        $text = $api_response_class_call::$imageNotSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }

    if ($image) {
        $path = $usersTableClassCall::$imagesPath;
        $imageUploaded = $utility_class_call::uploadImage($image, $path);
    }

    //inserting into Database 
    $data = [
        "fname" => $fname,
        "lname" => $lname,
        "dob" => $dob,
        "sex" => $sex,
        "class" => $class,
        "image" => $imageUploaded,
        "staffNumber" => $staffNumber,
        "email" => $email,
        "password" => $password
    ];

    $addStaff = $usersTableClassCall::addStaff($data);

    if (!$addStaff) {
        $text = $api_response_class_call::$errorAdded;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }
    $maindata = [];
    $text = $api_response_class_call::$staffCreated;
    $api_status_code_class_call->respondOK($maindata, $text);
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
