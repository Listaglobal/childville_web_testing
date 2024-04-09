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
                                    <h4 class="card-title">Pay Roll </h4>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th> User </th>
                                                    <th> Month </th>
                                                    <th> Tax </th>
                                                    <th> Amount </th>
                                                    <th> Created By </th>
                                                    <th> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="py-1">
                                                        <img src="asset/img/img4.jpg" alt="image" />
                                                    </td>
                                                    <td>May 15, 2015 </td>
                                                    <td>$18 </td>
                                                    <td>$77.99 </td>
                                                    <td> John Smith </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary text-white me-0"><i class="icon-download"></i> Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        <img src="asset/img/img2.jpg" alt="image" />
                                                    </td>
                                                    <td>May 15, 2015 </td>
                                                    <td>$18 </td>
                                                    <td>$77.99 </td>
                                                    <td> John Smith </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary text-white me-0"><i class="icon-download"></i> Download</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        <img src="asset/img/img6.jpg" alt="image" />
                                                    </td>
                                                    <td>May 15, 2015 </td>
                                                    <td>$18 </td>
                                                    <td>$77.99 </td>
                                                    <td> John Smith </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary text-white me-0"><i class="icon-download"></i> Download</a>
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
    <?php include 'includes/staff-footer.php' ?>
</body>

</html>