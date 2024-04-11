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
    $fullName = " ";
    if (isset($_POST['fullName'])) {
        $fullName = $utility_class_call::escape($_POST['fullName']);
    }
    $age = " ";
    if (isset($_POST['age'])) {
        $age = $utility_class_call::escape($_POST[' ']->age);
    }

    $dob = " ";
    if (isset($_POST['dob'])) {
        $dob = $utility_class_call::escape($_POST['dob']);
    }

    $image = " ";
    if (isset($_FILES['image'])) {
        $image = $utility_class_call::escape($_FILES['image']);
    }

    $parentName = " ";
    if (isset($_POST['parentName'])) {
        $parentName = $utility_class_call::escape($_POST['parentName']);
    }

    $parentContact = " ";
    if (isset($_POST['parentContact'])) {
        $parentContact = $utility_class_call::escape($_POST['parentContact']);
    }

    $parentEmail = " ";
    if (isset($_POST['parentEmail'])) {
        $parentEmail = $utility_class_call::escape($_POST['parentEmail']);
    }

    // checking all paramater are passed

    if ($utility_class_call::validate_input($fullName) || $utility_class_call::validate_input($age) || $utility_class_call::validate_input($dob) || $utility_class_call::validate_input($parentName) || $utility_class_call::validate_input($parentContact) || $utility_class_call::validate_input($parentEmail)) {
        $text = $api_response_class_call::$invalidDataSent;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to the right user with right access add forum."];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }


    if (!$utility_class_call::validateEmail($parentEmail)) {
        $text = $api_response_class_call::$invalidDataSent;
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
        $path = $orderTableClassCall::$imagePath;
        $pdfUploaded = $utility_class_call::uploadImage($image, $path);
    }

    //inserting into Database 
    $data = [
        "fullName" => $fullName,
        "age" => $age,
        "dob" => $dob,
        "parentName" => $parentName,
        "parentContact" => $parentContact,
        "parentEmail" => $parentEmail,
        "image" => $imageUploaded
    ];

    $addPuPils = $pupilsDBCall::addPuPils($data);

    if (!$addUser) {
        $text = $api_response_class_call::$errorAdded;
        $errorcode = $api_error_code_class_call::$internalUserWarning;
        $maindata = [];
        $hint = ["Ensure to send valid data to the API fields.", "pass in current and new password", "all fields should not be empty"];
        $linktosolve = "https://";
        $api_status_code_class_call->respondBadRequest($maindata, $text, $hint, $linktosolve, $errorcode);
    }
    $maindata = [];
    $text = $api_response_class_call::$pupilsAddedd;
    $api_status_code_class_call->respondOK($maindata, $text);
} else {
    $text = $api_response_class_call::$methodUsedNotAllowed;
    $errorcode = $api_error_code_class_call::$internalUserWarning;
    $maindata = [];
    $hint = ["Ensure to use the method stated in the documentation."];
    $linktosolve = "https://";
    $api_status_code_class_call->respondMethodNotAlowed($maindata, $text, $hint, $linktosolve, $errorcode);
}
