X.controller('StudentController', ['$scope', 'Student', 'Department', '$routeParams','$location', function ($scope, Student, Department, $routeParams,$location) {
    $scope.v = 'test value';
    
    $scope.profileid = $routeParams.Id;
    console.log($scope.profileid);
    ////////////////RETRIVE ALL DATA FROM DB///////////////


    $scope.studentfun = function (response) {
        Student.get({ Id: $scope.profileid },function (response) {
            $scope.students = [];
            console.log("List of Student function");
            $scope.students = response.value;
            console.log($scope.students);
            return $scope.students;

        });

    }

    ///////RETRIVE DATA FOR DEPARTMENT////////////////////
    $scope.deptfun = function (response) {
        Department.get(function (response) {
            console.log("List of Deptartment Function");
            $scope.depts = response.value;
            console.log($scope.depts);
        });
        return $scope.depts;
    };

    function init() {
   /////////////RETRIVE DATA FOR STUDENT/////////
            $scope.studentfun();
            $scope.deptfun();
           }

////////////////////////SAVE INTO DB////////////////

    $scope.student = { Name:'',Phone:'',Class_id:'',Department_id:''};
    $scope.save = function () {
        console.log($scope.student.Name);
        console.log($scope.student.Phone);
        console.log($scope.student.Class_id);
        console.log($scope.student.Department_id);
        Student.save($scope.student, function (response) {
            $scope.addstudent = response.value;
            console.log($scope.addstudent);
            $location.path('/studentlist');
        });
    };          

/////////////////////////////DELETE//////////////////
    $scope.Stddelete = function (profileId) {
        Student.delete({ Id: profileId });
        console.log("DELETE");
        $location.path('/home');
    };

    init();



    }
]);


X.controller('ProfileController', ['$scope', 'Student', 'Department', '$routeParams','$location', function ($scope, Student, Department, $routeParams,$location) {
    ////////////RETRIVE SPECIFIC DATA INTO DB/////////////

    $scope.profileid = $routeParams.Id;
    console.log($scope.profileid);
    Student.get({ Id: $scope.profileid }, function (response) {
        console.log("SPECIFIC DATA");
        $scope.student = [];
        $scope.Name = response.Name;
        $scope.Phone = response.Phone;
        $scope.Department_Name = response.Department.Department_Name;
        $scope.Class_Name = response.Class.Class1;
        console.log($scope.student);

    });
}
]);

X.controller('StudentAddEditController', ['$scope', 'Student', 'Department', '$routeParams', '$location', function ($scope, Student, Department, $routeParams, $location) {
    ////////////RETRIVE SPECIFIC DATA INTO DB/////////////

    $scope.profileid = $routeParams.Id;
    console.log($scope.profileid);
    Student.get({ Id: $scope.profileid }, function (response) {
        console.log("SPECIFIC DATA");
        $scope.student = response.Data;
        console.log($scope.student);

    });







}
]);