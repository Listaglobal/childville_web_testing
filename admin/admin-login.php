<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin Child Ville Login </title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="../asset/img/Logo2.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@400;500;600&family=Lobster+Two:wght@700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="../asset/lib/animate/animate.min.css" rel="stylesheet">
    <link href="../asset/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">



    <!-- Customized Bootstrap Stylesheet -->
    <link href="../asset/css/bootstrap.min.css" rel="stylesheet">

    <link href="../asset/css/style.css" rel="stylesheet">
</head>

<body>
    <div id="staff" v-cloak class="mt-5">
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <!-- Spinner End -->
            <!-- Call To Action Start -->
            <div class="auth-page-wrapper">
                <div class="auth-page-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a href="index.php" class="d-inline-block auth-logo">
                                            <img src="../asset/img/Logo2.png" alt="" height="80" width="80">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                        <div class="row justify-content-center">
                            <div class="col-md-8 col-lg-6 col-xl-5">
                                <div class="card mt-4">
                                    <div class="card-body p-4">
                                        <div class="text-center mt-2">
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <h5 class="text-primary">Access Your Profile</h5>
                                        </div>
                                        <div class="p-2 mt-4">
                                            <form @submit.prevent="staffLogin">
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Email</label>
                                                    <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter Your Email">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="password-1">Password</label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input type="password" v-model="password" class="form-control pe-5 password-input" placeholder="Enter Your password" id="password-1">
                                                        <span onclick="changePasswordType('password-1', 'password-eye-1')" class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"><i id="password-eye-1" class="ri-eye-off-line align-middle"></i></span>
                                                    </div>
                                                </div>

                                                <div class="mt-4">
                                                    <button class="btn btn-primary w-100 py-3" type="submit">Staff Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call To Action End -->

        </div>

    </div>
    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.all.min.js"></script>
    <script src="../asset/lib/wow/wow.min.js"></script>
    <script src="../asset/lib/easing/easing.min.js"></script>
    <script src="../asset/lib/waypoints/waypoints.min.js"></script>
    <script src="../asset/lib/owlcarousel/owl.carousel.min.js"></script>

    <script src="../asset/js/main.js"></script>
    <script src="../scripts/general_functions.js"></script>
    <script src="../vuejs/staff.js"></script>

</body>

</html>