class GeneralFunction {
    local = "";
    live = "";// 0 - Local 1 - Live
    baseurl = "";
    logoutUrl = "";
    apiUrl = "";

    constructor({ apiPath = " ", logoutUrl = "staff-login.php", live_or_local = 0 } = {}) {
        this.local = `http://localhost/childville_web/`;
        this.live = `https://childville.com/`;
        this.baseurl = live_or_local === 0 ? this.local : this.live;
        this.apiUrl = `${this.baseurl}api/${apiPath}/`;
        this.logoutUrl = `${this.baseurl}${logoutUrl}`;
    }

    
    
    postRequest = async (
        postObject, 
        url, 
        headers,  
        onLoading,
        onCompleted,
        successCallBack, 
        errorCallBack, 
        nav = 1,
    ) => {
        // content type 1 - content type js 2 - formdata
        let data = new FormData();
        for (const key in postObject) {
            data.append(key, postObject[key]);
        }
        const options = {
            method: "POST",
            headers,
            url: `${this.apiUrl}${url}`,
            data: data,
        };
        try {
            if ( typeof onLoading === 'function' ) {
                onLoading();
            }
            const response = await axios(options);
            if (response.data.status) {
                let status = response.data.status;
                let success = response.data.text;
                let successData = response.data.data;
                if ( typeof successCallBack === 'function' ) {
                    successCallBack( status, success, successData);
                }
                return successData;
            } else {
                let status = response.data.status;
                let success = response.data.text;
                let successData = response.data.data;
                if ( typeof errorCallBack === 'function' ) {
                    successCallBack( status, success, successData);
                }
                return false;  
                
            }
        } catch (error) {
            if (error.response) {
                // console.log(error.response.data.text);
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
                if (error.response.status == 401) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    window.localStorage.setItem("authToken", "");
                    this.authToken = null;
                    if (nav == 1) {
                        window.location = this.logoutUrl;
                    }
                    return false
                }
                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
            }
            const errorMsg = error.message || "Error processing request";
            if ( typeof errorCallBack === 'function' ) {
                errorCallBack(errorMsg);
            }
        } finally {
            if ( typeof onCompleted === 'function' ) {
                onCompleted();
            }
        }
    }

    getRequest = async (
        url, 
        headers, 
        onLoading, 
        onCompleted, 
        successCallBack, 
        errorCallBack
    ) => {
        const options = {
            method: "GET",
            url: `${this.apiUrl}${url}`,
            headers: headers == "" ? { "Content-type": "application/json" } : headers,
        };
        try {
            if ( typeof onLoading === 'function' ) {
                onLoading();
            }
            const response = await axios(options);
            if (response.data.status) {
                let success = response.data.text;
                let successData = response.data.data;
                if ( typeof successCallBack === 'function' ) {
                    successCallBack( status, success, successData);
                }
                return successData;
            } else {
                if ( typeof errorCallBack === 'function' ) {
                    successCallBack( status, success, successData);
                }
                return false;  
                
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status == 400) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
                if (error.response.status == 401) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    window.localStorage.setItem("authToken", "");
                    this.authToken = null;
                    if (nav == 1) {
                        window.location = this.logoutUrl;
                    }
                    return false
                }
                if (error.response.status == 405) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
                if (error.response.status == 500) {
                    const errorMsg = error.response.data.text;
                    if ( typeof errorCallBack === 'function' ) {
                        errorCallBack(errorMsg);
                    }
                    return false;
                }
            }
            const errorMsg = error.message || "Error processing request";
            if ( typeof errorCallBack === 'function' ) {
                errorCallBack(errorMsg);
            }
        } finally {
            if ( typeof onCompleted === 'function' ) {
                onCompleted();
            }
        }
    }

    Toastinator = (type, message) => {
        let content;

        switch (type) {
            case "info":
                content = '<div class="toast toast-border-info toastinator" id="toastinator" ><div class="toast-body"><div class="d-flex align-items-center"><div class="flex-shrink-0 me-2"><i class=" ri-information-fill align-middle"></i></div><div class="flex-grow-1"><h5 class="mb-0">' + message + '</h5></div></div></div></div>';
                break;
    
            case "success":
                content = '<div class="toast toast-border-success toastinator" id="toastinator" ><div class="toast-body"><div class="d-flex align-items-center"><div class="flex-shrink-0 me-2"><i class="ri-checkbox-circle-fill align-middle"></i></div><div class="flex-grow-1"><h5 class="mb-0">' + message + '</h5></div></div></div></div>';
                break;
    
            case "error":
                content = '<div class="toast toast-border-danger toastinator" id="toastinator" ><div class="toast-body"><div class="d-flex align-items-center"><div class="flex-shrink-0 me-2"><i class="ri-close-circle-line align-middle"></i></div><div class="flex-grow-1"><h5 class="mb-0">' + message + '</h5></div></div></div></div>';
                break;
        }
        
        console.log(content);
        var temporaryContainer = document.createElement("div");
        temporaryContainer.innerHTML = content;
    
        var toasterElements = temporaryContainer.querySelectorAll(".toastinator");
    
        toasterElements.forEach(function(toasterElement) {
            document.body.appendChild(toasterElement);
            setTimeout(function() {
                document.body.removeChild(toasterElement);
            }, 50000);
        });
        
    }

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
    }
}


class Validators {
    filterInputData = (event) => {
        let value = event.target.value.trim();
        
        event.target.value = value.replace(/^0+/, '');
        // remove all special characters and alphabets except commas but must not have two commas in a row and commas can't start or end the string
        event.target.value = event.target.value.replace(/[^0-9,]+/g, '').replace(/,,+/g, ',').replace(/^,|,$/g, '');
        
    }

    sumNumbers = (base, extra) => {
        let baseValue = base.toString().replace(",", "");
        let extraValue = extra.toString().replace(",", "");
        
        return this.formatNumbers( parseInt(baseValue) +  parseInt(extraValue) );
    }

    substractNumbers = (base, extra) => {
        let baseValue = base.toString().replace(",", "");
        let extraValue = extra.toString().replace(",", "");
        
        return this.formatNumbers( parseInt(baseValue) - parseInt(extraValue) );
    }

    formatNumbers = (value) => {
       return Intl.NumberFormat('en-NG').format(value);
    }

    copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            this.generalFunctions.swalToast('success', "Text copied");
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    compareValues = ( base, extra ) => {
        let baseValue = base.toString().replace(",", "");
        let extraValue = extra.toString().replace(",", "");

        console.log(baseValue, extraValue);
        
        return parseInt(baseValue) >= parseInt(extraValue)
    }

    goToLocation = (location)  => {
        window.location = location
    }
}