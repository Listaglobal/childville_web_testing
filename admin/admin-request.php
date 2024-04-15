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
                                            <div class="card card-rounded">
                                                <div class="card-body">
                                                    <div class="d-sm-flex justify-content-between align-items-start">
                                                        <div>
                                                            <h4 class="card-title card-title-dash">Child Ville Staff Time Off Request</h4>
                                                        </div>
                                                    </div>
                                                    <div class="table-responsive  mt-1">
                                                        <table class="table select-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Staff</th>
                                                                    <th>Days</th>
                                                                    <th>Request Date</th>
                                                                    <th>Reason of Time Off</th>
                                                                    <th>Status</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-if="request">
                                                                <tr v-for="(item, index) in request">
                                                                    <td>
                                                                        <div class="d-flex ">
                                                                            <img v-if='item.profile_pic' :src="baseUrl +'/assets/images/staff/'+item.profile_pic" alt="Staff image" class="thumb __567788">
                                                                            <div class="text-align-center mt-2 p-2">
                                                                                <h6>{{item.fname}} {{item.lname}}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.days}} Days</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.created_at}}</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{{item.reason}}</h6>
                                                                    </td>
                                                                    <td>
                                                                        <div v-if="item.status == 1" class="badge badge-opacity-warning">Awaiting Approval</div>
                                                                        <div v-if="item.status == 2" class="badge badge-opacity-success">Approved</div>
                                                                        <div v-if="item.status == 3" class="badge badge-opacity-danger">Dissapproved</div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="dropdown d-inline-block">
                                                                            <button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i class="mdi mdi-account-eye"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                                <li v-if="item.status != 3"><span @click="changeRequestStatus(item.id, 3)" class="dropdown-item"><i class="ri-toggle-line align-bottom me-2 text-muted"></i> Disapprove</span></li>
                                                                                <li v-if="item.status != 2"><span @click="changeRequestStatus(item.id, 2)" class="dropdown-item"><i class="ri-toggle-line align-bottom me-2 text-muted"></i> Approve</span></li>
                                                                            </ul>
                                                                        </div>
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
    </div>

    <?php include 'includes/admin-footer.php' ?>

</body>

</html>