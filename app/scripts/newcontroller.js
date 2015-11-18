X.controller('StudentController', ['$scope', 'Basic_InformationService', 'DepartmentService', 'ClassService', 'filterFilter', '$routeParams', '$location', function ($scope, Basic_InformationService, DepartmentService, ClassService,filterFilter, $routeParams, $location) {
        $scope.v = 'test value';
        $scope.profileid = $routeParams.Id;
        console.log($scope.profileid);

        ////////////////RETRIVE ALL DATA FROM DB///////////////

        //$scope.perpagedata = 3;

      
        //Function to load all Student records
        //$scope.getallstudent=function getallstudent() {
        //    var promiseGet = Basic_InformationService.getBasicInformation(); //The MEthod Call from service

        //    promiseGet.then(function(response) {
        //        $scope.Basic_Information = response.data.value;
        //        console.log($scope.Basic_Information);
        //        $scope.count = response.data.value.length;

        //        $scope.pagequantity = Math.ceil(8 / 3);
        //            $scope.totalPages = [1, 2, 3];
        //        //console.log($scope.count + $scope.perpagedata);
        //        //console.log($scope.pagequantity);


        //        },
        //        function(error) {
        //            $log.error('failure loading Employee', error);
        //        });
        //}
        // $scope.getallstudent();
        //The Save scope method use to define the Student object.


        //Method to Delete
        $scope.delete = function (profileid) {
            console.log($scope.profileid);

            var delConfirm = confirm("Are you sure you want to delete the Student " + $scope.profileid+ " ?");
            if (delConfirm == true) {
                var promiseDelete = Basic_InformationService.delete(profileid);
                promiseDelete.then(function(pl) {
                    $scope.Message = "Deleted Successfuly";
                    $scope.Id = 0;
                    $scope.Name = "";
                    $scope.Phone = 0;
                    $scope.Department_id = "";
                    $scope.Class_id = "";
                    $scope.getallstudent();
                }, function(error) {
                    console.log("Error:" + error);
                });
            }
        }

         //Clear the Scopr models

        $scope.editclicked = function (profileid) {
            console.log(profileid);
            window.location = "#/studentedit/"+profileid;
        }

    //pagedata
        $scope.perpagedatashown = function (pagedata) {
            console.log(pagedata);
            var promiseGet = Basic_InformationService.getperpagedatashown(pagedata); //The MEthod Call from service

            promiseGet.then(function (response) {
                $scope.Basic_Information = response.data.value;
                console.log($scope.Basic_Information);

            },
                function (error) {
                    $log.error('failure loading Student', error);
                });

        }

        //$scope.pagination = function (pageno,perpagedata) {
        //    console.log(pageno, perpagedata);
        //    var promiseGet = Basic_InformationService.getpagination(pageno, perpagedata); //The MEthod Call from service

        //    promiseGet.then(function (response) {
        //        $scope.Basic_Information = response.data.value;
        //        console.log($scope.Basic_Information);

        //    },
        //        function (error) {
        //            $log.error('failure loading Employee', error);
        //        });

        //}


        $scope.perpagedatashownWithPagination = function (pagedata) {


        }
        $scope.getalldepartment = function getalldepartment() {
            var promiseGet = DepartmentService.getallDepartment(); //The MEthod Call from service

            promiseGet.then(function (response) {
                $scope.Department = response.data.message;
                console.log($scope.Department);

            },
                function (error) {
                    $log.error('failure loading Student', error);
                });
        }

        $scope.getalldepartment();

        $scope.getallclass = function getallclass() {
            var promiseGet = ClassService.getallClass(); //The MEthod Call from service

            promiseGet.then(function (response) {
                $scope.Class = response.data.message;
                console.log($scope.Class);

            },
                function (error) {
                    $log.error('failure loading Class', error);
                });
        }


        $scope.getallclass();



        $scope.search = {};

        $scope.resetFilters = function () {
            // needs to be a function or it won't trigger a $watch
            $scope.search = {};
        };


      
        $scope.getallstudent = function getallstudent(pagedata) {
            $scope.$watch('search', function(newVal) {

                var promiseGet = Basic_InformationService.getBasicInformation(); //The MEthod Call from service

                promiseGet.then(function(response) {
                        $scope.Basic_Information = response.data.message;
                        console.log($scope.Basic_Information);
                        $scope.currentPage = 1;
                        $scope.totalItems = response.data.length;
                        console.log(pagedata);
                        
                    if (pagedata) {
                        $scope.entryLimit = pagedata;
                    } else {
                        $scope.entryLimit = 2;
                    }
                      //  $scope.entryLimit = pagedata; // items per page
                        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                        $scope.filtered = filterFilter($scope.Basic_Information, newVal);
                        $scope.totalItems = $scope.filtered.length;
                        console.log($scope.filtered);
                        console.log("$scope.totalItems" + $scope.totalItems);
                        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                        $scope.currentPage = 1;


                    },
                    function(error) {
                        $log.error('failure loading Student', error);
                    });


            }, true);

        }


        $scope.getallstudent();

    }
]);























