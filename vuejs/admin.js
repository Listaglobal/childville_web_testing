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
            confirmpassword: null,
            username: null,
            name: null,
            token: null,
            adminDetails: null,
            superAdmin: null,
            admin_initials: null,
            admin_level: null,
            fname: null,
            lname: null,
            dob: null,
            sex: null,
            class: null,
            staffNumber: null,
            word: null,


            // pupils
            pupils: null,
            
            //payroll
            month: null, 
            user_id: null,

            //events
            topic: null, 
            venue: null,
            date: null,
            event: null,

            // review 
            review: null,
            status: null,
            user_id: null,
            review_by: null,
            view: null,

            //goal
            goal: null,

            //request
            request: null,

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
            window.location = this.baseUrl + "/admin/admin-login.php";
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
            const url = `getDetails.php`;
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
        //USERS
        async setUserRegMethod(method) {
            window.localStorage.setItem("reg_method", method);
        },
        async removeUserRegMethod() {
            window.localStorage.removeItem("reg_method");
        },
        // staff
        async getAllStaff(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `staff/getAllStaff.php?page=${page}&per_page=${per_page}${search}${limit}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.staff = successData.staff;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

        async addStaff() {
            let data = {
                "fname" : this.fname,
                "image" : this.imageSent,
                "lname" : this.lname,
                "dob": this.dob,
                "sex": this.sex,
                "class": this.word,
                "staffNumber": this.staffNumber,
                "email": this.email,
                "password": this.password,
                "confirmpassword" : this.confirmpassword
            }

            const url = `staff/add-staff.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllStaff();
                    document.getElementById("_closedisco").click();
                    this.fname = this.imageSent = this.lname = this.dob = this.sex = this.word = this.staffNumber = this.email = this.password = this.confirmpassword = null;
                } 
            }, 2);
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

        //pupils
        async getAllPupils(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `pupils/getAllPupils.php?page=${page}&per_page=${per_page}${search}${limit}`;
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

        //payroll
        async addPayroll() {
            let data = {
                "user_id" : this.user_id,
                "file" : this.imageSent,
                "month" : this.month,
            }

            const url = `payroll/addpayroll.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllPayrolls();
                    document.getElementById("_closedisco").click();
                    this.user_id = this.imageSent = this.month = null;
                } 
            }, 2);
        },
        async getAllPayrolls(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            let limit = (this.limit) ? `&limit=${this.limit}` : '';
            const url = `payroll/getAllPayroll.php?page=${page}&per_page=${per_page}${search}${limit}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.payroll = successData.payroll;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

        

        // event
        async getAllEvent(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            const url = `events/getAllEvent.php?page=${page}&per_page=${per_page}${search}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.event = successData.event;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

        async addEvent() {
            let data = {
                "topic" : this.topic,
                "venue" : this.venue,
                "date" : this.date,
            }

            const url = `events/addEvent.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllEvent();
                    document.getElementById("_closedisco").click();
                    this.topic = this.venue = this.date = null;
                } 
            }, 2);
        },

        //review
        async getAllReview(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            const url = `review/getAllReview.php?page=${page}&per_page=${per_page}${search}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.review = successData.review;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

        async addReview() {
            let data = {
                "user_id" : this.user_id,
                "review_by" : this.review_by,
                "review": this.veiw,
                "status": this.status             
            }

            const url = `review/addReview.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllReview();
                    document.getElementById("_closedisco").click();
                    this.user_id = this.review_by = this.review = this.status = null;
                } 
            }, 2);
        },

        
        //goal
        async getAllGoal(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            const url = `goal/getAllGoal.php?page=${page}&per_page=${per_page}${search}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.goal = successData.goal;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

        async addGoal() {
            let data = {
                "user_id" : this.user_id,
                "goal" : this.goal
                          
            }

            const url = `goal/addGoal.php`;

            const headers = {
                "Authorization": `Bearer ${this.token}`
            }

            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllGoal();
                    document.getElementById("_closedisco").click();
                    this.user_id = this.goal  = null;
                } 
            }, 2);
        },

        //request
        async getAllRequest(load = 1) {
            let search = (this.search) ? `&search=${this.search}` : "";
            let page = (this.currentPage) ? this.currentPage : 1;
            let per_page = (this.per_page) ? this.per_page : 20;
            const url = `request/getAllRequest.php?page=${page}&per_page=${per_page}${search}`;
            let headers = {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
            };

            await this.callGetRequest(url, headers, (successStatus, successData) => {

                if (!successData) {
                    return;
                }
                this.request = successData.request;
                this.currentPage = successData.page;
                this.totalPage = successData.totalPage;
                this.per_page = successData.per_page;
                this.totalData = successData.total_data;

            });
        },

         async changeRequestStatus(id, status) {
            let data = {
                "trackid" : id,
                "status" : status,
            }

            const headers = {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            };
            
            
            const url = `request/changeRequestStatus.php`;
            await this.callPostRequest(data, url, headers, async (successStatus, successData) => {
                if (successStatus) {
                    await this.getAllRequest();
                } 
            }, 2);

        },






    },
    async beforeMount() {
        // this.getImages();
        this.pathname = window.location.href;
        this.pathname = window.location.href;
        if (!webPage.includes("admin-login.php") && !webPage.includes("staff-login")) {
            window.localStorage.setItem("ChildVilleCurrentPage", webPage);
            this.loading = true;
            this.getToken();
            this.getAdminDetails();
            if (!this.token) {
                window.location = `${this.baseUrl}admin/admin-login.php`;
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
            
            this.getAllUsers()
            // this.getTopProductOrdered();
        }

        if (webPage === 'admin-events.php' || webPage === 'admin-events') {
            await this.getAllEvent();
        }

        if (webPage === 'admin-pupils.php' || webPage === 'admin-pupils') {
            await this.getAllPupils();
        }

        if (webPage === 'admin-staff.php' || webPage === 'admin-staff') {
            await this.getAllStaff();
        }

        if (webPage === 'admin-pay.php' || webPage === 'admin-pay') {
            await this.getAllStaff();
            await this.getAllPayrolls();
        }
        if (webPage === 'admin-review.php' || webPage === 'admin-review') {
            await this.getAllStaff();
            await this.getAllReview();
        }

        if (webPage === 'admin-goal.php' || webPage === 'admin-goal') {
            await this.getAllStaff();
            await this.getAllGoal();
        }

        if (webPage === 'admin-request.php' || webPage === 'admin-request') {
            await this.getAllStaff();
            await this.getAllRequest();
        }

        

    }
})

app.mount("#admin");
