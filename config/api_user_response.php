<?php

namespace Config;

use Config\Constants;

/**
 * System Messages Class
 *
 * PHP version 5.4
 */
class API_User_Response
{

    /**
     * Welcome message
     *
     * @var string
     */
    // General errors
    public  static $methodUsedNotAllowed = "Method Used is not valid";
    public  static $invalidDataSent = "Please insert all required data";
    public  static $invalidURLSent = "Invalid URL";
    public  static $invalidEstateType = "Invalid estate type passed";
    public  static $invalidUserDetail = "Invalid username or password";
    public  static $emailAlreadyVerified = "Email already verified";
    public  static $phoneAlreadyVerified = "Phone already verified";
    public  static $unabletogetUserDetail = "Unable to get user details";
    public  static $invalidUseridentity = "User with account not found";
    public  static $invalidPin = "Invalid Pin";
    public static $invalidLink = "Invalid link Sent";
    public static $invalidTrackid = "Invalid Trackid";
    public  static $userBanned = "Your account has been banned";
    public  static $loginSuccessful = "LogIn SuccessFully";
    public  static $userExist = "User exists";
    public  static $userDoesNotExist = "User does not exist";
    public  static $userWithEmailDoesNotExist = "User with details does not exist";
    public  static $unauthorized_token = "Unauthorized user (401)";
    public  static $invalidJoinid = "Invalid  join estate id";
    public  static $invalidPassword = "Invalid password";
    public  static $incorrectPassword = "Incorrect password";
    public  static $invalidEmail = "Invalid email";
    public  static $EmailExist = "Email already exist";
    public  static $usernameExist = "Username already exist";
    public  static $invalidPhone = "Invalid phone number";
    public  static $phoneExist = "Phone number already exist";
    public  static $weakPassword = "Password too weak";
    public  static $passRequirementNotMet = "Password must be up to 6 characters";
    public static $RegisterFail = "Unable to register";
    public static $unauthorized_user = "Login expired, kindly login (401)";
    public static $unableToVerified = "Unable to verify mail";
    public static $suspendReason = "Your account has been suspended";
    public static $frozenAccount = "Your account has been frozen";
    public static $bannedAccount = "Your account has been banned";
    public static $userNotAllowed = "User not allowed";
    public static $deletedAccount = "(401) Your account has been deleted";
    public static $errorAdded = "Error Occured";

    // image too large
    public static $invalidImageSent = "Invalid image sent";
    public static $iconImageSent = "Invalid image sent";
    public static $imageTooLarge = "Image too large";
    public static $imageTypeNotAllowed = "Image type not allowed";
    public static $unknownErrorImgeUpload = "The uploaded file exceeds the maximum file size allowed by the server.";
    public static $imageUploadFailed = "Error uploading image";
    public static $insertAllFields = "Please Insert correct data";
    public static $imageNotSent = "Image not sent";

    //  login fail  
    public  static $loginFailedError = "one or both of the data provided is invalid";
    public  static $accountSuspended = "Your account has been suspended";
    public  static $accountFrozen = "Your account has been frozen";
    public  static $accountBanned = "Your account has been permanently banned";

    // forgot passwor
    public  static $forgotMailSent = "Recovery Mail sent successfully, kindly check your mail";
    public  static $errorOccured = "An Error occured, Please contact support";
    public  static $invalidCode = "Invalid code";
    public  static $errorGeneratingCode = "Error generating code";
    public static $passwordnotSame = "Password and Confirm Password not the same";


    //db error
    public  static $dbInsertError = "Error inserting to database";
    public  static $dbUpdatingError = "Error updating database record";
    public  static $nothingToUpdate = "Nothing to update";
    public  static $passStreet = "Pass in street name";
    public  static $passBuilding = "Pass in building name";
    public  static $passApartment = "Pass in apartment name";
    public  static $deletingError = "Error deleting database record";

    //email verification 
    public static $tokenExpired = "OTP Expired";
    public static $sucessEmail = "Email verified successfully";
    public  static $sendOTPError = "Unable to send OTP";

    //OTP
    public  static $OTPSentViaMail = "OTP sent to your mail";
    public  static $OTPSentViaSMS = "OTP sent to your phone";
    public  static $invalidOTP = "Incorrect token";
    public  static $OTPExpire = "OTP expired";
    public  static $OTPUsed = "Code has already been used";

    //password
    public  static $resetPasswordMessage = "Password reset SuccessFully";
    public  static $changePasswordMessage = "Password changed SuccessFully";
    public  static $validatePassword = "Password too weak";
    public static $generatedPasswordNotSame = "Enter The Correct Generated Password";


    // USER 
    public  static $userDataNotFound = "User data not found";
    public static $getRequestFetched = "Data SuccessFully Fetched";
    public static $getRequestNoRecords = "No Records Found";
    public  static $userDataFound = "Data found";
    public  static $dataNotFound = "No Data found";
    public  static $estateDataNotFound = "Estate data not found";
    public  static $userEstateDataNotFound = "User estate data not found";
    public  static $guestDataNotFound = "Code not found";
    public  static $inviteDataNotFound = "Invite data not found";
    public static $invalidUserid = "Invalid user id";
    public static $deleteUser = "User deleted successfuly";
    public static $emailVerified = "Email verified successfully";
    public static $phoneVerified = "Phone verified successfully";
    public static $staffCreated = "ChildVille Staff Portal Created";

    // image upload 
    public static $fileTooLarge = "Image Too Large";
    public static $fileTypeNotAllowed = "Image Type Not Allowed";
    Public static $unknownErrorFileUpload = "Error occur While Uploading Image";

    //pupils 
    public static $pupilsAddedd = "Pupils Added Succesfully";
    
}
