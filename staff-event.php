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
                                    <h4 class="card-title">Check Out Event </h4>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name of Event</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Location</th>
                                                    <th>Status</th>
                                                    <th> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Change of Borad of Directors </td>
                                                    <td>May 15, 2015 </td>
                                                    <td>16:30 </td>
                                                    <td>Main Hall</td>
                                                    <td>
                                                        <div class="badge badge-opacity-warning me-3">Due tomorrow</div>
                                                    </td>
                                                    <!-- <td> John Smith </td> -->
                                                </tr>
                                                <tr>
                                                    <td> Change of Borad of Directors </td>
                                                    <td>May 15, 2015 </td>
                                                    <td>16:30 </td>
                                                    <td>Main Hall</td>
                                                    <td>
                                                        <div class="badge badge-opacity-success me-3">Done</div>
                                                    </td>
                                                    <!-- <td> John Smith </td> -->
                                                </tr>
                                                <tr>
                                                    <td> Change of Borad of Directors </td>
                                                    <td>May 15, 2015</td>
                                                    <td>16:30 </td>
                                                    <td>Main Hall</td>
                                                    <td>
                                                        <div class="badge badge-danger me-3">Cancelled</div>
                                                    </td>
                                                    <!-- <td> John Smith </td> -->
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
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>