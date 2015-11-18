X.service('Basic_InformationService', function ($http, domain) {
    //Create new record
    this.post = function (Id,basicInformations) {
        var request = $http({
            method: "post",
            url: domain + "/studentapi/student/"+Id,
            data: basicInformations
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get(domain + "/studentapi/student/"+Id);
    }

    //Get All Employees
    this.getBasicInformation = function () {
        return $http.get(domain +"/studentapi/student/");
    }


    //Update the Record
    this.put = function (basicInformations) {
        var request = $http({
            method: "put",
            url: domain +"/studentapi/student/",
            data: basicInformations
        });
        return request;
    }
    //Delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: "delete",
            url: domain + "/studentapi/student/"+Id
        });
        return request;
    }

  //  getperpagedatashown
    this.getperpagedatashown = function (pagedata) {
        return $http.get(domain + "/studentapi/?$expand=Class,Department&$inlinecount=allpages&$skip=0&$top="+pagedata);
    }



    this.getpagination = function (pageno,perpagedata) {
        return $http.get(domain + "/studentapi/?$expand=Class,Department&$inlinecount=allpages&$skip="+pageno+"&$top="+perpagedata);
    }


});

X.service('DepartmentService', function ($http, domain) {
    //Create new record
    this.post = function (Department) {
        var request = $http({
            method: "post",
            url: domain + "/departmentapi/department/",
            data: Department
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get(domain + "/departmentapi/department/"+Id);
    }

    //Get All Employees
    this.getallDepartment = function () {
        return $http.get(domain + "/departmentapi/department/");
    }


    //Update the Record
    this.put = function (Id, Department) {
        var request = $http({
            method: "put",
            url: domain + "/departmentapi/department/"+Id,
            data: Department
        });
        return request;
    }
    //Delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: "delete",
            url: domain + "/departmentapi/department/"+Id
        });
        return request;
    }
});


X.service('ClassService',function ($http,domain) {
 //Create new record
        this.post = function (Class) {
            var request = $http({
                method: "post",
                url: domain+"/classapi/class/",
                data: Class
            });
            return request;
        }
        //Get Single Records
        this.get = function (Id) {
            return $http.get(domain + "/classapi/class/"+Id);
        }

        //Get All Employees
        this.getallClass = function () {
            return $http.get(domain + "/classapi/class/");
        }


        //Update the Record
        this.put = function (Id,Classes) {
            var request = $http({
                method: "put",
                url: domain + "/classapi/class/"+Id,
                data: Classes
            });
            return request;
        }
        //Delete the Record
        this.delete = function (Id) {
            var request = $http({
                method: "delete",
                url: domain + "/classapi/class/"+Id
            });
            return request;
        }
    });




