const validatePhoneNumber = (input) => {
    const regExp = /^[0-9,+]+$/
    const phone = String(input);
    const validate = phone.match(regExp);
    var number;
    var bool;
    if (validate) {
        const test = phone.includes("+234");
        const secondTest = (test) ? phone.includes("+2340") : false;

        (test && secondTest) ? number = phone.replace("+2340", "0") : "";
        (test && !secondTest) ? number = phone.replace("+234", "0") : ""

        const thirdTest = (!test && !secondTest) ? phone.includes("234") : false;
        const fourthTest = (thirdTest) ? phone.includes("2340") : false;

        (thirdTest && fourthTest) ? number = phone.replace("2340", "0") : "";
        (thirdTest && !fourthTest) ? number = phone.replace("234", "0") : "";



        if (!number) {
            const finalTest = phone.startsWith("0")
            if (finalTest) {
                (phone.length < 11 || phone.length > 11) ? number = false : number = phone;
                return number
            } else {
                bool = false
                return bool
            }
        } else {
            (number.length < 11 || number.length > 11) ? number = false : number = number;
            return number
        }

    } else {
        bool = false
        return bool;
    }
}

const days_difference = (day1, day2) => {
    var day1 = new Date(day1);
    var day2 = new Date(day2);

    var differnce_in_time = day2.getTime() - day1.getTime();
    var days_difference = differnce_in_time / (1000 * 3600 * 24);

    return days_difference;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    // get Format 
    let dd = result.getDate();
    let mm = result.getMonth() + 1;
    let yyyy = result.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    let result_format = yyyy + '-' + mm + '-' + dd;

    return result_format;
}

const urlPath = window.location.pathname.split("/");
const length = urlPath.length;
const webPage = urlPath[length - 1];

let getUrlParams = new URLSearchParams(window.location.search);

