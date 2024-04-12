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
                                    <div class="tab-content tab-content-basic">
                                        <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                                            <div class="row">
                                                <div class="col-lg-8 d-flex flex-column">
                                                    <div class="row flex-grow">
                                                        <div class="col-12 grid-margin stretch-card">
                                                            <div class="card card-rounded">
                                                                <div class="card-body">
                                                                    <div class="d-sm-flex justify-content-between align-items-start">
                                                                        <div>
                                                                            <h4 class="card-title card-title-dash">Child Ville Pupils</h4>
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
                                                    <div class="row flex-grow">
                                                        <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                                                            <div class="card card-rounded">
                                                                <div class="card-body card-rounded">
                                                                    <h4 class="card-title  card-title-dash">Recent Events</h4>
                                                                    <div class="list align-items-center border-bottom py-2">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-2 font-weight-medium">
                                                                                Change in Directors
                                                                            </p>
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <div class="d-flex align-items-center">
                                                                                    <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                                    <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list align-items-center border-bottom py-2">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-2 font-weight-medium">
                                                                                Other Events
                                                                            </p>
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <div class="d-flex align-items-center">
                                                                                    <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                                    <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list align-items-center border-bottom py-2">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-2 font-weight-medium">
                                                                                Quarterly Report
                                                                            </p>
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <div class="d-flex align-items-center">
                                                                                    <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                                    <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list align-items-center border-bottom py-2">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-2 font-weight-medium">
                                                                                Change in Directors
                                                                            </p>
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <div class="d-flex align-items-center">
                                                                                    <i class="mdi mdi-calendar text-muted me-1"></i>
                                                                                    <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="list align-items-center pt-3">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-0">
                                                                                <a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                                                            <div class="card card-rounded">
                                                                <div class="card-body">
                                                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                                                        <h4 class="card-title card-title-dash">Activities</h4>
                                                                        <p class="mb-0">20 finished, 5 remaining</p>
                                                                    </div>
                                                                    <ul class="bullet-line-list">
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Ben Tossell</span> assign you a task</div>
                                                                                <p>Just now</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Oliver Noah</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Jack William</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Leo Lucas</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Thomas Henry</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Ben Tossell</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex justify-content-between">
                                                                                <div><span class="text-light-green">Ben Tossell</span> assign you a task</div>
                                                                                <p>1h</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="list align-items-center pt-3">
                                                                        <div class="wrapper w-100">
                                                                            <p class="mb-0">
                                                                                <a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 d-flex flex-column">
                                                    <div class="row flex-grow">
                                                        <div class="col-12 grid-margin stretch-card">
                                                            <div class="card card-rounded">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <h4 class="card-title card-title-dash">Todo list</h4>
                                                                                <div class="add-items d-flex mb-0">
                                                                                    <!-- <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"> -->
                                                                                    <button class="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p"><i class="mdi mdi-plus"></i></button>
                                                                                </div>
                                                                            </div>
                                                                            <div class="list-wrapper">
                                                                                <ul class="todo-list todo-list-rounded">
                                                                                    <li class="d-block">
                                                                                        <div class="form-check w-100">
                                                                                            <label class="form-check-label">
                                                                                                <input class="checkbox" type="checkbox"> Lorem Ipsum is simply dummy text
                                                                                                of the printing <i class="input-helper rounded"></i>
                                                                                            </label>
                                                                                            <div class="d-flex mt-2">
                                                                                                <div class="ps-4 text-small me-3">24 June 2020</div>
                                                                                                <div class="badge badge-opacity-warning me-3">Due tomorrow</div>
                                                                                                <i class="mdi mdi-flag ms-2 flag-color"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li class="d-block">
                                                                                        <div class="form-check w-100">
                                                                                            <label class="form-check-label">
                                                                                                <input class="checkbox" type="checkbox"> Lorem Ipsum is simply dummy text
                                                                                                of the printing <i class="input-helper rounded"></i>
                                                                                            </label>
                                                                                            <div class="d-flex mt-2">
                                                                                                <div class="ps-4 text-small me-3">23 June 2020</div>
                                                                                                <div class="badge badge-opacity-success me-3">Done</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div class="form-check w-100">
                                                                                            <label class="form-check-label">
                                                                                                <input class="checkbox" type="checkbox"> Lorem Ipsum is simply dummy text
                                                                                                of the printing <i class="input-helper rounded"></i>
                                                                                            </label>
                                                                                            <div class="d-flex mt-2">
                                                                                                <div class="ps-4 text-small me-3">24 June 2020</div>
                                                                                                <div class="badge badge-opacity-success me-3">Done</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li class="border-bottom-0">
                                                                                        <div class="form-check w-100">
                                                                                            <label class="form-check-label">
                                                                                                <input class="checkbox" type="checkbox"> Lorem Ipsum is simply dummy text
                                                                                                of the printing <i class="input-helper rounded"></i>
                                                                                            </label>
                                                                                            <div class="d-flex mt-2">
                                                                                                <div class="ps-4 text-small me-3">24 June 2020</div>
                                                                                                <div class="badge badge-opacity-danger me-3">Expired</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include 'includes/admin-footer.php' ?>
</body>

</html>