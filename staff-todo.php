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
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Goals</h4>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Goals</th>
                                                    <th> Status</th>
                                                    <th> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>May 15, 2015 </td>
                                                    <td>Achieve the Set object of child Ville</td>
                                                    <td>
                                                        <div class="badge badge-opacity-success me-3">Done</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>May 15, 2015 </td>
                                                    <td>Achieve the Set object of child Ville</td>
                                                    <td>
                                                        <div class="badge badge-opacity-danger me-3">Not Done</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>May 15, 2015 </td>
                                                    <td>Achieve the Set object of child Ville</td>
                                                    <td>
                                                        <div class="badge badge-opacity-success me-3">Done</div>
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

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>