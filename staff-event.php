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
                                    <div v-if="event" class="table-responsive  mt-1">
                                        <table class="table select-table">
                                            <thead>
                                                <tr>
                                                    <th>Event Name</th>
                                                    <th>Event Venue</th>
                                                    <th>Date And Time</th>
                                                    <th>Event Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in event">
                                                    <td>
                                                        <h6>{{item.topic}}</h6>
                                                    </td>
                                                    <td>
                                                        <h6>{{item.venue}}</h6>
                                                    </td>
                                                    <td>
                                                        <h6>{{item.date}}</h6>
                                                    </td>

                                                    <td>
                                                        <div v-if="item.status == 1" class="badge badge-opacity-warning">Coming Up Soon</div>
                                                        <div v-if="item.status == 2" class="badge badge-opacity-success">Event Done</div>
                                                        <div v-if="item.status == 3" class="badge badge-opacity-warning">Event Cancelled</div>
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
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>