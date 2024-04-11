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
            generalFunctions: new GeneralFunction({ apiPath: "admin" , logoutUrl : "admin/admin-login.php" }),
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

            // pupils
            pupils : null,

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
            window.location = this.baseUrl + "/admin/login.php";
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
        async adminLogin() {
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
                window.location = `${this.baseUrl}admin/admin-index.php`;
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
            const url = `account/getAdminDetails.php`;
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

        // pupils
         async getAllPupils(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `pupils/get_pupils.php?page=${page}&per_page=${per_page}${search}${limit}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.pupils = successData.pupils;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },


        gotoPage(page) {
            window.location = `${this.baseUrl}admin/${page}`;
            // window.location.href=`print.php`
        },


    },
    async beforeMount() {
        // this.getImages();
        this.pathname = window.location.href;
        if (!webPage.includes("admin/login.php") && !webPage.includes("login")) {
            window.localStorage.setItem("LightNGCurrentPage", webPage);
            this.loading = true;
            this.getToken();
            this.getAdminDetails();
            if (!this.token) {
                window.location = `${this.baseUrl}admin/login.php`;
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

        if (webPage === 'admin-pupils.php' || webPage === 'admin-pupils') {
            await this.getAllPupils();
        }

    }
})

app.mount("#admin");
