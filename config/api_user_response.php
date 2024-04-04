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

    // image too large
    public static $invalidImageSent = "Invalid image sent";
    public static $iconImageSent = "Invalid image sent";
    public static $imageTooLarge = "Image too large";
    public static $imageTypeNotAllowed = "Image type not allowed";
    public static $unknownErrorImgeUpload = "The uploaded file exceeds the maximum file size allowed by the server.";
    public static $imageUploadFailed = "Error uploading image";
    public static $insertAllFields = "Please Insert correct data";
    public static $giffNotSent = "Giff not sent";

    // Adverts
    public static $errorAddingAdverts = "Error adding advert";
    public static $advertAdded = "Advert added successfully";
    public static $errorUpdateAdverts = "Error updating advert";
    public static $updateAdverts = "Advert updated successfully";
    public static $deleteAdverts = "Advert deleted";

    // Discount
    public static $errorAddingDiscount = "Error adding Discount";
    public static $discountAdded = "Discount added successfully";
    public static $errorUpdateDiscount = "Error updating Discount";
    public static $updateDiscount = "Discount updated successfully";
    public static $deleteDiscount = "Discount deleted";
    public static $invalidDiscountCode = "Invalid Discount Code";
    public static $percentageError = "Percentage Can't be more than 100%";

    // Verify Meter 
    public static $meterNotFound = "Meter not found";
    public static $invalidDiscoPassed = "Invalid disco passed";
    public static $invalidMeterTypePassed = "Kindly pass valid meter type";
    public static $errorInitializingPayment = "Unable to initialize payment";
    public static function discoUnavailable($name) { return "$name is currently unavailable";}

    // Requery Transaction
    public static $errorRequeringTransaction = "Error requerying transaction";
    public static $transactionNotFound = "Transaction not found";

    // Vend Transaction
    public static $errorVending = "Error creating vend transaction";
    public static $vendMeterTransactionSuccessful = "Vend meter transaction successful";
    public static $transactionInitialtedSuccessfully = "Transaction initialted successfully";

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

    //Success message
    public static $RegisterSuccess = "User registration Successful";
    public static $profileUpdateSuccessful = "Profile updated SuccessFully";
    public static $profilePicUpdateSuccessful = "Profile picture updated";



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
    public  static $loggingInviteCheckError = "Error Logging action, try again later";
    public  static $accessCodeExpired = "Code Expired";
    public  static $accessCodeBotInTimeRange = "The user is not supposed to be here at this time.";
    public  static $accessCodeRevoked = "Code Revoked";
    public  static $accessCodeDenied = "Code Denied";
    public  static $accessCodeHeld = "Access Held";
    public  static $invalidStatus = "Invalid status passed";
    public  static $invalidAction = "Invalid action passed";
    public  static $accessCodeAlreadyGranted = "Access Already Granted";
    public  static $accessCodeValid = "Access code Valid";
    public  static $validOTP = "OTP Valid";
    public  static $joinEstate = "Join estate request Submitted";
    public  static $joinEstateStatus = "User join estate status changed successfully";
    public  static $accessCodeStatusChange = "Access Status Changed Successfully";
    public  static $accessCodeStatusChangeError = "Error Changing Access Status, Try Again Later";
    public  static $joinStausChangeError = "Error Changing Join Estate Status, Try Again Later";
    public  static $inactiveEstate = "Estate is not yet approved by the manager";
    public  static $estateValidityPeriodExpired = "Estate validity period expired";
    public  static $estateIdStillActive = "Estate id is active";
    public static $invalidUserid = "Invalid user id";
    public static $deleteUser = "User deleted successfuly";
    public static $emailVerified = "Email verified successfully";
    public static $phoneVerified = "Phone verified successfully";



    //invalid id
    public  static $invalidEstate = "Invalid Estate id Passed";
    public  static $invalidEstateDate = "Date can not be a past day";
    public  static $maxStrectIs = "Maximum Stretch invitation is 7 days";
    public  static $invalidEstateTime = "The arrival time cannot be earlier than the current time.";
    public  static $invalidEstateEndTime = "End time can not be lesser than start time";
    public  static $invalidStreet = "Invalid Street id Passed";
    public  static $addStreetError = "Unable to add street";
    public  static $invalidBuilding = "Invalid Building id Passed";
    public  static $estateRequestAlreadySent = "Estate request already sent";
    public  static $addBuildingError = "Unable to add building";
    public  static $invalidApartment = "Invalid Apartment id Passed";
    public  static $addApartmentError = "Unable to add apartment";
    public  static $joinEstateError = "Unable to join estate";
    public  static $invalidCSVFileSent = "Invalid CSV file sent";
    public  static $errorFetchingCSVData = "Error fetching CSV data";
    public  static $dataExtractedSuccessfully = "Data extracted successfully";

    // alerts 
    public  static $alertsNotFound = "Alert type not found";
    public  static $noPermissionTosendReport = "You don't have permission to send an alert to this estate";
    public  static $noPermissionToInvite = "You don't have permission invite to this estate";
    public  static $sendReportError = "Unable to send report";
    public  static $reportSent = "Report sent successfully";
    public  static $invalidImageUrl = "Invalid image sent";
    public  static $errorAddingAleert = "Unable to add alert report";
    public  static $alertAdded = "Alert added successfully";


    // Security FCM
    public  static $errorUpdatingToken = "Error updating token";
    public  static $sameDataPassed = "Same data sent";
    public  static $tokenUpdated = "Token updated successfully";
    public  static $securityAdded = "Securit added successfully";
    public static $estateSecurityDeleted = "Estate Security deleted successfully";

    // Invite Type
    public static $invalidInviteTypeSent = "Invalid invite type sent";
    public static $invalidInviteSent = "Invalid invite sent";
    public static $inviteNotActive = "Invite not active";
    public static $errorCreatingInvite = "Error Creating Invite";
    public static $errorCreatingAdvanceOptions = "Error Creating Advance Options";
    public static $invalidPhoneSent = "Invalid phone number sent";
    public static $inviteRevoked = "Invite revoked successfully";
    public static $invalidAlreadyRevoked = "Invite already revoked";
    public static $errorUpdatingInvite = "Error Updating Invite";
    public static $number_of_guests_not_match = "Number of guests does not match expected guests";
    public static $invite_created_successfully = "Invite created successfully";
    public static $cantRevokeGrantedInvite = "Invite can't be revoked because its already granted";

    // contact response
    public static $contactAdded = "Contact added successfully";
    public static $contactEdited = "Contact edited successfully";
    public static $contactRemoved = "Contact removed successfully";
    public static $invalidContactSent = "Invalid contact sent";
    public static $contactPhoneExist = "Contact phone number already exist";

    // notifications
    public static $notificationNotFound = "Notification not found";
    public static $notificationRead = "Notification read successfully";
    public static $notificationAlreadyRead = "Notification already read";

    // biometrics
    public static $biometericsEnabled = "Biometrics enabled";
    public static $biometericsDisabled = "Biometrics disabled";
    public static $invalidSortTimePassed = "Invalid sort time passed";

    // Invite type value
    public static $stretch_invite = "stretch";
    public static $one_time_invite = "one-time";

    // Manager permission error
    public static $noPermissionToViewEstate = "You don't have permission to view this estate details";
    public static $noPermissionToTakeAction = "You don't have permission to take action on this estate";

    // Location
    public static $Invalidlocation = "Invalid locations sent";

    // Estates
    public  static $unableToAddEstate = "Unable to add estate";
    public  static $estateAdded = "Estate added successfully";
    public  static $estateEdited = "Estate updated successfully";
    public static $changeEstateError = "Unable to update estate status";
    public static $estateStatusChanged = "Estate status updated successfully";
    public static $invalidEstateOrNotApproved = "Estate not found or not approved";
    public static $notApproved = "Your Estate is not Approved Yet";
    public static $estateNotFound = "Estate not found";

    // Streets
    public static $errorAddingStreets = "Unable to add streets";
    public static $errorEditingStreets = "Unable to edit streets";
    public static $errorDeletingStreets = "Unable to delete streets";
    public static $streetAdded = "Streets added successfully";
    public static $editAdded = "Streets updated successfully";
    public static $streetDeleted = "Streets deleted successfully";
    public static $streetStillUsedByUser = "Street is still been used by a user";
    public static $changeStreetError = "Unable to update street status";


    // Buildings
    public static $errorAddingBuildimg = "Unable to add buildings";
    public static $errorEditingBuildimg = "Unable to edit buildings";
    public static $errorDeletingBuildimg = "Unable to delete buildings";
    public static $buildingAdded = "Buildings added successfully";
    public static $buildingEdited = "Buildings updated successfully";
    public static $buildingDeleted = "Buildings deleted successfully";
    public static $buildingStillUsedByUser = "Building is still been used by a user";
    public static $changeBuildingError = "Unable to update building status";


    // Apartment
    public static $errorAddingApartment = "Unable to add apartment";
    public static $errorEditingApartment = "Unable to update apartment";
    public static $errorDeletingApartment = "Unable to delete apartment";
    public static $apartmentAdded = "Apartment added successfully";
    public static $apartmentDeleted = "Apartment deleted successfully";
    public static $apartmentEdited = "Apartment updated successfully";
    public static $apartmentStillUsedByUser = "Apartment is still been used by a user";

    // Security
    public static $errorAddingSecurity = "Unable to add security";
    public static $invalidSecurity = "Invalid security id";
    public static $securityDeleted = "Security deleted successfully";

    // Subscription
    // subscriptions plans
    public static $invalidPrice = "Invalid subscription price";
    public static $invalidBillingCycle = "Invalid subscription billing cycle";
    public static $subPlanAdded = "Subscription plan successfully added";
    public static $subPlanUpgraded = "Subscription plan successfully upgraded";
    public static $subPlanUpdated = "Subscription plan successfully updated";
    public static $subPlanDeleted = "Subscription plan successfully deleted";
    public static $subPlanNotExist = "Invalid subscription plan";
    public static $cannotDeletesubPlan = "Unable to delete, an estate has subscribe to this plan";
    public  static $statusChangedMessage = "Status changed successfully";



    // user subscription
    public static $passSubscriptionPlan = "Subscription plan must be sent";
    // public static $insufficientBalance = "Insufficient balance";
    public static $userSubscribed = "Subscription plan successfully activated";
    public static $noActiveSub = "You have no active subscription";
    public static $autoRenewalCanceled = "Auto renewal has been canceled";
    public static $deactivatedSubscription = "Expired subscription deactivated";
    public static $nosubscriptionToUpdate = "No subscription plan to update";
    public static $cantUpgradeTosamePlan = "You can't upgrade to same plan";
    public static $noActiveSubscription = "No current expired subscription to deactivate";
    public static $insufficientBalance = "Insufficient balance";

    // Forums
    public static $forumCreated = "Forum created successfully";
    public static $forumUpdated = "Forum updated successfully";
    public static $forumDeleted = "Forum deleted successfully";
    public static $forumNotExist = "Forum does not exist";
    public static $forumCategoryNotExist = "Forum category does not exist";
    public static $forumHeaderTooLong = "Forum header is too long";

    // Forumcategory
    public static $forumCategoryCreated = "Forum category created successfully";
    public static $forumCategoryUpdated = "Forum category updated successfully";
    public static $forumCategoryDeleted = "Forum category deleted successfully";

    public static $smsSentToContacts = "SMS sent to contacts successfully";
    public static $invalidContactInviteSent = "You can only add contacts to event invite";
    public static function cantUpdateUserEstateStatus($status)
    {
        if ($status == 1) {
            return  "User already an approved resident";
        } elseif ($status == 3) {
            return  "User estate request already declined";
        }
    }

    public static function userEstateStatusChanged($status)
    {
        if ($status == 1) {
            return  "User estate request approved";
        } elseif ($status == 3) {
            return  "User estate request declined";
        }
    }

    //domestic Staff Position
    public static $domesticStaffAdded = "Domestic Staff Added Successfully";
    public static $domesticStaffNotExist = "Domestic Staff does not exist";
    public static $domesticStaffCreated = "Domestic Staff created successfully";
    public static $domesticStaffUpdated = "Domestic Staff Updated successfully";
    public static $domesticStaffDeleted = "Domestic Staff deleted successfully";
    public static $invalidGurantorPhone = "Invalid Gurantor phone";
    public static $passGuarntorName = "Guarantor phone must be sent";
    public static $passGuarntorAddress = "Guarantor address must be sent";
    public static $passStaffNin = "Kindly pass a valid NIN";
    public static $passStaffBvn = "Kindly pass a valid BVN";
    public static $passStaffBvnOrNin = "Kindly pass staff NIN or BVN";


    // Domestic staff Responses
    public static $domesticStaffImageNotSent = "Kindly upload the picture of your domestic staff";
    public static $userEstateInvalid = "User estate does not exist";
    public static $userEstateNotApproved = "User estate not approved";
    public static $userEstateExpired = "User estate expired";
    public static $userEstateNotIssued = "User estate not issued";
    public static $invalidEndDate = "Invalid end date";
    public static $invalidDomesticPosition = "Invalid domestic staff position";
    public static $enterNumberOfCoworkers = "Kindly enter number of coworkers";
    public static $invalidDay = "Invalid day selected";
    public static $errorAddingDomesticStaff = "Unable to add staff";
    public static $errorupdatingDomesticStaff = "Unable to update staff";
    public static $domestciStaffAdded = "Domestic staff added successfully";
    public static $casualStaffAdded = "Casual staff added successfully";
    public static $invalidStaffSent = "Invalid staff sent";
    public static $staffNotForEstate = "Staff is not for this estate";
    public static $staffUpdated = "Staff updated successfully";
    public static $staffAlreadyActive = "Staff is already active";
    public static $staffAccessAlreadyBanned = "Staff access already banned";
    public static $staffAccessExpired = "Staff access has expired";
    public static $staffAccessRevokedByManager = "Staff access has was deactivated by estate manager";
    public static $staffAccessBanned = "Staff access has been banned";
    public static $staffAccessRestored = "Staff access has been restored";
    public static $phoneAndNextOfKinPhoneCantBeSame = "Staff phone number and gurantor's phone number cannot be same";
    public static $nameAndNextOfKinNameCantBeSame = "Staff name and gurantor's name cannot be same";

    // ice 
    public static $iceAdded = "Ice Added Successfully";
    public static $iceNotExist = "Ice does not exist";
    public static $mailAlreadyExist = "Email already exist";
    public static $iceUpdated = "Ice Updated Successfully";
    public static $trackid = "Track id does not exist";
    public static $iceDeleted = "Ice deleted successfully";


    //marketPlace Category
    public static $marketCategoryCreated = "Market Category created successfully";
    public static $marketCategoryUpdated = "Market Category Updated successfully";
    public static $maetCategoryNotExist = "Market Category does not exist";
    public static $marketCategoryDeleted = "Market Category deleted successfully";

    //estate forum 
    public static $forumNotFound = "Forum not found";
    public static $estateForumAdded = "Estate Forum added successfully";
    public static $estateForumUpdated = "Estate Forum updated successfully";
    public static $estateForumDeleted = "Estate Forum deleted successfully";
    public static $EstateForumNotExist = "Estate Forum does not exist";

    //Admin forum 
    public static $adminForumAdded = "Admin Forum added successfully";
    public static $adminForumUpdated = "Admin Forum updated successfully";
    public static $adminForumDeleted = "Admin Forum deleted successfully";
    public static $adminForumNotExist = "Admin Forum does not exist";

    //Payment
    public static $invalidpaymentTypeid = "Invalid payment type id";
    public static $invalidpaymentTypeCategoryid = "Invalid payment category type id";
    public static $invalidEstatepaymentid = "Invalid estate payment id";
    // public static $invalidpaymentTypeid = "Invalid payment type id";
    public static $estatePaymentdded = "Estate payment added successfully";
    public static $estatePaymentUpdated = "Estate Payment Updated Successfully";
    public static $estatePaymentDeleted = "Estate payment deleted successfully";
    public static $errorAddingEP = "Unable to add estate payment";
    public static $errorUpdatingEP = "Unable to update estate payment";

    //payment type
    public static $paymentTypedded = "Payment type added successfully";
    public static $invalidPaymentType = "Invalid payment type passed";
    public static $paymentTypeUpdated = "Payment Type Updated Successfully";
    public static $paymentTypeDeleted = "Payment type deleted successfully";
    public static $errorAddingPT = "Unable to add payment type";
    public static $errorUpdatingPT = "Unable to update payment type";
    //payment type category
    public static $invalidPaymentTypeCategory = "Invalid payment type category passed";
    public static $paymentTypeCategorydded = "Payment type category added successfully";
    public static $paymentTypeCategoryUpdated = "Payment type category Updated Successfully";
    public static $paymentTypeCategoryDeleted = "Payment type category deleted successfully";
    public static $errorAddingPTCategory = "Unable to add payment type category";
    public static $errorUpdatingPTCategory = "Unable to update payment type category";
    public static $invalidAmount = "Invalid amount sent";
    public static $paymentSuccess = "Payment successful";
    public static $errorMakingPayment = "Error making payment";



    // market place item
    public static $emptyImageSent = "Kindly upload an image";
    public static $imageLimit = "You can only upload 3 images";
    public static function imageLimitValue($limit)
    {
        return "You can only upload $limit images more";
    }
    public static $imageAlreadyUpToLimit = "You can already have 3 images uploaded";
    public static $errorAddingMarketPlaceItem = "Unable to add market place item";
    public static $errorUpdatingMarketPlaceItem = "Unable to update market place item";
    public static $errorDeletingMarketPlaceItem = "Unable to delete market place item";
    public static $errorDeletingMarketPlaceItemImage = "Unable to delete market place item";
    public static $marketPlaceItemAdded = "Market place item added successfully";
    public static $marketPlaceUpdatedAdded = "Market place item updated successfully";
    public static $marketPlaceItemDeleted = "Market place item deleted successfully";
    public static $marketPlaceItemImageDeleted = "Market place item image deleted successfully";
    public static $marketPlaceItemNotFound = "Market place item not found";
    public static $marketPlaceItemImageNotFound = "Market place item image not found";
    public static $marketPlaceItemImagesAdded = "Market place item image added successfully";
    public static $invalidMarketPlaceItemid = "Market place item id not valid";
    public static $unableChangeStatus = "Unable to change status";

    // Payment
    public static $invalidPaymentSent = "Invalid payment data sent";
    public static $errorUpdatingPaymentStatus = "Unable to update payment status";
    public static $invalidAmountPaymentSent = "Invalid amount sent";
    public static $paymentUpdatedViaWebhook = "Payment successfully updated via webhook";


    //Admin
    public  static $invalidAdminid = "Invalid admin id";
    public  static $getAdminError = "Unable to fetch admin details";
    public  static $errorResetPass = "Unable to reset admin password";
    public  static $sendResetPassword = "Unable to send new password";
    public  static $resetPasswordMailSent = "New Password Sent successfully";
    public static $addAdmin = "Admin added successfully";
    public  static $adminDelete = "Admin deleted successfully";
    public static $isSuperError = "Cannot perform action on super admin";
    public static $resetSelfPassword = "Cannot reset your password";

    //Adminlevel access
    public  static $addAdminLevel = "New admin level added successfully";
    public  static $updateAdminLevel = "Admin level updated successfully";
    public  static $invalidAdminLevel = "Admin level not valid";
    public  static $adminLevelDelete = "Admin level deleted successfully";
    public static $levelChangedMessage = "Admin level changed";
    public  static $unauthorized_access = " You did not have permission to access this endpoint";

    //system settings
    public static $updateSystem = "System settings updated successfully";
    public static $updateDataTable = "API data table updated successfully";
    public static $smalltokenExpMin = "Token expiry time should be greater than 60 minutes";

    //thirdparty
    public static $invalidSendGridid = "Invalid sendgrid id";
    public  static $sendgridUpdateSuccess = "Sendgrid updated successfully";
    public  static $invalidSenderEmail = "Invalid sender email";
    public  static $addSendgrid = "Sendgrid added successfully";
    public  static $deleteSendgrid = "Sendgrid deleted successfully";

    public  static $addSimpu = "Simpu api added successfully";
    public  static $updateSimpu = "Simpu api updated successfully";
    public  static $deleteSimpu = "Simpu api deleted successfully";
    public static $invalidSimpu = "Invalid simpu id";

    public static $invalidUrl = "Invalid url sent";
    public static $invalidImageLink = "Invalid image url sent";
    //PayStack api
    public static $invalidPaystackid = "Invalid paystack api id";
    public  static $paystackUpdateSuccess = "Paystack api updated successfully";
    public  static $addPaystack = "Paystack api added successfully";
    public  static $deletePaystack = "Paystack api deleted successfully";
    //zepto api
    public static $invalidZeptoid = "Invalid zepto api id";
    public  static $ZeptoUpdateSuccess = "Zepto api updated successfully";
    public  static $addZepto = "Zepto api added successfully";
    public  static $deleteZepto = "Zepto api deleted successfully";

    //zepto api
    public static $invalidFirebaseid = "Invalid firebase api id";
    public  static $firebaseUpdateSuccess = "Firebase api updated successfully";
    public  static $addFirebase = "Firebase api added successfully";
    public  static $deleteFirebase = "Firebase api deleted successfully";
    //Termi api
    public static $invalidTermiid = "Invalid termi api id";
    public  static $termiUpdateSuccess = "Termi api updated successfully";
    public  static $addTermi = "Termi api added successfully";
    public  static $deleteTermi = "Termi api deleted successfully";

    //manager
    public static $invalidManagerid = "Invalid manager id";
    public  static $managerDeleted = "Manager deleted successfully";

    //Estate for admin
    public static $deleteResidentBuilding = "Cannot delete, resident already exist in this building";
    public static $deleteResidentApartment = "Cannot delete, resident already exist in this apartment";
    public static $deleteResidentStreer = "Cannot delete, resident already exist in this street";
    public static $deleteEstateLocation = "Cannot delete, there is an estate in this location";

    // File response
    public  static $invalidFileSent = "Invalid file sent";
    public  static $fileTooLarge = "File sent too large";
    public  static $fileTypeNotAllowed = "File type not allowed";
    public  static $unknownErrorFileUpload = "Unknown error while uploading file";

    // Estate  notice
    public static $errorAddingNotice = "Unable to add notice";
    public static $estateNoticeAddedSuccessfully = "Estate notice added successfully";
    public static $invalidEstatenoticeid = "Invalid estate Notice id";
    public static $estateNoticeDeleted = "Estate Notice deleted successfully";

    //location
    public static $invalidLocationid = "Invalid location id";
    public static $locationDeleted = "Location deleted successfully";
    public static $locationAdded = "Location added successfully";
    public static $locationUpdated = "Location updated successfully";
    public static $locationNotFound = "Location not found";
    public static $locationAlreadyExist = "Location already exist";
    public static $locationDoesNotExist = "Location doesn't exist";
    public static $errorChangelocationStatus = "Unable to change location status";


    // Banks
    public static $banksAdded = "Banks added successfully";
    public static $banksUpdated = "Bank updated successfully";
    public static $banksDeleted = "Bank deleted successfully";
    public static $banksNotFound = "Banks not found";
    public static $banksAlreadyExist = "Bank already exist";
    public static $unableToAddBank = "Unable to add bank";


    // Verify Account Response
    public static $accountVerificationFailed = "Account number verification failed";
    public static $accountVerificationSuccess = "Account number verified successfully";
    public static $accountNameDoesNotMatch = "Account name does not match estate_name";

    // Estate Bank
    public static $estateBankAdded = "Estate bank added successfully";
    public static $estateBankUpdated = "Estate bank updated successfully";
    public static $estateBankDeleted = "Estate bank deleted successfully";
    public static $estateBankNotFound = "Estate bank not found";
    public static $noApprovedBankForThisEstate = "No approved bank for this estate";
    public static $unableToAddEstateBank = "Unable to add estate bank";
    public static $statusCantBeChangedToUnderReview = "Status can't be changed to under review";
    public static $bankalreadyDefault = "Bank is already default";
    public static $estateBankSetToDefault = "Bank set to default successfully";
    public static $unableToUpdateEstateBank = "Unable to update estate bank";
    public static $unableToMakePaymentAtThisTime = "Unable to make payment at this time, try again later";


    // Saved Items
    public static $errorSavingItem = "Unable to save item";
    public static $itemSavedSuccessfully = "Item saved successfully";
    public static $errorDeletingSavedItem = "Unable to delete saved item";
    public static $savedItemDeleted = "Saved item deleted successfully";

    // Manager permission
    public  static $noPermissionToAddManager = "You don't have permission to add manager";
    public  static $managerAdded = "Manager added successfully";
    public  static $errorAddingManager = "Unable to add manager";
    public  static $errorupdatingManager = "Unable to update manager";

    // Sub Residents 
    public static $sameResident = "You can't add yourself as a sub resident";
    public static $sameResidentPhone = "Sub resident phone number can't be same as your phone number";
    public static $subResidentAdded = "Sub resident added successfully";
    public static $errorAddingSubResident = "Unable to add sub resident";
    public static $emailAlreadyExistForthisEstate = "User already a resident in this estate";
    public static $subResidentNotFound = "Sub resident not found";
    public static $pendingSubResidentCantBeUpdate = "You don't have permission to update a pending sub resident";
    public static $errorUpdatingSubResidentStatus = "Unable to update sub resident status";
    public static $subResidentAccessRevoked = "Sub resident access has been revoked";
    public static $subResidentAccessRestored = "Sub resident access has been restored";
    public static $accessRevoked = "Your access has been revoked by your main resident";
    public static $mainResidentNotFound = "Main resident not found";
    public static $mainResidentNotApproved = "Main resident is not approved";
    public static $selectSubResidentNotApproved  = "Please select a sub resident that is approved";
    public static $userAlreadyASubResident  = "Selected resident is already a sub resident";
    public static $subResidentNotInThisEstate  = "Sub resident is not in the same estate as your main resident";
    public static $errorUpdatingSubResident  = "Unable to update sub resident";
    public static $residentChnagedToSubResident  = "Resident changed to sub resident successfully";

}
