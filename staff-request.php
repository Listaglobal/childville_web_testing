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