const getFileExtension = (filename) => {

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

var today = new Date()
let curentYearMonth = today.getFullYear() + "-" + today.getMonth() + 1;

var salesStatistics;
var orderStatistics;

let app = Vue.createApp({
    data() {
        return {
            // General utilites
            generalFunctions: new GeneralFunction({ apiPath: "staff" , logoutUrl : "staff-login.php" }),
            images: null,
            loading: null,
            currentPage: null,
            currentExportPage: null,
            totalData: null,
            totalPage: null,
            per_page: 10,
            exportPer_page: 100,
            totalExportPage: null,
            class_active: null,
            reset_token: null,
            search: null,
            sort: null,
            sortValue: "",
            discoValue: "",
            // baseUrl:'https://light.ng/',
            baseUrl: 'http://localhost/childville_web/',
            first_name: null,
            last_name: null,
            gender: null,
            address: null,
            occupation_or_work: null,
            total_payment: null,
            no_of_people: null,
            imagefile: null,
            itemDetails: null,
            imageSent: null,
            iconSent: null,
            pathname: null,
            success: null,
            daily: null,
            weekly: null,
            monthly: null,
            time_sort_value: null,
            top_product_ordered: null,
            total_transactions: null,
            total_successful_transactions: null,
            total_pending_transactions: null,
            total_failed_transactions: null,
            total_customers: null,
            total_discos: null,
            bar_chart_data: null,
            financialStatistics: null,
            failledOrderChartData: null,
            successOrderChartData: null,
            chartcategory: null,
            enddate: null,
            startdate: null,
            disco_Profits: null,
            top_disco:null,
            status: null,
            sort_status_value: null,

            //admin
            admins: null,
            limit: null,

            // login details
            email: null,
            password: null,
            confirm_password: null,
            username: null,
            name: null,
            token: null,
            adminDetails: null,
            superAdmin: null,
            admin_initials: null,
            admin_level: null,

            //notifications
            userNotifications: null,
            userNotifications_totalData: null,
            userNotifications_total_page: null,
            userNotifications_currentPage: null,
            userNotifications_per_page: null,
            notificationType: null,

            //systemsetttings
            systemSettings: null,
            apiDataTable: null,
            light_mode_logo: null,
            dark_mode_logo: null,
            max_screen_logo: null,
            mid_screen_logo: null,
            small_screen_logo: null,

            // meter
            meters: null,
            meter_name: null,
            meter_type: null,
            meter_no: null,
            meterDetails: null,
            sort_meter_type: null,
            sort_meter_value: null,


            //disco
            disco_id: null,
            oneapp_code: null,
            vtpass_code: null,
            clubconnect_code: null,
            discoDetails: null,
            discos: null,
            clubconnectcodes: null,
            vtpasscodes: null,
            shortname: null,
            service_charge: null,
            color_code: null,
            vtpassDiscoscodes: null,

            //states
            states: null,
            state_id: null,
            stateDetails: null,


            //users
            users: null,
            user_details: null,
            user_notifications: null,
            user_currentPage: null,
            user_totalData: null,
            user_totalPage: null,
            user_per_page: null,

            //User Transaction
            user_transactions: null,
            user_trans_currentPage: null,
            user_trans_totalData: null,
            user_trans_totalPage: null,
            user_trans_per_page: null,

            //User meter
            user_meter_currentPage: null,
            user_meter_totalData: null,
            user_meter_totalPage: null,
            user_meters: null,

            // discount code
            code: null,
            amount: null,
            discount_code_id: null,
            discounts: null,
            discount_details: null,
            discount_type: null,


            //adverts
            adverts: null,
            advertUrl: null,
            advertText: null,
            advert_details: null,

            //ThirdParty api
            apiKey: null,
            apiName: null,
            apiWallet: null,
            apiMerchant: null,
            apiAccno: null,
            apiUsername: null,
            apiPassword: null,
            sendFrom: null,
            emailFrom: null,
            sendType: null,
            apiToken: null,
            routing: null,
            smsChannel: null,
            smsType: null,
            monifys: null,
            monify_details: null,
            kudis: null,
            kudi_details: null,
            payStacks: null,
            payStack_details: null,
            vtPass: null,
            vtpass_details: null,
            vtpassDetail: null,
            vtpasss_url: null,
            sendGrids: null,
            sendGrid_details: null,
            termiApis: null,
            termiApi_details: null,
            smartSolutions: null,
            smartSolution_details: null,
            clubkonnects: null,
            clubkonnects_details: null,
            secretKey: null,
            publicKey: null,
            oneApps: null,
            oneapp_details: null,
            vendFlatRate: null,
            simpuApis: null,
            simpuApiDetails: null,
            apiWallet: null,
            apiMerchant: null,
            apiAccno: null,
            apiKey: null,
            apiName: null,
            secretKey: null,
            MonifyUrl: null,

            // Transactions
            transactions: null,
            trans_type: null,
            trans_val: null,
            payment_type: null,
            pay_value: null,
            total_transactions: null,
            sortDiscos: null,

            //financial summary
            financialStatistics: null,
            yearMonth: '',
            failledOrderChartData: null,
            successOrderChartData: null,

            //cash back 
            cashBank: null,

        }
    },
    methods: {
        //general utilities
        getToken() {
            const token = window.localStorage.getItem("token");
            this.token = (token) ? token : null;
        },
        logout() {
            window.localStorage.removeItem("token");
            window.location = this.baseUrl + "staff-login.php";
        },
        async nextPage() {
            this.currentPage = parseInt(this.currentPage) + 1;
            this.totalData = null;
            this.totalPage = null;
        },
        async previousPage() {
            this.currentPage = parseInt(this.currentPage) - 1;
            this.totalData = null;
            this.totalPage = null;
        },
        async setNoPerPage(no) {
            this.per_page = no;
            this.class_active = true;
        },
        async getIndex(index) {

        },
        async getItemIndex(index) {

        },
        swalToast(icon, title) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
            })
            Toast.fire({
                icon: icon,
                title: title
            })
        },
        async uploadImage(event) {
            this.imageSent = event.target.files[0];
            console.log(this.imageSent);
        },

        async onLoading() {
            this.loading = true;
        },
        async onCompleted() {
            this.loading = false;
        },
        async onSuccess(successText, successData) {
            this.generalFunctions.swalToast('success', successText);
        },

        async onError(error) {
            this.generalFunctions.swalToast('error', error);
        },

        async callPostRequest(data, url, headers, onSuccess, canNavOn401 = 1) {
            let responseData = await this.generalFunctions.postRequest(data, url, headers, this.onLoading, this.onCompleted, (successStatus, success, successData) => {
                this.onSuccess(success, successData);
                if (typeof onSuccess === 'function') {
                    onSuccess(successStatus, successData);
                }
            }, this.onError, canNavOn401);
        },

        async callGetRequest( url, headers, onSuccess, showToast = 1){
            let responseData = await this.generalFunctions.getRequest(url, headers, this.onLoading, this.onCompleted, (successStatus, success, successData) =>{
                // if ( showToast == 1 ) this.onSuccess(success, successData);
                if ( typeof onSuccess === 'function' ) {
                    onSuccess(successStatus, successData);
                }
            }, this.onError);
        },


        // AUTH
        async staffLogin() {
            if (!this.email || !this.password) {
                this.generalFunctions.swalToast("error", "Kindly Enter all Fields")
                return
            }
            const url = `login.php`;
            let data = {
                "email": this.email,
                "password": this.password,
            };
            let headers = {
                "Content-type": "application/json",
            };
            await this.callPostRequest(data, url, headers, (successStatus, successData) => {
                if (!successData) {
                    return;
                }
                let token = successData.token;
                window.localStorage.setItem("token", token);
                window.location = `${this.baseUrl}staff-profile.php`;
            }, 2);
        },
        async adminForgotPass() {
            if (!this.username) {
                this.error = "Insert all fields"
                this.swalToast("error", this.error);
            }
            const data = new FormData();
            data.append('username', this.username);

            const headers = {
                "Content-type": "application/json"
            }

            try {
                this.loading = true
                const response = await axios.post(`${this.baseUrl}api/auth/forgotAdminPass.php`,
                    data, { headers });

                if (response.data.data) {
                    this.success = response.data.text;
                    this.swalToast("success", this.success);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async admin_resetPassword() {
            // console.log("clicked");

            const urlParams = new URLSearchParams(window.location.search);
            const token = (urlParams.get('token')) ? urlParams.get('token') : null;


            if (!token) {
                this.error = "Kindly check your mail for the valid rest password link"
                this.swalToast("error", this.error);
                return
            }

            if (!this.confirm_password || !this.password) {
                this.error = "Kindly Enter all fields"
                this.swalToast("error", this.error);

            }
            if (this.confirm_password !== this.password) {
                this.error = "Password Does not match"
                this.swalToast("error", this.error);

            }

            const headers = { "Content-type": "application/json" }

            const data = new FormData();
            data.append('password', this.password);
            data.append('token', token);


            try {
                this.loading = true
                const response = await axios.post(`${this.baseUrl}api/auth/resetAdminpassword.php`,
                    data, { headers });
                if (response.data.status) {
                    this.success = response.data.text;
                    window.location.href = "./adminLogin.php";
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        // this.swalToast("error",errorMsg);
                        // // window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        // Account
        async getAdminDetails() {
            const url = `getAdminDetails.php`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.adminDetails = successData;
            });
        },
        async getAllAdmin(load = 1) {
              const url = `account/getAllAdmin.php`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.admins = successData.admins;
            });
        },
        async addAdmin() {
            if (!this.email == null || !this.username == null || !this.name == null || !this.password == null || !this.admin_level == null) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }

            let data = new FormData();
            data.append('email', this.email);
            data.append('password', this.password);
            data.append('name', this.name);
            data.append('adminLevel', this.admin_level);


            const url = `${this.baseUrl}api/admin/addAdmin.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.admin_level = this.email = this.password = this.name = null;
                    await this.getAllAdmin(8);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async changeAdminStatus(id, status) {

            let data = new FormData();
            data.append('status', status);
            data.append('id', id);


            const url = `${this.baseUrl}api/admin/changeAdminStatus.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    await this.getAllAdmin(8);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async resetAdminPassword(id) {

            let data = new FormData();
            data.append('admin_id', id);


            const url = `${this.baseUrl}api/admin/resetAdminPassword.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    await this.getAllAdmin(8);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async deleteAdmin(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/admin/deleteAdmin.php`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text)
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },

        // export sheet to excel
        async exportToExcel() {

            if (this.daily) {
                this.time_sort_value = "Daily";
            } else if (this.weekly) {
                this.time_sort_value = "Weekly";
            } else if (this.monthly) {
                this.time_sort_value = "Monthly";
            } else {
                this.time_sort_value = "All time";
            }

            let daily = (this.daily != null) ? `&sortDaily=1` : "";
            let weekly = (this.weekly != null) ? `&sortWeekly=1` : "";
            let monthly = (this.monthly) ? `&sortMonthly=1` : "";
            let sortDisco = (this.sortDiscos) ? `&disco_id=${this.sortDiscos}` : "";
            let sortValue = (this.sort != null) ? `&sortstatus=${this.sort}` : "";
            let exportPage = (this.currentExportPage != null) ? `&page=${this.currentExportPage}` : 1;
            let exportPerPage = (this.exportPer_page != null) ? `&noPerPage=${this.exportPer_Page}` : 100;

            const url = `${this.baseUrl}api/export_Excel.php?p=1${daily}${weekly}${monthly}${sortDisco}${sortValue}${exportPage}${exportPerPage}`;
            window.location = url

            const options = {
                method: "GET",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        // Cash Back
        async getAllCashBack(load = 1) {

            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 10;
            const url = `${this.baseUrl}api/accounts/get_all_cashback.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.cashBank = response.data.data.cashBank;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.cashBank = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        //USERS
        async setUserRegMethod(method) {
            window.localStorage.setItem("reg_method", method);
        },
        async removeUserRegMethod() {
            window.localStorage.removeItem("reg_method");
        },
        async getAllUsers(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `user/getAllUsers.php?page=${page}&per_page=${per_page}${search}${limit}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.users = successData.users;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },
       
        async getLatestUsers(load = 1) {
            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/accounts/getAllUsers.php?&per_page=5`;

            this.totalPage = null
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    if (response.data.data.page) {
                        this.users = response.data.data.users;
                        this.currentPage = response.data.data.page;
                        this.totalPage = response.data.data.totalPage;
                        // this.per_page = response.data.data.per_page;
                        this.totalData = response.data.data.total_data;
                    }
                } else {
                    this.users = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }
        },
        async getUser(index) {
            this.user = this.users[index]
        },
        async setUserId(id) {
            window.localStorage.setItem("user_id", id);
        },
        async getUserDetails(load = 1) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString)
            let user_id = (urlParams.get("id")) ? urlParams.get("id") : ''
            // let user_id = (window.localStorage.getItem("user_id"))? window.localStorage.getItem("user_id") : "";
            if (!user_id) {
                window.location = 'admin/users.php'
            }

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/admin/user/getAllUserById.php?user_id=${user_id}`;

            this.totalPage = null
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.user_details = response.data.data;
                    console.log(this.user_details.username);
                    //console.log(this.user_details);
                } else {
                    this.user_details = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }


        },
        async getUserTransactions(load = 1, loadpage = 1) {
            // const queryString = window.location.search;
            // const urlParams = new URLSearchParams(queryString)
            // let user_id = ( urlParams.get("id"))?  urlParams.get("id"): ''

            let user_id = (window.localStorage.getItem("user_id")) ? window.localStorage.getItem("user_id") : "";
            let page = (this.user_trans_currentPage) ? this.user_trans_currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 5;


            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/transactions/get_all_user_transactions.php?user_id=${user_id}&page=${page}&per_page=${per_page}`;

            this.totalPage = null
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.user_transactions = response.data.data.transactions;
                    this.user_trans_currentPage = response.data.data.page;
                    this.user_trans_totalData = response.data.data.total_data
                    this.user_trans_totalPage = response.data.data.totalPage;

                } else {
                    this.user_trans_currentPage = null;
                    this.user_trans_totalData = null;
                    this.user_trans_totalPage = null;
                    this.user_transactions = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getTransaction(index) {
            if (webPage == "customer-details.php") {
                this.user_transaction = this.user_transactions[index];
            }

            if (webPage == "transactions.php") {
                this.transaction = this.all_transactions[index]
            }
            
            if (webPage == "fund_wallet.php") {
                this.transaction = this.all_transactions[index]
            }

        },
        async getUserComplains(load = 1) {
            let user_id = (window.localStorage.getItem("user_id")) ? window.localStorage.getItem("user_id") : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 5;


            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/complains/getAllUserComplain.php?userid=${user_id}&user_type=4&page=${page}&per_page=${per_page}`;

            this.totalPage = null
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    if (response.data.data.page) {
                        this.user_complains = response.data.data.complains;
                        this.currentPage = response.data.data.page;
                        this.totalPage = response.data.data.totalPage;
                        // this.per_page = response.data.data.per_page;
                        this.totalData = response.data.data.total_data;
                    }
                } else {
                    this.user_complains = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getUserComplain(index) {
            this.user_complain = this.user_complains[index];
        },
        async getOrderAndTransaction() {
            await this.getUserOrders(2, 3);
            await this.getUserTransactions(3, 4)
        },
        async deleteUser(id) {
            const headers = {
                "Authorization": `Bearer ${this.token}`,
                // "Content-type": "application/json"
            }



            const data = new FormData();
            data.append('userid', id);

            let url = `${this.baseUrl}api/accounts/deleteUser.php`;


            try {
                const response = await axios.post(url, data, { headers });
                if (response.data.status) {
                    this.success = response.data.text;
                    this.swalToast("success", this.success);
                    await this.getAllUsers(4);
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },

        // ACCOUNTS
        async changeUserStatus(user_id, status) {
            const headers = {
                "Authorization": `Bearer ${this.token}`,
            }

            const data = new FormData();
            data.append('user_id', user_id);
            data.append('status', status);

            let url = `${this.baseUrl}api/accounts/change_user-status.php`;


            try {
                const response = await axios.post(url, data, { headers });
                if (response.data.status) {
                    this.success = response.data.text;
                    this.swalToast("success", this.success);
                    await this.getAllUsers();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }
        },
        async deleteUser(id) {
            const headers = {
                "Authorization": `Bearer ${this.token}`,
                // "Content-type": "application/json"
            }

            const data = new FormData();
            data.append('userid', id);

            let url = `${this.baseUrl}api/accounts/deleteUser.php`;

            try {
                const response = await axios.post(url, data, { headers });
                if (response.data.status) {
                    this.success = response.data.text;
                    this.swalToast("success", this.success);
                    await this.getAllUsers();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getUserNotifications(load = 1) {
            let user_id = (window.localStorage.getItem("user_id")) ? window.localStorage.getItem("user_id") : "";
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.user_currentPage) ? this.user_currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;


            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/accounts/get_user_notification.php?userid=${user_id}&page=${page}&per_page=${noPerPage}&search=${search}&sort=${sort}`;
            // console.log("url", url);
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.user_notifications = response.data.data.notifications;
                    this.user_currentPage = response.data.data.page;
                    this.user_totalData = response.data.data.total_data
                    this.user_totalPage = response.data.data.totalPage;

                } else {
                    this.user_notifications = null
                    this.user_currentPage = null;
                    this.user_totalData = null;
                    this.user_totalPage = null;
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getNotification(index) {
            this.user_notification = this.user_notifications[index];
        },

        //system settings
        async getSystemSettings(load = 1) {
            const url = `${this.baseUrl}api/system_details/get_system_settings.php?`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.systemSettings = response.data.data;
                } else {
                    this.systemSettings = null;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async uploadLightLogo(event) {
            this.light_mode_logo = event.target.files[0];
            console.log(this.light_mode_logo);
        },
        async uploadDarkLogo(event) {
            this.dark_mode_logo = event.target.files[0];
            console.log(this.dark_mode_logo);
        },
        async uploadMaxLogo(event) {
            this.max_screen_logo = event.target.files[0];
            console.log(this.max_screen_logo);
        },
        async uploadMidLogo(event) {
            this.mid_screen_logo = event.target.files[0];
            console.log(this.mid_screen_logo);
        },
        async uploadSmallLogo(event) {
            this.small_screen_logo = event.target.files[0];
            console.log(this.small_screen_logo);
        },
        async updateSystemSettings() {

            if (this.systemSettings.name == null || this.systemSettings.iosversion == null ||
                this.systemSettings.androidversion == null || this.systemSettings.webversion == null
                || this.systemSettings.activesmssystem == null || this.systemSettings.activemailsystem == null || this.systemSettings.activepaymentsystem == null ||
                !this.systemSettings.supportemail || !this.systemSettings.emailfrom || !this.systemSettings.referral_amount || !this.systemSettings.bot_number) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                if (isNaN(this.systemSettings.min_funded)) {
                    this.swalToast("error", "pass in valid min amount to fund")
                    return
                }
                let data = new FormData();
                data.append('systemSettingsid', this.systemSettings.id);
                data.append('name', this.systemSettings.name);
                data.append('baseurl', this.systemSettings.baseurl);
                data.append('iosversion', this.systemSettings.iosversion);
                data.append('androidversion', this.systemSettings.androidversion);
                data.append('webversion', this.systemSettings.webversion);
                data.append('activesmssystem', this.systemSettings.activesmssystem);
                data.append('activemailsystem', this.systemSettings.activemailsystem);
                data.append('activepaymentsystem', this.systemSettings.activepaymentsystem);
                data.append('activevendsystem', this.systemSettings.activevendsystem);
                data.append('supportemail', this.systemSettings.supportemail);
                data.append('emailfrom', this.systemSettings.emailfrom);
                data.append('min_funded', this.systemSettings.min_funded);
                data.append('bot_number', this.systemSettings.bot_number);
                data.append('referral_amount', this.systemSettings.referral_amount);
                if (this.light_mode_logo) {
                    data.append('light_mode_logo', this.light_mode_logo);
                } else {
                    data.append('light_mode_logo', this.systemSettings.light_mode_logo);
                }
                if (this.dark_mode_logo) {
                    data.append('dark_mode_logo', this.dark_mode_logo);
                } else {
                    data.append('dark_mode_logo', this.systemSettings.dark_mode_logo);
                }
                if (this.max_screen_logo) {
                    data.append('max_screen_logo', this.max_screen_logo);
                } else {
                    data.append('max_screen_logo', this.systemSettings.max_screen_logo);
                }
                if (this.mid_screen_logo) {
                    data.append('mid_screen_logo', this.mid_screen_logo);
                } else {
                    data.append('mid_screen_logo', this.systemSettings.mid_screen_logo);
                }
                if (this.small_screen_logo) {
                    data.append('small_screen_logo', this.small_screen_logo);
                } else {
                    data.append('small_screen_logo', this.systemSettings.small_screen_logo);
                }

                if (this.imageSent) {
                    data.append('appimgurl', this.imageSent);
                } else {
                    data.append('appimgurl', this.systemSettings.appimgurl);
                }

                const url = `${this.baseUrl}api/system_details/updateSystemSettings.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", response.data.text);
                        this.getSystemSettings(2);
                        location.reload();

                    }
                } catch (error) {
                    ////console.log(error);
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                } finally {
                    this.loading = false;
                }
            }

        },
        async getApiDataTable(load = 1) {
            const url = `${this.baseUrl}api/system_details/getApiDataTable.php?`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.apiDataTable = response.data.data;
                } else {
                    this.apiDataTable = null;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async updateApiDataTable() {
            // console.log(this.apiDataTable);
            if (this.apiDataTable.privatekey == null || this.apiDataTable.tokenexpiremin == null || this.apiDataTable.servername == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {
                data = new FormData();
                data.append('id', this.apiDataTable.id);
                data.append('privatekey', this.apiDataTable.privatekey);
                data.append('tokenexpiremin', this.apiDataTable.tokenexpiremin);
                data.append('servername', this.apiDataTable.servername);

                const url = `${this.baseUrl}api/system_details/updateApiDataTable.php?`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", response.data.text);
                        // window.location.href='admin/system_settings.php'
                        location.reload();

                    }
                } catch (error) {
                    ////console.log(error);
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        errorMsg = this.error;
                        this.swalToast("error", this.error);
                        return
                    }
                } finally {
                    this.loading = false;
                }
            }

        },

        // METER
        async getAllMeter(load = 1) {
            this.sort_meter_value = (this.sort_meter_type == 1) ? "Prepaid" : (this.sort_meter_type == 2) ? "Postpaid" : "";
            let search = (this.search) ? `&search=${this.search}` : "";
            let sort = (this.sort !== null) ? `&sort=1&sortstatus=${this.sort}` : "";
            let meter_type = (this.sort_meter_type !== null) ? `&sortMeterType=${this.sort_meter_type}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                // "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/meter/get_all_meter.php?page=${page}&per_page=${per_page}${search}${sort}${meter_type}`;

            this.totalPage = null
            this.meter = null;
            this.currentPage = null;
            this.totalPage = null;
            this.per_page = null;
            this.totalData = null;
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.meters = response.data.data.meters;
                    this.currentPage = response.data.data.page;
                    this.totalPage = response.data.data.totalPage;
                    this.per_page = response.data.data.per_page;
                    this.totalData = response.data.data.total_data;

                } else {
                    this.meters = null
                    this.currentPage = null;
                    this.totalPage = null;
                    this.per_page = null;
                    this.totalData = null;
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async addMeter() {
            if (!this.meter_name == null || !this.meter_type == null || !this.meter_no == null) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }
            let data = new FormData();
            data.append('meter_name', this.meter_name);
            data.append('meter_type', this.meter_type);
            data.append('meter_no', this.meter_no);

            const url = `${this.baseUrl}api/meter/add_meter.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    await this.getAllMeter();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async deleteMeter(id) {
            let data = new FormData();
            data.append('meter_id', meter_id);

            const url = `${this.baseUrl}api/meter/delete_meter.php`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text)
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getUserMeter(load = 1) {
            const url = `user/get_user_meter.php`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.user_meters = successData.users;
                
            });

        },

        //disco
        async getAllDisco(load = 1, per_page_check = 1) {
            if (per_page_check != 1) {
                this.per_page = 10;
            }

            let search = (this.search) ? `&search=${this.search}` : "";
            let sort = (this.sort !== null) ? `&sort=1&sortstatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/disco/get_all_disco.php?page=${page}&noPerPage=${per_page}${search}${sort}`;

            this.totalPage = null
            this.discos = null;
            this.currentPage = null;
            this.totalPage = null;
            this.per_page = null;
            this.totalData = null;
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.discos = response.data.data.discos;
                    this.currentPage = response.data.data.page;
                    this.totalPage = response.data.data.totalPage;
                    this.per_page = response.data.data.per_page;
                    this.totalData = response.data.data.total_data;

                } else {
                    this.meter = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async uploadIcon(event) {
            this.iconSent = event.target.files[0];
            console.log(this.imageSent);
        },
        async addDisco() {
            // console.log("adding disco");
            // if (!this.name || !this.shortname || !this.clubconnect_code || !this.oneapp_code || !this.imageSent ) {
            if (!this.name || !this.shortname || !this.oneapp_code || !this.vtpass_code || !this.imageSent || !this.iconSent || !this.color_code) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }
            //get commission from code
            let commission = '';
            if (this.vtpass_code) {
                let vtpcode = this.vtpass_code
                console.log(vtpcode);
                this.vtpassDiscoscodes.forEach(element => {
                    if (vtpcode == element.code) {
                        commission = element.commission
                        console.log(commission);
                    }
                });
            }
            console.log("commission", commission);
            let data = new FormData();
            data.append('name', this.name);
            data.append('shortname', this.shortname);
            data.append('vtpass_code', this.vtpass_code);
            data.append('vtpass_commission', commission);
            data.append('oneapp_code', this.oneapp_code);
            data.append('service_charge', this.service_charge);
            data.append('image', this.imageSent);
            data.append('icon', this.iconSent);
            data.append('color_code', this.color_code);

            const url = `${this.baseUrl}api/disco/add_disco.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.name = this.clubconnect_code = this.vtpass_code = this.imageSent = null;
                    await this.getAllDisco();
                    document.getElementById("_closedisco").click();
                    document.getElementById("input_file__").files = null;

                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        // window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async deletedisco(id) {
            let data = new FormData();
            data.append('disco_id', id);

            const url = `${this.baseUrl}api/meter/delete_disco.php`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text)
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async updateDisco() {
            // if (!this.discoDetails.name == null || !this.discoDetails.clubconnect_code == null || !this.discoDetails.oneapp_code == null ) {
            if (!this.discoDetails.name == null || !this.discoDetails.oneapp_code == null || !this.discoDetails.vtpass_code) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }
            //get commission from code
            let commission = '';
            if (this.discoDetails.vtpass_code) {
                let vtpcode = this.discoDetails.vtpass_code
                this.vtpassDiscoscodes.forEach(element => {
                    if (vtpcode == element.code) {
                        commission = element.commission
                    }
                });
            }
            console.log(commission);
            let data = new FormData();
            data.append('disco_id', this.discoDetails.id);
            data.append('name', this.discoDetails.disco_fullname);
            data.append('shortname', this.discoDetails.disconame);
            data.append('vtpass_code', this.discoDetails.vtpass_code);
            data.append('vtpass_commission', commission);
            data.append('oneapp_code', this.discoDetails.oneapp_code);
            data.append('service_charge', this.discoDetails.service_charge);
            data.append('color_code', this.discoDetails.color_code);
            if (this.imageSent) {
                data.append('image', this.imageSent);
            } else {
                data.append('image', this.discoDetails.image);
            }
            if (this.iconSent) {
                data.append('icon', this.iconSent);
            } else {
                data.append('icon', this.discoDetails.icon);
            }

            const url = `${this.baseUrl}api/disco/update_disco.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.name = this.clubconnect_code = this.vtpass_code = this.imageSent = null;
                    document.getElementById("__closeUpdateDisco").click();
                    await this.getAllDisco();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async fetchDiscoValues(load = 1) {

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/disco/fetch_disco_values.php`;
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.clubconnectcodes = response.data.data.clubconnectcodes;
                    this.vtpassDiscoscodes = response.data.data.vtpassDiscoscodes;
                    this.oneappcodes = response.data.data.oneappcodes;

                } else {
                    this.clubconnectcodes = null
                    this.oneappcodes = null
                    this.vtpassDiscoscodes = null;
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async changeDiscoStatus(id, status) {

            const url = `${this.baseUrl}/api/disco/change_disco_status.php?`;

            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('disco_id', id);
                data.append('status', status);
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this, this.swalToast("success", "Status Changed")
                        this.getAllDisco();
                    } else {
                        this.getAllDisco();
                    }
                } catch (error) {
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast('error', errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async deleteDisco(id) {
            const headers = {
                "Authorization": `Bearer ${this.token}`,
                // "Content-type": "application/json"
            }

            const data = new FormData();
            data.append('disco_id', id);

            let url = `${this.baseUrl}api/disco/delete_disco.php`;

            try {
                const response = await axios.post(url, data, { headers });
                if (response.data.status) {
                    this.success = response.data.text;
                    this.swalToast("success", this.success);
                    await this.getAllDisco();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getDiscoProfits(load = 1) {
            if (this.daily) {
                this.time_sort_value = "Daily";
            } else if (this.weekly) {
                this.time_sort_value = "Weekly";
            } else if (this.monthly) {
                this.time_sort_value = "Monthly";
            } else {
                this.time_sort_value = "All time";
            }

            let daily = (this.daily != null) ? `&sortDaily=1` : "";
            let weekly = (this.weekly != null) ? `&sortWeekly=1` : "";
            let monthly = (this.monthly) ? `&sortMonthly=1` : "";
            let noPerPage = (this.per_page) ? this.per_page : 10;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `${this.baseUrl}api/admin/discos/get_disco_analysis.php?noPerPage=${noPerPage}${daily}${weekly}${monthly}${limit}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.disco_Profits = response.data.data.profitData;
                    this.top_disco = response.data.data.topDisco
                } else {
                    this.disco_Profits = response.data.data.discos;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },

        //states
        async getStates(load = 1, per_page) {
            this.sort_status_value = (this.sort == 1) ? "-Active" : (this.sort == 0) ? "-Inactive" : "";
            let sort = (this.sort !== null) ? `&sortstatus=${this.sort}` : "";
            let search = (this.search) ? `&search=${this.search}` : '';
            let disco = (this.disco_id) ? `&disco_id=${this.disco_id}` : '';
            let state = (this.state_id) ? `&state_id=${this.state_id}` : '';
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (per_page) ? per_page : 20;
            const url = `${this.baseUrl}api/states/get_states.php?noPerPage=${noPerPage}&page=${page}${search}${state}${disco}${sort}`;
            // console.log('URL', url);
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.states = response.data.data.states;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.discos = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseurl}`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            } finally {
                this.loading = false;
            }
        },
        async addState() {
            // console.log("adding disco");
            if (!this.name || !this.disco_id) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }

            let data = new FormData();
            data.append('name', this.name);
            data.append('disco_id', this.disco_id);

            const url = `${this.baseUrl}api/states/add_state.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.name = this.disco_id = null;
                    await this.getStates();
                    document.getElementById("_closedisco").click();

                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        // window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async deleteState(id) {
            let data = new FormData();
            data.append('state_id', id);

            const url = `${this.baseUrl}api/states/delete_state.php`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    await this.getStates()
                    this.swalToast("success", response.data.text)
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async updateState() {
            // if (!this.discoDetails.name == null || !this.discoDetails.clubconnect_code == null || !this.discoDetails.oneapp_code == null ) {
            if (!this.stateDetails.name == null || !this.stateDetails.disco_id == null || !this.stateDetails.state_id) {
                this.swalToast("error", "Kindly fill all fields")
                return
            }

            let data = new FormData();
            data.append('disco_id', this.stateDetails.id);
            data.append('name', this.stateDetails.name);
            data.append('state_id', this.stateDetails.state_id);
            const url = `${this.baseUrl}api/state/update_disco.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.name = this.clubconnect_code = this.vtpass_code = this.imageSent = null;
                    document.getElementById("__closeUpdateDisco").click();
                    await this.getStates();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async changeStateStatus(id, status) {
            console.log("dis_id", id);

            const url = `${this.baseUrl}/api/states/change_state_status.php?`;

            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('state_id', id);
                data.append('status', status);
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this, this.swalToast("success", "Status Changed")
                        this.getStates();
                    } else {
                        this.getStates();
                    }
                } catch (error) {
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast('error', errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast('error', errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        //Adverts
        async getAllAdvert(load = 1, showToast = 1) {
            const url = `adverts/get_all_ads.php`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {
                if ( !successData ){
                    return;
                }
                this.adverts = successData.adverts;
            }, showToast);

        },

        async addAdvert() {
            let data = {
                "type" : this.name,
                "giff" : this.imageSent,
                "url" : this.advertUrl,
                "advert_text" : this.advertText
            }

            const url = `adverts/add_adverts.php    `;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllAdvert(1,2);
                    document.getElementById("close-modal").click();
                    this.name = this.imageSent = this.advertUrl = this.advertText = null;
                } 
            }, 2);
        },

        async changeAdvertStatus(id, status) {
            let data = {
                "trackid" : id,
                "status" : status,
            }

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            };
            
            
            const url = `adverts/change_status.php`;
            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllAdvert(1,2);
                } 
            }, 2);

        },
        async updateAdvert() {
            let data = {
                "type" : this.itemDetails.type,
                "giff" : this.itemDetails.gif,
                "url" : this.itemDetails.url,
                "advert_text" : this.itemDetails.advert_text,
                "trackid": this.itemDetails.trackid,
            }

            const url = `adverts/update_adverts.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllAdvert(1,2);
                    document.getElementById("close-modal").click();
                    this.itemDetails.type = this.itemDetails.gif = this.itemDetails.url = this.itemDetails.advert_text = null;
                } 
            }, 2);
        },
    
        async deleteAdverts(id) {
            const data = {
                'trackid': id
            }
            let url = `adverts/delete_adverts.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllAdvert(1,2);
                } 
            }, 2);
        },

        //......3rd party API
        //monify
        async getAllMonify(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 5;
            const url = `${this.baseUrl}api/third_party_api/monnify/getMonifyApi.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.monifys = response.data.data.monifys;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    //console.log("APiMonify", response.data.data.monifys);
                } else {
                    this.monifys = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addMonify() {
            console.log({
                wallet: this.apiWallet,
                apiAccno: this.apiAccno,
                apiKey: this.apiKey,
                apiName: this.apiName,
                secretKey: this.secretKey,
                MonifyUrl: this.MonifyUrl,
            });
            if (this.apiWallet == null || this.apiAccno == null || this.apiKey == null || this.apiName == null || this.secretKey == null || this.MonifyUrl == null) {
                this.swalToast("error", "Kindly fill all fields");
                return;
            }

            let data = new FormData();
            data.append('apiKey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteKey', this.secretKey);
            data.append('baseurl', this.MonifyUrl);
            data.append('apiWallet', this.apiWallet);
            data.append('apiAccno', this.apiAccno);

            const url = `${this.baseUrl}api/third_party_api/monnify/addMonifyApi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllMonify();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            } finally {
                this.loading = false;
            }

        },
        async deleteMonify(id) {
            const url = `${this.baseUrl}api/third_party_api/monnify/deleteMonifyApi.php?id=${id}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllMonify();
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async changeMonifyStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/monnify/changeMonifyApiStatus.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllMonify();
                    } else {
                        this.getAllMonify();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateMonify() {
            if (this.monify_details.apiwallet == null || this.monify_details.apiaccno == null || this.monify_details.apikey == null || this.monify_details.name == null || this.monify_details.secretekey == null || this.monify_details.url == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('id', this.monify_details.id);
                data.append('apikey', this.monify_details.apikey);
                data.append('name', this.monify_details.name);
                data.append('secretkey', this.monify_details.secretekey);
                data.append('apiwallet', this.monify_details.apiwallet);
                data.append('apiaccno', this.monify_details.apiaccno);
                data.append('baseurl', this.monify_details.url);


                const url = `${this.baseUrl}api/third_party_api/monnify/updateMonifyApi.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getAllMonify();
                        this.swalToast("success", response.data.text);

                    }
                } catch (error) {
                    ////console.log(error);
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                } finally {
                    this.loading = false;
                }
            }

        },

        //paystack
        async getAllPaystack(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/paystack/get_paystack_api.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            this.payStack_details = this.apiName = this.apikey = this.secretKey = null
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.payStacks = response.data.data.payStacks;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    //console.log("ApiPayStacks", response.data.data.payStacks);
                } else {
                    this.payStacks = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addPayStack() {
            if (this.apiKey == null || this.apiName == null || this.secretKey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('apiKey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteKey', this.secretKey);

            const url = `${this.baseUrl}api/third_party_api/paystack/add_pay_stackapi.php`;
            //console.log("URL", url);

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllPaystack();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deletePaystack(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/paystack/delete_paystackapi.php?id=${id}`;

            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllPaystack();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changePaystackStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/paystack/change_paystack_api_status.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllPaystack();
                    } else {
                        this.getAllPaystack();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updatePayStack() {
            if (this.payStack_details.apikey == null || this.payStack_details.name == null || this.payStack_details.secretekey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('id', this.payStack_details.id);
            data.append('apikey', this.payStack_details.apikey);
            data.append('name', this.payStack_details.name);
            data.append('secretekey', this.payStack_details.secretekey);

            const url = `${this.baseUrl}api/third_party_api/paystack/update_paystackapi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllPaystack();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },

        //vtpass
        async getAllVtpass(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/vtpass/get_vtpass.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                this.apiName = this.apiKey = this.secretKey = this.vtpass_details = null;
                const response = await axios(options);
                if (response.data.status) {
                    this.vtPass = response.data.data.vtPass;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.vtPass = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addVtPass() {
            if (this.apiKey == null || this.apiName == null || this.secretKey == null || this.vtpasss_url == null || this.publicKey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('apiKey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteKey', this.secretKey);
            data.append('publickey', this.publicKey);
            data.append('baseurl', this.vtpasss_url);

            const url = `${this.baseUrl}api/third_party_api/vtpass/add_vtpass.php`;
            //console.log("URL", url);

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllVtpass();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteVtPass(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/vtpass/delete_vtpass.php?id=${id}`;

            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllVtpass();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeVtpassStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/vtpass/change_vtpass_status.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllVtpass();
                    } else {
                        this.getAllVtpass();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateVtpass() {
            if (this.vtpass_details.apikey == null || this.vtpass_details.name == null || this.vtpass_details.secretekey == null || this.vtpass_details.baseurl == null || this.vtpass_details.publickey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('id', this.vtpass_details.id);
            data.append('apikey', this.vtpass_details.apikey);
            data.append('name', this.vtpass_details.name);
            data.append('secretekey', this.vtpass_details.secretekey);
            data.append('baseurl', this.vtpass_details.baseurl);
            data.append('publickey', this.vtpass_details.publickey);

            const url = `${this.baseUrl}api/third_party_api/vtpass/update_vtpass.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllVtpass();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },


        //oneapp
        async getAllOneApp(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/oneapp/get_all_oneapp.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                this.apiName = this.apiKey = this.secretKey = null;
                const response = await axios(options);
                if (response.data.status) {
                    this.oneApps = response.data.data.oneApps;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.oneApps = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addOneApp() {
            if (this.apiKey == null || this.apiName == null || this.secretKey == null || !this.vendFlatRate) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('apiKey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteKey', this.secretKey);
            data.append('vendFlatRate', this.vendFlatRate);

            const url = `${this.baseUrl}api/third_party_api/oneapp/add_oneapp.php`;
            //console.log("URL", url);

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllOneApp();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteOneApp(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/oneapp/delete_oneapp.php?id=${id}`;

            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllOneApp();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeOneAppStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/oneapp/change_oneapp_status.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllOneApp();
                    } else {
                        this.getAllOneApp();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateOneapp() {
            if (this.oneapp_details.apikey == null || this.oneapp_details.name == null || this.oneapp_details.secretekey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('id', this.oneapp_details.id);
            data.append('apikey', this.oneapp_details.apikey);
            data.append('name', this.oneapp_details.name);
            data.append('secretekey', this.oneapp_details.secretekey);
            data.append('vendFlatRate', this.oneapp_details.vend_flat_rate);

            const url = `${this.baseUrl}api/third_party_api/oneapp/update_oneapp.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllOneApp();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },

        //Clubkonnect
        async getAllClubKonnect(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/clubkonnect/get_all_clubkonect.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                this.apiName = this.apiKey = this.secretKey = this.vtpass_details = null;
                const response = await axios(options);
                if (response.data.status) {
                    this.clubkonnects = response.data.data.clubkonnects;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.clubkonnects = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addClubkonnect() {
            if (this.apiKey == null || this.apiName == null || this.secretKey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('apiKey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteKey', this.secretKey);

            const url = `${this.baseUrl}api/third_party_api/clubkonnect/add_clubkonnect.php`;
            //console.log("URL", url);

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllClubKonnect(2);
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteClubkonnect(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/clubkonnect/delete_clubkonnect.php?id=${id}`;

            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllClubKonnect(2);
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeClubkonnectStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/clubkonnect/change_clubkonnect_status.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllClubKonnect(2);
                    } else {
                        this.getAllClubKonnect(2);
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateClubkonnect() {
            if (this.clubkonnects_details.apikey == null || this.clubkonnects_details.name == null || this.clubkonnects_details.secretekey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('id', this.clubkonnects_details.id);
            data.append('apikey', this.clubkonnects_details.apikey);
            data.append('name', this.clubkonnects_details.name);
            data.append('secretekey', this.clubkonnects_details.secretekey);

            const url = `${this.baseUrl}api/third_party_api/clubkonnect/update_clubkonnect.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllClubKonnect(2);
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },

        //Kudi api
        async getAllKudi(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            let url = `${this.baseUrl}api/third_party_api/kudi/getKudiApi.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            //console.log('KudiUrl', url);
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.kudis = response.data.data.kudis;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    //console.log("ApiKudis", response.data.data.kudis);
                } else {
                    this.kudis = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getKudiByid(id) {
            //console.log("KudiID", id);
            const url = `${this.baseUrl}api/third_party_api/kudi/getKudiApiByid.php?id=${id}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                this.loading = true
                const response = await axios(options);
                if (response.data.status) {
                    this.kudi_details = response.data.data;
                    //console.log('DOKudi_details', this.kudi_details);
                    //console.log("DOKudi_details.name", this.kudi_details.name);
                } else {
                    this.swalToast("error", response.data.text);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                } else {
                    this.swalToast("error", error.message || "Error processing request");
                }

            } finally {
                this.loading = false;
            }
        },
        async addKudi() {
            if (this.apiKey == null || this.apiName == null || this.secretKey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('sendFrom', this.sendFrom);
            data.append('name', this.apiName);
            data.append('username', this.apiUsername);
            data.append('password', this.apiPassword);

            const url = `${this.baseUrl}api/third_party_api/kudi/addKudiApi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllKudi();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteKudi(id) {

            const url = `${this.baseUrl}api/third_party_api/kudi/deleteKudiApi.php?id=${id}`;

            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllKudi();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeKudiStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/kudi/changeKudiApiStatus.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed");
                        this.getAllKudi();
                    } else {
                        this.getAllKudi();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateKudi() {

            if (this.kudi_details.id == null || this.kudi_details.sendfrom == null || this.kudi_details.name == null || this.kudi_details.username == null || this.kudi_details.password == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('id', this.kudi_details.id);
                data.append('sendFrom', this.kudi_details.sendfrom);
                data.append('name', this.kudi_details.name);
                data.append('username', this.kudi_details.username);
                data.append('password', this.kudi_details.password);

                const url = `${this.baseUrl}api/third_party_api/kudi/updateKudiApi.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getAllKudi();
                        this.swalToast("success", response.data.text);

                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }
            }

        },


        //sendgrid
        async getAllSendGrid(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/sendgrid/getAllSendGrid.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            //console.log("sendgrid url", url);
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                this.sendGrid_details = this.sendFrom = this.apikey = this.secretKey = this.apiName = null;
                const response = await axios(options);
                if (response.data.status) {
                    this.sendGrids = response.data.data.details;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    //console.log("APIsendGrids", response.data.data.details);
                } else {
                    this.sendGrids = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getSendGridByid(id) {
            //console.log("snedGrid", id);
            const url = `${this.baseUrl}api/third_party_api/sendgrid/getSendGridByID.php?id=${id}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                this.sendFrom = this.sendGrid_details = this.apiKey = this.secretKey = null;
                this.loading = true
                const response = await axios(options);
                if (response.data.status) {
                    this.sendGrid_details = response.data.data;
                    //console.log('DOSendGrid',this.sendGrid_details);
                    //console.log("APISendGrid", response.data.data);
                } else {
                    this.swalToast("error", response.data.text);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                } else {
                    this.swalToast("error", error.message || "Error processing request");
                }

            } finally {
                this.loading = false;
            }
        },
        async addSendGrid() {
            if (this.sendFrom == null || this.apiKey == null || this.apiName == null || this.secretKey == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('sender', this.sendFrom);
            data.append('apikey', this.apiKey);
            data.append('name', this.apiName);
            data.append('secreteid', this.secretKey);

            const url = `${this.baseUrl}api/third_party_api/sendgrid/addSendGridApi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getAllSendGrid();
                    this.swalToast("success", response.data.text);
                    document.getElementById('addmodal_close').click();

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteSendGrid(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/sendgrid/deleteSendGrid.php?`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllSendGrid();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeSendGridStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/sendgrid/change_sendgrid_api_status.php`;
            //console.log('URL', url);
            //console.log("id", id);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('api_id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllSendGrid();
                    } else {
                        this.getAllSendGrid();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateSendGrid() {
            if (this.sendGrid_details.id == null || this.sendGrid_details.email_from == null || this.sendGrid_details.api_key == null || this.sendGrid_details.name == null || this.sendGrid_details.secret_id == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('send_grid_id', this.sendGrid_details.id);
                data.append('sender', this.sendGrid_details.email_from);
                data.append('apikey', this.sendGrid_details.api_key);
                data.append('name', this.sendGrid_details.name);
                data.append('secret_id', this.sendGrid_details.secret_id);

                const url = `${this.baseUrl}api/third_party_api/sendgrid/updateSendGridApi.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getAllSendGrid();
                        this.swalToast("success", response.data.text);
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }
            }

        },

        // discount
        async addDiscountCode() {  
            let data = {
                "code" : this.code,
                "discount_type" : this.discount_type,
                "amount" : this.amount,
            }
            const url = `discount/add_discount.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            };

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    console.log("being called");
                    await this.getAllDiscount();
                    document.getElementById("discount-close").click();
                    this.code = this.discount_type = this.amount = null;
                } 
            }, 2);
        },

        async changeDiscountStatus(id, status) {
            const url = `${this.baseUrl}api/discountcode/change_discount_status.php?`;
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('discount_code_id', id);
                data.append('status', status);

                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllDiscount(2);
                    } else {
                        this.getAllDiscount(2);
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },

        async getAllDiscount() {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sortstatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `discount/get_discount.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {
                if ( !successData ){
                    return;
                }
                this.discounts = successData.discount;
                this.currentPage = successData.page;
                this.totalData = successData.total_data;
                this.totalPage = successData.totalPage;
            }, 1);
        },

        async updateDiscount() {
            let data = {
                "code" : this.discount_details.discount_code,
                "discount_code_id" : this.discount_details.id,
                "amount" : this.discount_details.amount,
                "discount_type": this.discount_details.discount_type
            }

            const url = `discount/update_discount.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            };

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllDiscount();
                    this.discount_details.discount_code = this.discount_details.discount_code_id = this.discount_details.amount = null;
                } 
            }, 2); 
        },

        async deleteDiscount(id) {
            const data = {
                'id': id
            }

            const url = `discount/delete_discount.php?`;

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-type": "application/json"
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllDiscount();
                } 
            }, 2);
        },

        //SmartSMS
        async getAllSmartSolution(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=1&sortStatus=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 4;
            const url = `${this.baseUrl}api/third_party_api/smart_solution/getAllSmartSolutions.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.smartSolutions = response.data.data.smart;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    //console.log("APIsmartsms", response.data.data.smart);
                } else {
                    this.smartSolutions = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getSmartSolutionByid(id) {
            //console.log("snedGrid", id);
            const url = `${this.baseUrl}api/third_party_api/smart_solution/getSmartSolutionsById.php?smart_id=${id}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                this.loading = true
                const response = await axios(options);
                if (response.data.status) {
                    this.smartSolution_details = response.data.data;
                    //console.log(response.data.data);
                } else {
                    this.swalToast("error", response.data.text);
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                } else {
                    this.swalToast("error", error.message || "Error processing request");
                }

            } finally {
                this.loading = false;
            }
        },
        async addSmartSolution() {
            if (this.sendFrom == null || this.apiToken == null || this.apiName == null || this.sendType == null || this.routing == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('sender', this.sendFrom);
                data.append('apitoken', this.apiToken);
                data.append('name', this.apiName);
                data.append('sendtype', this.sendType);
                data.append('routing', this.routing);

                const url = `${this.baseUrl}api/third_party_api/smart_solution/addSmartSolutionsApi.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getAllSmartSolution();
                        this.swalToast("success", response.data.text);

                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }
            }

        },
        async deleteSmartSolution(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/smart_solution/deleteSmartSolutions.php?`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getAllSmartSolution();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeSmartSolutionStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/smart_solution/set_active_smart.php`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('smart_id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getAllSmartSolution();
                    } else {
                        this.getAllSmartSolution();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateSmartSolution() {
            //console.log("sendtype", this.smartSolution_details.sendtype);
            if (this.smartSolution_details.id == null || this.smartSolution_details.sendFrom == null || this.smartSolution_details.apiToken == null || this.smartSolution_details.name == null || this.smartSolution_details.sendtype == null || this.smartSolution_details.routing == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('smart_id', this.smartSolution_details.id);
                data.append('sender', this.smartSolution_details.sendFrom);
                data.append('apitoken', this.smartSolution_details.apiToken);
                data.append('name', this.smartSolution_details.name);
                data.append('sendtype', this.smartSolution_details.sendtype);
                data.append('routing', this.smartSolution_details.routing);

                const url = `${this.baseUrl}api/third_party_api/smart_solution/updateSmartSolutionsApi.php`;
                //console.log("URL", url);

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getAllSmartSolution();
                        this.swalToast("success", response.data.text);

                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }
            }

        },


        //TermiApi
        async getTermiApi(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 10;
            const url = `${this.baseUrl}api/third_party_api/termi/getAllTermiTable.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }

                this.termiApi_details = this.smsChannel = this.smsType = this.apikey = this.sendFrom = this.apiName = null
                const response = await axios(options);
                if (response.data.status) {
                    this.termiApis = response.data.data.termi;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.termiApis = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addTermiApi() {
            // console.log(this.apiKey);
            if (this.sendFrom == null || !this.apiKey || this.apiName == null || this.smsType == null || this.smsChannel == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('sender', this.sendFrom);
            data.append('apikey', this.apiKey);
            data.append('name', this.apiName);
            data.append('smstype', this.smsType);
            data.append('smschannel', this.smsChannel);

            const url = `${this.baseUrl}api/third_party_api/termi/addTermiApi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getTermiApi();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteTermiApi(id) {
            let data = new FormData();
            data.append('termi_id', id);

            const url = `${this.baseUrl}api/third_party_api/termi/deleteTermiApi.php?`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getTermiApi();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },
        async changeTermiStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/termi/setActiveTermi.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('termi_id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getTermiApi();
                    } else {
                        this.getTermiApi();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateTermiApi() {
            if (this.termiApi_details.sendFrom == null || this.termiApi_details.id == null || this.termiApi_details.name == null || this.termiApi_details.smstype == null || this.termiApi_details.smschannel == null) {
                this.swalToast("error", "Kindly fill all fields")
            } else {

                let data = new FormData();
                data.append('termi_id', this.termiApi_details.id);
                data.append('sender', this.termiApi_details.sendFrom);
                data.append('apikey', this.termiApi_details.apikey);
                data.append('name', this.termiApi_details.name);
                data.append('smstype', this.termiApi_details.smstype);
                data.append('smschannel', this.termiApi_details.smschannel);

                const url = `${this.baseUrl}api/third_party_api/termi/updateTermiApi.php`;

                const options = {
                    method: "POST",
                    data,
                    url,
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    }
                }

                try {
                    this.loading = true;
                    const response = await axios(options);
                    if (response.data.status) {
                        await this.getTermiApi();
                        this.swalToast("success", response.data.text);

                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }
            }

        },
        async deleteByid(id) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {

                    if (webPage == 'monify.php') {
                        this.deleteMonify(id)
                    }
                    if (webPage == 'paystack.php') {
                        this.deletePaystack(id)
                    }

                    if (webPage == 'vtpass.php') {
                        this.deleteVtPass(id)
                    }

                    if (webPage == 'kudi.php') {
                        this.deleteKudi(id);
                    }
                    if (webPage == 'smartsolution.php') {
                        this.deleteSmartSolution(id);
                    }
                    if (webPage == 'sendgrid.php') {
                        this.deleteSendGrid(id)
                    }

                    if (webPage == 'termiapi.php') {
                        this.deleteTermiApi(id);
                    }

                    if (webPage == 'simpu.php') {
                        this.deleteSimpuApi(id)
                    }

                    if (webPage == 'clubkonnect.php') {
                        this.deleteClubkonnect(id);
                    }

                    if (webPage == 'cupons.php' || webPage == 'cupons') {
                        this.deleteCoupon(id)
                    }

                    if (webPage === 'discos.php' || webPage === 'discos') {
                        this.deleteDisco(id)
                    }
                    if (webPage === 'states.php' || webPage === 'states') {
                        this.deleteState(id)
                    }

                    if (webPage === 'advertise.php' || webPage === 'advertise') {
                        this.deleteAdverts(id)
                    }

                    if (webPage === 'disco.php' || webPage === 'disco') {
                        this.deleteDisco(id)
                    }
                    if (webPage === 'discount.php' || webPage === 'discount') {
                        this.deleteDiscount(id)
                    }

                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Record deleted succesfully.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Record not deleted',
                        'error'
                    )
                }
            })

        },
        async getAllTransactions(load = 1) {

            if (this.sortDiscos) {
                this.getDiscoName();
            } else {
                this.discoValue = "";
            }
            // Status Values
            if (this.sort == 1) {
                this.sortValue = "Successful";
            } else if (this.sort == 2) {
                this.sortValue = "Failed";
            } else if (this.sort == 3) {
                this.sortValue = "Cancelled";
            } else if (this.sort == 4) {
                this.sortValue = "Incomplete";
            } else if (this.sort == 0) {
                this.sortValue = "Pending";
            } else {
                this.sortValue = "";
            }

            // Transaction value
            if (this.trans_type == 1) {
                this.trans_val = "Light Purchase";
            } else if (this.trans_type == 2) {
                this.trans_val = "Fund Wallet";
            } else {
                this.trans_val = "";
            }

            // payment value
            if (this.payment_type == 1) {
                this.pay_value = "Card";
            } else if (this.payment_type == 2) {
                this.pay_value = "Wallet";
            } else if (this.payment_type == 3) {
                this.pay_value = "Bank Transfer";
            } else {
                this.pay_value = "";
            }


            let disco_id = (this.sortDiscos) ? `&discoid=${this.sortDiscos}` : ''

            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sortStatus=${this.sort}` : "";
            let trans_type = (this.trans_type != null) ? `&sortTransType=${this.trans_type}` : "";
            let payment_type = (this.payment_type != null) ? `&sortPaymentType=${this.payment_type}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 10;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `${this.baseUrl}api/admin/transactions/get_all_transactions.php?noPerPage=${noPerPage}&page=${page}${search}${sort}${trans_type}${payment_type}${disco_id}${limit}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.transactions = response.data.data.transactions;
                    this.total_transactions = response.data.data.total_data;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                    this.totalExportPage = response.data.data.totalExportPage;
                } else {
                    this.transactions = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },

        async getTopProductOrdered(load = 1) {
            if (this.daily) {
                this.time_sort_value = "Daily";
            } else if (this.weekly) {
                this.time_sort_value = "Weekly";
            } else if (this.monthly) {
                this.time_sort_value = "Monthly";
            } else {
                this.time_sort_value = "All time";
            }

            let daily = (this.daily != null) ? `&sortDaily=1` : "";
            let weekly = (this.weekly != null) ? `&sortWeekly=1` : "";
            let monthly = (this.monthly) ? `&sortMonthly=1` : "";
            let noPerPage = (this.per_page) ? this.per_page : 10;
            const url = `${this.baseUrl}api/disco/topDiscoOrdered.php?noPerPage=${noPerPage}${daily}${weekly}${monthly}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status) {
                    this.top_product_ordered = response.data.data.discos;
                } else {
                    this.top_product_ordered = response.data.data.discos;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getAllStats(load = 1) {
            const url = `${this.baseUrl}api/statistics/get_allstore_statistics.php`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }
                const response = await axios(options);
                if (response.data.status && response.data.data) {
                    this.total_transactions = response.data.data.total_transactions;
                    this.total_successful_transactions = response.data.data.total_successful_transactions;
                    this.total_pending_transactions = response.data.data.total_pending_transactions;
                    this.total_failed_transactions = response.data.data.total_failed_transactions;
                    this.total_customers = response.data.data.total_customers;
                    this.total_discos = response.data.data.total_discos;
                    this.bar_chart_data = response.data.data.chart_data;
                    orderStatistics = {
                        labels: ["Completed", "Processing", "Failed"],
                        dataUnit: 'Transactions',
                        legend: false,
                        datasets: [{
                            borderColor: "#fff",
                            background: ["#816bff", "#13c9f2", "#ff82b7"],
                            data: this.bar_chart_data
                        }]
                    };
                    await this.getFinancialSummary();
                } else {
                    this.top_product_ordered = null;
                    this.top_product_ordered = null;
                    this.top_product_ordered = null;
                    this.top_product_ordered = null;
                    this.top_product_ordered = null;
                    this.bar_chart_data = [0, 0, 0];
                    orderStatistics = {
                        labels: ["Completed", "Processing", "Failed"],
                        dataUnit: 'Transactions',
                        legend: false,
                        datasets: [{
                            borderColor: "#fff",
                            background: ["#816bff", "#13c9f2", "#ff82b7"],
                            data: this.bar_chart_data
                        }]
                    };
                    await this.getFinancialSummary();
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async getFinancialSummary() {
            let sort = (this.sort !== null) ? `sortstatus=1` : "";
            let month = (this.sortmonth) ? `&sortmonth=${this.sortmonth}` : "";
            let year = (this.sortyear) ? `&sortyear=${this.sortyear}` : "";
            const url = `${this.baseUrl}/api/statistics/financial_summary.php?${sort}${month}${year}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                this.loading = true;
                this.financialStatistics = null;
                this.incomeChart = null;
                this.expenseChart = null;
                this.chartcategory = null;
                const response = await axios(options);
                if (response.data.status && response.data.data) {
                    this.financialStatistics = response.data.data
                    this.failledOrderChartData = this.financialStatistics.failledOrderChartData
                    this.successOrderChartData = this.financialStatistics.successOrderChartData
                    this.chartcategory = this.financialStatistics.category
                    this.yearMonth = this.financialStatistics.monthyear
                    this.startdate = this.financialStatistics.startdate
                    this.enddate = this.financialStatistics.enddate
                    salesStatistics = {
                        labels: this.chartcategory,
                        dataUnit: 'Transactions',
                        lineTension: .4,
                        datasets: [{
                            label: "Total Transactions",
                            color: "#4cbf00",
                            dash: 0,
                            background: NioApp.hexRGB('#4cbf00', .15),
                            data: this.successOrderChartData
                        }, {
                            label: "Failed Transactions",
                            color: "#eb6459",
                            dash: [5],
                            background: "transparent",
                            data: this.failledOrderChartData
                        }]
                    };
                } else {
                    this.financialStatistics = null;
                    this.incomeChart = null;
                    this.expenseChart = null;
                    this.chartcategory = null;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }
                this.swalToast("error", this.error || "Error processing request")


            } finally {
                this.loading = false;
            }
        },

        //SimpuSms
        async getSimpuApi(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : '';
            let sort = (this.sort != null) ? `&sort=${this.sort}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let noPerPage = (this.per_page) ? this.per_page : 10;
            const url = `${this.baseUrl}api/third_party_api/Simpu/getAllSimpuTable.php?noPerPage=${noPerPage}&page=${page}${search}${sort}`;
            const options = {
                method: "GET",
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                if (load == 1) {
                    this.loading = true;
                }

                // this.termiApi_details = this.smsChannel = this.smsType = this.apikey = this.sendFrom = this.apiName = null

                const response = await axios(options);
                if (response.data.status) {
                    this.simpuApis = response.data.data.simpu;
                    this.currentPage = response.data.data.page;
                    this.totalData = response.data.data.total_data;
                    this.totalPage = response.data.data.totalPage;
                } else {
                    this.simpuApis = null;
                    this.currentPage = 0;
                    this.totalData = 0;
                    this.totalPage = 0;
                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }
        },
        async addSimpuApi() {
            if (this.secret_key == null || this.channel_id == null || this.public_key == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('secret_key', this.secret_key);
            data.append('public_key', this.public_key);
            data.append('channel_id', this.channel_id);

            const url = `${this.baseUrl}api/third_party_api/simpu/addSimpuApi.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.secret_key = this.public_key = this.channel_id = null;
                    await this.getSimpuApi();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }

        },
        async deleteSimpuApi(id) {
            let data = new FormData();
            data.append('id', id);

            const url = `${this.baseUrl}api/third_party_api/simpu/deleteSimpu.php?`;

            const options = {
                method: "POST",
                data: data,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                url
            }
            try {
                const response = await axios(options);
                if (response.data.status) {
                    this.getSimpuApi();
                }
            } catch (error) {
                ////console.log(error);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            }
        },

        async changeSimpleStatus(id) {
            const url = `${this.baseUrl}api/third_party_api/simpu/change_status.php?`;
            //console.log('URL', url);
            if (!id) {
                this.swalToast("error", "undefined")
            } else {
                const data = new FormData();
                data.append('id', id);;
                const options = {
                    method: "POST",
                    headers: {
                        //"Content-type": "application/json",
                        "Authorization": `Bearer ${this.token}`
                    },
                    data,
                    url
                }
                try {
                    this.loading = true
                    const response = await axios(options);
                    if (response.data.status) {
                        this.swalToast("success", "Status Changed")
                        this.getSimpuApi();
                    } else {
                        this.getSimpuApi();
                    }
                } catch (error) {
                    // //console.log(error);
                    if (error.response) {
                        if (error.response.status == 400) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 401) {
                            const errorMsg = "User not Authorized";
                            this.swalToast("error", errorMsg);
                            window.location = `${this.baseUrl}admin/login.php`;
                            return
                        }

                        if (error.response.status == 405) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }

                        if (error.response.status == 500) {
                            const errorMsg = error.response.data.text;
                            this.swalToast("error", errorMsg);
                            return
                        }
                    }

                    this.swalToast("error", error.message || "Error processing request")


                } finally {
                    this.loading = false;
                }

            }

        },
        async updateSimpleApi() {
            if (this.simpuApiDetails.secret_key == null || this.simpuApiDetails.channel_id == null || this.simpuApiDetails.public_key == null) {
                this.swalToast("error", "Kindly fill all fields")
            }

            let data = new FormData();
            data.append('id', this.simpuApiDetails.id);
            data.append('secret_key', this.simpuApiDetails.secret_key);
            data.append('public_key', this.simpuApiDetails.public_key);
            data.append('channel_id', this.simpuApiDetails.channel_id);

            const url = `${this.baseUrl}api/third_party_api/simpu/updateSimpu.php`;

            const options = {
                method: "POST",
                data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }

            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    await this.getSimpuApi();
                    this.swalToast("success", response.data.text);

                }
            } catch (error) {
                // //console.log(error);
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },

        // sytem setting
        async getImages() {
            let page = (this.user_currentPage) ? this.user_currentPage : 1;


            const headers = {
                "Authorization": `Bearer ${this.token}`,
                // "Content-type": "application/json"
            }

            let url = `${this.baseUrl}api/system_details/getImages.php?page=${page}`;

            this.totalPage = null
            try {
                this.loading = true;

                const response = await axios.get(url, { headers });
                if (response.data.status) {
                    this.images = response.data.data;
                } else {
                    this.user_currentPage = null;
                    this.logo = null
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 401) {
                        this.error = "User not Authorized";
                        this.swalToast("error", this.error);
                        window.location = `${this.baseurl}login.php`;
                        return
                    }

                    if (error.response.status == 405) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }

                    if (error.response.status == 500) {
                        this.error = error.response.data.text;
                        this.swalToast("error", this.error);
                        return
                    }
                }

                this.error = error.message || "Error Processing Request"
                this.swalToast("error", this.error);

            } finally {
                this.loading = false;
            }

        },
        async getDiscoName() {
            if (this.discos) {
                this.discos.forEach((element) => {
                    if (element.id == this.sortDiscos) {
                        this.discoValue = element.disconame
                    }
                })
            }

        },
        async revend(id) {

            let data = new FormData();
            data.append('transaction_id', id);

            const url = `${this.baseUrl}api/meter/re_vend_meter.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.getAllTransactions(3);
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        async requey(id) {

            let data = new FormData();
            data.append('transaction_id', id);

            const url = `${this.baseUrl}api/transactions/requery_vend_trans.php`;

            const options = {
                method: "POST",
                data: data,
                url,
                headers: {
                    //"Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.getAllTransactions(3);
                }
            } catch (error) {
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 401) {
                    const errorMsg = "User not Authorized";
                    this.swalToast("error", errorMsg);
                    window.location = `${this.baseUrl}admin/login.php`;

                    this.token = null;
                    return
                }

                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }

                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    this.swalToast("error", errorMsg);
                    return
                }
            } finally {
                this.loading = false;
            }


        },
        async verifyVendTransaction(id) {

            const url = `${this.baseUrl}api/meter/verify_vending.php?trans_ref=${id}`;

            const options = {
                method: "GET",
                url,
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                }
            }
            try {
                this.loading = true;
                const response = await axios(options);
                if (response.data.status) {
                    this.swalToast("success", response.data.text);
                    this.getAllTransactions(3);
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 400) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 401) {
                        const errorMsg = "User not Authorized";
                        this.swalToast("error", errorMsg);
                        window.location = `${this.baseUrl}admin/login.php`;

                        this.token = null;
                        return
                    }

                    if (error.response.status == 405) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }

                    if (error.response.status == 500) {
                        const errorMsg = error.response.data.text;
                        this.swalToast("error", errorMsg);
                        return
                    }
                }

                this.swalToast("error", error.message || "Error processing request")


            } finally {
                this.loading = false;
            }


        },
        gotoPage(page) {
            window.location = `${this.baseUrl}admin/${page}`;
            // window.location.href=`print.php`
        },


    },
    async beforeMount() {
        // this.getImages();
        this.pathname = window.location.href;
        if (!webPage.includes("staff-login.php") && !webPage.includes("staff-login")) {
            window.localStorage.setItem("ChildVilleCurrentPage", webPage);
            this.loading = true;
            this.getToken();
            console.log("Token", this.token);
            this.getAdminDetails();
            if (!this.token) {
                window.location = `${this.baseUrl}staff-login.php`;
            }
        }

        if (webPage === 'index.php' || webPage === 'index' || webPage === '') {
            // await this.getAllStats();
        }
    },
    async mounted() {
        // this.generalFunctions.Toastinator("success", "Toast Working");
        if (webPage === 'index.php' || webPage === 'index' || webPage === '') {
            this.per_page = 5
            this.limit = 5
            this.getAllTransactions();
            this.getDiscoProfits();
            this.getAllUsers()
            // this.getTopProductOrdered();
        }

        if (webPage === 'discos.php' || webPage === 'discos') {
            this.getAllDisco();
            this.fetchDiscoValues();
        }

        if (webPage === 'paystack.php' || webPage === 'paystack') {
            this.getAllPaystack();
        }

        if (webPage === 'sendgrid.php' || webPage === 'sendgrid') {
            this.getAllSendGrid();
        }
        if (webPage === 'discount.php' || webPage === 'discount') {
            this.getAllDiscount();
        }

        if (webPage === 'vtpass.php' || webPage === 'vtpass') {
            this.getAllVtpass();
        }

        if (webPage === 'termiapi.php' || webPage === 'termiapi') {
            this.getTermiApi();
        }
        if (webPage === 'simpu.php' || webPage === 'simpu') {
            this.getSimpuApi();
        }
        if (webPage === 'monify.php' || webPage === 'monify') {
            this.getAllMonify();
        }

        if (webPage === 'advertise.php' || webPage === 'advertise') {
            this.getAllAdvert(1, 2);
        }


        if (webPage === 'meter.php' || webPage === 'meter') {
            this.getAllMeter();
        }

        if (webPage === 'states.php' || webPage === 'states') {
            await this.getAllDisco(2)
            await this.getStates();
        }
        if (webPage === 'cashback.php' || webPage === 'cashback') {
            this.getAllCashBack();
        }


        if (webPage === 'users.php' || webPage === 'users') {
            await this.getAllUsers();
        }

        if (webPage === 'users_meter.php' || webPage === 'users_meter') {
            await this.getUserMeter();
        }

        if (webPage === 'disco-profit.php' || webPage === 'disco-profit') {
            await this.getDiscoProfits();
        }

        if (webPage === 'system_settings.php' || webPage === 'system_settings') {
            this.getSystemSettings();
            this.getApiDataTable()
        }

        if (webPage === 'view_user_details.php' || webPage === 'view_user_details') {
            this.getUserDetails();
        }

        if (webPage === 'systemsettings.php') {
            this.getSystemSettings();
            this.getApiDataTable()
        }


        if (webPage === 'transaction.php' || webPage === "transaction") {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const discoParam = urlParams.get("disco_id");
            this.sortDiscos = discoParam;
            await this.getAllDisco(2, 2);
            if (this.sortDiscos) {
                this.trans_type = 1;
            }
            await this.getAllTransactions();

        }
        
        if (webPage === 'fund_wallet.php' || webPage === "fund_wallet") {
            const queryString = window.location.search;
            this.trans_type = 2
                await this.getAllTransactions();
            
        }

        if (webPage === 'oneapp.php' || webPage === "oneapp") {
            this.getAllOneApp();
        }

        if (webPage === "admin.php") {
            this.getAllAdmin();
        }

    }
})

app.mount("#staff");
