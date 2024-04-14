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


<body class="with-welcome-text">
    <div id="staff" v-cloak>
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
                                        <h4 class="card-title">Pay Roll </h4>
                                        <div class="table-responsive">
                                            <table v-if="payroll" class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>User</th>
                                                        <th>Month</th>
                                                        <th>Date Sent</th>
                                                        <th>File</th>
                                                        <th> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in payroll">
                                                        <td class="py-1">
                                                            <img v-if='item.profile_pic' :src="baseUrl +'/assets/images/staff/'+item.profile_pic" alt="Staff image" class="thumb __567788">
                                                            <div class="mt-3 text-align-center">
                                                                <h6>{{item.fname}} {{item.lname}}</h6>
                                                            </div>
                                                        </td>
                                                        <td>{{item.month}}</td>
                                                        <td>{{item.created_at}}</td>
                                                        <th>{{item.file}}</td>
                                                        <td>
                                                            <a :href="baseUrl +'/assets/images/payroll/'+item.file" target="_blank" class="btn btn-primary text-white me-0"><i class="icon-download"></i> Download</a>
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

    <?php include 'includes/staff-footer.php' ?>
</body>

</html>