X.controller('AddEditController', ['$scope', 'Basic_InformationService', 'DepartmentService', 'ClassService', '$routeParams', '$location', function ($scope, Basic_InformationService, DepartmentService, ClassService, $routeParams, $location) {
    ////////////RETRIVE SPECIFIC DATA INTO DB/////////////

    $scope.profileid = $routeParams.Id;

    $scope.IsNewRecord = 1; //The flag for the new record
    //Method to Get Single Student based on Id
    $scope.get = function (profileid) {
        var promiseGetSingle = Basic_InformationService.get(profileid);

        promiseGetSingle.then(function (response) {
            var responseData = response.data.message[0];
            console.log(responseData);
            $scope.Id = responseData.Id;
            $scope.Name = responseData.Name;
            $scope.Phone = responseData.Phone;
            $scope.Department_id = responseData.Department_id;
            $scope.Class_id = responseData.Class_id;
            $scope.Department_Name = responseData.Department_Name;
            $scope.Class_Name = responseData.Class_Name;
            $scope.IsNewRecord = 0;
            console.log($scope.Id);
            console.log($scope.Name);
            console.log($scope.Phone);
            console.log($scope.Department_id);
            console.log($scope.Class_id);


        },
            function (error) {
                console.log('failure loading Information', error);
            });
    }

    //Create the Student information to the server
    $scope.save = function (isValid) {
        var basicInformations = {
            Id: $scope.profileid,
            Name: $scope.Name,
            Phone: $scope.Phone,
            Department_id: $scope.Department_id,
            Class_id: $scope.Class_id
        };
        
        //If the flag is 1 the it si new record

        if (isValid) {
            if ($scope.IsNewRecord === 1) {
                console.log(basicInformations);
                var promisePost = Basic_InformationService.put(basicInformations);
                promisePost.then(function(response) {
                    $scope.Id = response.data.Id;
                    $scope.Message = "Save Succesfully";
                    console.log(Message);
                }, function(err) {
                    console.log("Err" + err);
                });
            } else { //Else Edit the record

                console.log(basicInformations);
                var id = $scope.profileid;
                console.log("Id is::::" + id);
                var promisePut = Basic_InformationService.post(id, basicInformations);
                promisePut.then(function(response) {
                    $scope.Message = "Updated Successfuly";
                    //loadRecords();
                }, function(err) {
                    console.log("Err" + err);
                });
            }

        } 




    };




    if ($scope.profileid != null) {

        $scope.get($scope.profileid);

    } else {
        console.log("No record found");
    }


            $scope.getalldepartment = function getalldepartment() {
            var promiseGet = DepartmentService.getallDepartment(); //The MEthod Call from service

            promiseGet.then(function (response) {
                $scope.Department = response.data.message;
                console.log($scope.Department);

            },
                function (error) {
                    $log.error('failure loading Employee', error);
                });
        }

            $scope.getalldepartment();

            $scope.getallclass = function getallclass() {
                var promiseGet = ClassService.getallClass(); //The MEthod Call from service

                promiseGet.then(function (response) {
                    $scope.Class = response.data.message;
                    console.log($scope.Class);

                },
                    function (error) {
                        $log.error('failure loading Employee', error);
                    });
            }


        $scope.getallclass();

    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.Id = 0;
        $scope.Name = "";
        $scope.Phone ="";
        $scope.Department_id = "";
        $scope.Class_id = "";


    }




}
]);



X.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

