<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'includes/staff-header-link.php' ?>
</head>
<style>
    [v-cloak] {
        display: none;
    }
</style>


<body id="staff" v-cloak class="with-welcome-text">
    <div class="container-scroller">
        <?php include 'includes/staff-header.php' ?>
        <div class="container-fluid page-body-wrapper">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <?php include 'includes/staff-sidebar.php' ?>
            </nav>
            <!-- partial -->
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
                                                        <h4 class="card-title card-title-dash">Child Ville Pupils</h4>
                                                        <p class="card-subtitle card-subtitle-dash">You have 3 Pupils</p>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Add new Pupils</button>
                                                    </div>
                                                </div>
                                                <div class="table-responsive  mt-1">
                                                    <table class="table select-table">
                                                        <thead>
                                                            <tr>
                                                                <th>PuPils Name</th>
                                                                <th>Sex</th>
                                                                <th>Parents Contact</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex ">
                                                                        <img src="assets/images/faces/face1.jpg" alt="">
                                                                        <div>
                                                                            <h6>Brandon Washington</h6>
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6>Female</h6>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p class="text-success">+23729474</p>
                                                                        </div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p>Washington James</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="badge badge-opacity-success">Active</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex ">
                                                                        <img src="assets/images/faces/face1.jpg" alt="">
                                                                        <div>
                                                                            <h6>Brandon Washington</h6>
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6>Female</h6>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p class="text-success">+23729474</p>
                                                                        </div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p>Washington James</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="badge badge-opacity-success">Active</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex ">
                                                                        <img src="assets/images/faces/face1.jpg" alt="">
                                                                        <div>
                                                                            <h6>Brandon Washington</h6>
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6>Female</h6>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p class="text-success">+23729474</p>
                                                                        </div>
                                                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                            <p>Washington James</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="badge badge-opacity-success">Active</div>
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
                <!-- content-wrapper ends -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>