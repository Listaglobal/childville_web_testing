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
                                                            <h4 class="card-title card-title-dash">Child Ville Events</h4>
                                                        </div>
                                                        <div>
                                                            <a data-bs-toggle="modal" href="#adddisco" class="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i class="mdi mdi-account-plus"></i>Add New Events </a>
                                                        </div>
                                                    </div>
                                                    <div v-if="event" class="table-responsive  mt-1">
                                                        <table class="table select-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Event Name</th>
                                                                    <th>Event Venue</th>
                                                                    <th>Date And Time</th>
                                                                    <th>Event Status</th>
                                                                    <th>Action</th>
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
                                                                    <td>
                                                                        <div class="dropdown d-inline-block">
                                                                            <button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i class="mdi mdi-account-eye"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                                <!-- <li v-if="item.status != 0"><span @click="changeAdvertStatus(item.trackid, 0)" class="dropdown-item"><i class="ri-toggle-line align-bottom me-2 text-muted"></i> Deactivate</span></li>
                                                                                <li v-if="item.status != 1"><span @click="changeAdvertStatus(item.trackid, 1)" class="dropdown-item"><i class="ri-toggle-line align-bottom me-2 text-muted"></i> Activate</span></li> -->
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

        <!-- Add Event  -->
        <div class="modal fade " id="adddisco" style="padding-left: 0px;" aria-modal="true" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New event</h5>
                        <a href="#" class="close" id='_closedisco' data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i></a>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label class="form-label" for="shortname">Event Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="topic" class="form-control" id="shortname" required="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email-address">Event Venue</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="venue" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email-address">event Date</label>
                                <div class="form-control-wrap">
                                    <input type="text" v-model="date" class="form-control" id="email-address" required="">
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" @click.prevent="addEvent()" class="btn btn-lg btn-primary">Add New event</button>
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