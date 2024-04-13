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
                                        <h4 class="card-title">Child Staff Perfomance and Review </h4>
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Review By</th>
                                                        <th>Date</th>
                                                        <th>Reviews</th>
                                                        <th>Performance Status</th>
                                                        <th> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>John Elton</td>
                                                        <td>May 15, 2015 </td>
                                                        <td>Change of Borad of Directors </td>
                                                        <td>
                                                            <div class="badge badge-opacity-warning me-3">Avarage</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>John Elton</td>
                                                        <td>May 15, 2015 </td>
                                                        <td>Change of Borad of Directors </td>
                                                        <td>
                                                            <div class="badge badge-opacity-success me-3">Good</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>John Elton</td>
                                                        <td>May 15, 2015 </td>
                                                        <td>Change of Borad of Directors </td>
                                                        <td>
                                                            <div class="badge badge-opacity-danger me-3">Bad</div>
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
    </div>


    <?php include 'includes/admin-footer.php' ?>
</body>

</html>