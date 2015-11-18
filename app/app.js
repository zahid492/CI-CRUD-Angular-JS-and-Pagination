var X = angular.module('app', ['ngResource', 'ngRoute','ui.bootstrap']).constant('domain', 'http://localhost:81/api/');

X.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
         .when('/studentlist',
            { templateUrl: 'app/views/student_list.html', controller: 'StudentController' })
         .when('/studentadd/',
            { templateUrl: 'app/views/student_add.html', controller: 'AddEditController' })
         .when('/studentedit/:Id',
            { templateUrl: 'app/views/student_add.html', controller: 'AddEditController' })
         .when('/profile/:Id',
            { templateUrl: 'app/views/profile.html', controller: 'AddEditController' })
         .when('/classlist',
            { templateUrl: 'app/views/class_list.html', controller: 'StudentController' })
         .when('/classadd',
            { templateUrl: 'app/views/class_add.html', controller: 'StudentController' })
         .when('/departmentlist',
            { templateUrl: 'app/views/department_list.html', controller: 'StudentController' })
         .when('/departmentadd',
            { templateUrl: 'app/views/department_add.html', controller: 'StudentController' })
         .otherwise({
             redirectTo: '/home',
             templateUrl: 'app/views/student_list.html', controller: 'StudentController'
         });


    }

]);