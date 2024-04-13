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
                                    <h4 class="card-title">Perfomance and Review </h4>
                                    <div class="table-responsive">
                                        <table v-if="review" class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Review By</th>
                                                    <th>Date</th>
                                                    <th>Reviews</th>
                                                    <th>Performance Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in review">
                                                    <td>{{item.review_by}}</td>
                                                    <td>{{item.created_at}} </td>
                                                    <td>{{item.review}}</td>
                                                    <td>
                                                        <div v-if="item.status == 1" class="badge badge-opacity-success me-3">Good</div>
                                                        <div v-if="item.status == 2" class="badge badge-opacity-warning me-3">Average</div>
                                                        <div v-if="item.status == 3" class="badge badge-opacity-danger me-3">Bad</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="!review" class="noresult">
                                            <div class="text-center">
                                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                                                <h5 class="mt-2">No Review Yet</h5>
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
        </div>
    </div>

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>