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
                            <div class="col-lg-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-sm-flex justify-content-between align-items-start">
                                            <div>
                                                <h4 class="card-title card-title-dash">Child Staff Perfomance and Review</h4>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="modal" href="#adddisco" class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Review Staff</a>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table v-if="review" class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Review By</th>
                                                        <th>Date</th>
                                                        <th>Reviews</th>
                                                        <th>Staff Name</th>
                                                        <th>Performance Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in review">
                                                        <td>{{item.review_by}}</td>
                                                        <td>{{item.created_at}} </td>
                                                        <td>{{item.review}}</td>
                                                        <td>
                                                            <div class="d-flex ">
                                                                <img v-if='item.profile_pic' :src="baseUrl +'/assets/images/staff/'+item.profile_pic" alt="Staff image" class="thumb __567788">
                                                                <div class="text-align-center mt-2 p-2">
                                                                    <h6>{{item.fname}} {{item.lname}}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div v-if="item.status == 1" class="badge badge-opacity-success me-3">Good</div>
                                                            <div v-if="item.status == 2" class="badge badge-opacity-warning me-3">Average</div>
                                                            <div v-if="item.status == 3" class="badge badge-opacity-danger me-3">Bad</div>
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
                    <!-- content-wrapper ends -->
                </div>
            </div>
        </div>

        <!-- Add Review  -->
        <div class="modal fade " id="adddisco" style="padding-left: 0px;" aria-modal="true" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Review Staff</h5>
                        <a href="#" class="close" id='_closedisco' data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i></a>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label class="form-label" for="oneapp">Select Staff </label>
                                <div v-if="staff" class="form-control-wrap">
                                    <select v-model="user_id" class="form-select" id="oneappcode" required>
                                        <option value="null">Select Staff</option>
                                        <option v-for="(item, index) in staff" :value="item.user_id">{{item.fname}} {{item.lname}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="shortname">Review By Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="review_by" class="form-control" id="shortname" required="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email-address">Review</label>
                                <div class="form-control-wrap">
                                    <textarea class="form-control" v-model="review" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="oneapp">Review Status</label>
                                <div class="form-control-wrap">
                                    <select v-model="status" class="form-select" id="oneappcode" required>
                                        <option value="null">Select Review Status</option>
                                        <option value="1">Good </option>
                                        <option value="2">Average</option>
                                        <option value="3">Bad</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" @click.prevent="addReview()" class="btn btn-lg btn-primary">Add Staff Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <?php include 'includes/admin-footer.php' ?>
</body>

</html>