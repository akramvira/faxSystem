<?php
echo '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> پنل مدیریت فکس</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style/css/bootstrap-rtl.css">
    <link rel="stylesheet" href="style/css/open-iconic-bootstrap.min.css">    
    <link rel="stylesheet" href="style/css/vazir.css">
    <link rel="stylesheet" href="style/css/style.css">
</head>
<body>
    <nav class="navbar sticky-top bg-white navbar-expand-md navbar-light p-0">
        <div class="d-flex align-items-center">
            <a href="#" class="navbar-brand bg-light py-3 px-5 m-0 h3">پنل مدیریت فکس ویرا</a>
            <span class="oi oi-menu mr-4" data-toggle="collapse" data-target="#sidebar"></span>
        </div>
        <div class="collapse navbar-collapse">
            <div class="ml-3 mr-auto">
                <button type="button" class="btn btn-sm btn-success">
                    <span class="badge badge-light"> + </span>                      ارسال فکس
                </button>
                <button type="button" class="btn btn-sm btn-primary">
                    فکس ‌های جدید <span class="badge badge-light" id="newFaxCount">9</span>
                </button>
                <button class="btn btn-sm btn-danger">خروج</button>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-2 bg-dark text-light collapse show" id="sidebar">
                <ul class="nav flex-column px-3">
                    <li class="nav-item d-flex align-items-center">
                        <span class="oi oi-dashboard"></span>
                        <a href="index.html" class="nav-link my-1">داشبورد</a>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <span class="oi oi-comment-square"></span>
                        <a href="sendfax.html" class="nav-link my-1">ارسال فکس </a>
                    </li>
                    <li class="nav-item">
                        <div class="d-flex align-items-center">
                            <span class="oi oi-book"></span>
                            <a href="#" class="nav-link my-1 w-100 collapsed" data-toggle="collapse" data-target="#submenu1">
                                فکس
                                <span class="oi oi-chevron-left float-left"></span>
                            </a>
                        </div>
                        <div class="collapse" id="submenu1">
                            <ul class="nav px-3">
                                <li class="nav-item">
                                    <a href="#" class="nav-link my-1">صندوق ورودی </a>
                                </li>
                                <li class="nav-item w-100">
                                    <a href="#" class="nav-link my-1">صندوق خروجی</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link my-1">بایگانی </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul class="nav flex-column px-3">
                    <li class="nav-item d-flex align-items-center">
                        <span class="oi oi-person"></span>
                        <a href="#" class="nav-link my-1">کاربران</a>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <span class="oi oi-video"></span>
                        <a href="#" class="nav-link my-1">تنظیمات</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-10 bg-light mr-md-auto p-4" id="main">
                <div class="card">
                    <div class="card-header">
                        <h5>خلاصه وضعیت </h5>
                    </div>
                    <div class="card-body">
                        <div class="card-deck">
                            <div class="card text-white bg-success mb-3">
                                <div class="card-header">
                                    <h4>150</h4>
                                    <p class="card-text blockquote-footer text-white">تعداد کل فکس ها </p>
                                </div>
                            </div>
                            <div class="card text-white bg-primary mb-3">
                                <div class="card-header">
                                    <h4>35</h4>
                                    <p class="card-text blockquote-footer text-white">تعداد فکس های دریافتی </p>
                                </div>
                            </div>
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-header">
                                    <h4>55</h4>
                                    <p class="card-text blockquote-footer text-white">تعداد فکس های ارسالی </p>
                                </div>
                            </div>
                            <div class="card text-white bg-dark mb-3">
                                <div class="card-header">
                                    <h4>90</h4>
                                    <p class="card-text blockquote-footer text-white">تعداد فکس های بایگانی شده</p>
                                </div>
                                <div class="card-body">
                                    <canvas id="approve-comment" class="w-100" height="100%"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="text-center col-md-3">
                                <h5>تعداد کل فکس ها </h5>
                                <p><strong>150 فکس (100%)</strong></p>
                                <div class="progress">
                                    <div class="progress-bar bg-info" style="width: 100%"></div>
                                </div>
                            </div>
                            <div class="text-center col-md-3">
                                <h5>فکس های ارسالی </h5>
                                <p><strong>35 فکس (25%)</strong></p>
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width: 25%"></div>
                                </div>
                            </div>
                            <div class="text-center col-md-3">
                                <h5>فکس های دریافتی </h5>
                                <p><strong>55 فکس (35%)</strong></p>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" style="width: 35%"></div>
                                </div>
                            </div>
                            <div class="text-center col-md-3">
                                <h5>بایگانی شده </h5>
                                <p><strong>90 فکس (40%)</strong></p>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" style="width: 40%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap border-bottom pb-2 my-4">
                    <h1 class="h2">آخرین فکس ها </h1>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="table-secondary">
                                <th>عنوان فکس</th>
                                <th>شماره فکس</th>
                                <th>تاریخ فکس</th>
                                <th>تنظیمات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>فکس ارسالی شماره1 !</td>
                                <td>0</td>
                                <td>30</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-sm btn-primary">مشاهده</button>
                                        <button type="button" class="btn btn-sm btn-danger">حذف</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>فکس دریافتی شماره1 !</td>
                                <td>0</td>
                                <td>30</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-sm btn-primary">مشاهده</button>
                                        <button type="button" class="btn btn-sm btn-danger">حذف</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>فکس بایگانی شده شماره1 !</td>
                                <td>0</td>
                                <td>30</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-sm btn-primary">مشاهده</button>
                                        <button type="button" class="btn btn-sm btn-danger">حذف</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/index.js"></script>
</body>
</html>
'
?>