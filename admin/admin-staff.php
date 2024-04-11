<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ChildVille Admin Profile Access </title>
    <link rel="stylesheet" href="../assets/vendors/feather/feather.css">
    <link rel="stylesheet" href="../assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="../assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="../assets/vendors/typicons/typicons.css">
    <link rel="stylesheet" href="../assets/vendors/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="../assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css">
    <link rel="stylesheet" type="text/css" href="../assets/js/select.dataTables.min.css">
    <link rel="stylesheet" href="../assets/css/vertical-layout-light/style.css">
    <link rel="shortcut icon" href="../asset/img/Logo2.png" />
</head>
<style>
    [v-cloak] {
        display: none;
    }
</style>

<body class="with-welcome-text">
    <div id="admin" v-cloak>
        <div class="container-scroller">
            <?php include 'includes/admin-header.php' ?>
            <div class="container-fluid page-body-wrapper">
                <nav class="sidebar sidebar-offcanvas" id="sidebar">
                    <?php include 'includes/admin-sidebar.php' ?>
                </nav>
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="home-tab">
                                    <div class="row flex-grow">
                                        <div class="col-12 grid-margin stretch-card">
                                            <div v-if="staff" class="card card-rounded">
                                                <div class="card-body">
                                                    <div class="d-sm-flex justify-content-between align-items-start">
                                                        <div>
                                                            <h4 class="card-title card-title-dash">Child Ville Staff</h4>
                                                            <p class="card-subtitle card-subtitle-dash">You have 3 Staff</p>
                                                        </div>
                                                        <div>
                                                            <a data-bs-toggle="modal" href="#adddisco" class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Add New Staff </a>
                                                        </div>
                                                    </div>
                                                    <div class="table-responsive  mt-1">
                                                        <table class="table select-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Staff Name</th>
                                                                    <th>Sex</th>
                                                                    <th>Email</th>
                                                                    <th>Class</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="(item, index) in staff">
                                                                <tr>
                                                                    <td>
                                                                        <div class="d-flex ">
                                                                            <img v-if='item.profile_pic' :src="baseUrl +'/assets/images/staff/'+item.profile_pic" alt="Staff image" class="thumb __567788">
                                                                            <div>
                                                                                <h6>{{item.fname}} {{item.lname}}</h6>
                                                                                <p></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.sex}}</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.email}}</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.class}}</h6>
                                                                    </td>

                                                                    <td>
                                                                        <div v-if="item.status == 1" class="badge badge-opacity-success">Active</div>
                                                                        <div v-if="item.status == 2" class="badge badge-opacity-warning">InActive</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Staff  -->
        <div class="modal fade " id="adddisco" style="padding-left: 0px;" aria-modal="true" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Staff</h5>
                        <a href="#" class="close" id='_closedisco' data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i></a>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent>

                            <div class="form-group">
                                <label class="form-label" for="quantity-add">Staff Image</label>
                                <div class="form-control-wrap">
                                    <div class="form-file">
                                        <input id="input_file__" type="file" accept="image/*" @change='uploadImage' class="form-file-input" id="customFile">
                                        <label class="form-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="shortname">Staff First Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="fname" class="form-control" id="shortname" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="shortname">Staff Last Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="lname" class="form-control" id="shortname" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="shortname">Staff Date Of Birth</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="dob" class="form-control" id="shortname" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">Staff Sex</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="sex" class="form-control" id="email-address" required="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email-address">Staff Class</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="word" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">Staff Email</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="email" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">Staff Number</label>
                                <div class="form-control-wrap">
                                    <input type="number" v-model="staffNumber" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">Staff Password</label>
                                <div class="form-control-wrap">
                                    <input type="password" v-model="password" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">Confirm Staff Pasword</label>
                                <div class="form-control-wrap">
                                    <input type="password" v-model="confirmpassword" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" @click.prevent="addStaff()" class="btn btn-lg btn-primary">Add New Staff</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <?php include 'includes/admin-footer.php' ?>

</body>

</html>