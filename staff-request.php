<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Staff Potal || Chilld Ville - Pre-School </title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="assets/vendors/feather/feather.css">
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="assets/vendors/typicons/typicons.css">
    <link rel="stylesheet" href="assets/vendors/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css">
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css">
    <link rel="stylesheet" type="text/css" href="assets/js/select.dataTables.min.css">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="assets/css/vertical-layout-light/style.css">
    <!-- endinject -->
    <link rel="shortcut icon" href="asset/img/Logo.png" />
</head>
<style>
    [v-cloak] {
        display: none;
    }
</style>


<body id="staff" v-cloak class="with-welcome-text">
    <div class="container-scroller">
        <?php include 'includes/staff-header.php' ?>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <?php include 'includes/staff-sidebar.php' ?>
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
                                                        <h4 class="card-title card-title-dash">Request Time Off</h4>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Send Request</button>
                                                    </div>
                                                </div>
                                                <div class="table-responsive  mt-1">
                                                    <table class="table select-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Topic</th>
                                                                <th>Reason </th>
                                                                <th>Date Request</th>
                                                                <th>Request Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td> Personal Reason </td>
                                                                <td> Marital Isuess </td>
                                                                <td> 01/01/2022</td>
                                                                <td>
                                                                    <div class="badge badge-opacity-success">Approved</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td> Personal Reason </td>
                                                                <td> Marital Isuess </td>
                                                                <td> 01/01/2022</td>
                                                                <td>
                                                                    <div class="badge badge-opacity-warning">Pending</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td> Personal Reason </td>
                                                                <td> Marital Isuess </td>
                                                                <td> 01/01/2022</td>
                                                                <td>
                                                                    <div class="badge badge-danger">Declined</div>
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

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>