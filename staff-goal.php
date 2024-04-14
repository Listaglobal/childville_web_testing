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
                                    <div class="table-responsive  mt-1">
                                        <table v-if="goal" class="table select-table">
                                            <thead>
                                                <tr>
                                                    <th>Staff Name</th>
                                                    <th>Date</th>
                                                    <th>Goal To achieve</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in goal">
                                                    <td>
                                                        <div class="d-flex ">
                                                            <img v-if='item.profile_pic' :src="baseUrl +'/assets/images/staff/'+item.profile_pic" alt="Staff image" class="thumb __567788">
                                                            <div class="text-align-center mt-2 p-2">
                                                                <h6>{{item.fname}} {{item.lname}}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6>{{item.created_at}}</h6>
                                                    </td>
                                                    <td>
                                                        <h6>{{item.goal}}</h6>
                                                    </td>
                                                    <td>
                                                        <div v-if="item.status == 1" class="badge badge-opacity-warning">pending</div>
                                                        <div v-if="item.status == 2" class="badge badge-opacity-success">Done</div>
                                                        <div v-if="item.status == 3" class="badge badge-opacity-danger">Cancelled</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="!goal" class="noresult">
                                            <div class="text-center">
                                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                                                <h5 class="mt-2">No Goals Created for You Yet</h5>
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