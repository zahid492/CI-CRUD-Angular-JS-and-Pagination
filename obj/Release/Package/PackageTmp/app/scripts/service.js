X.service('Basic_InformationService', function ($http, domain) {
    //Create new record
    this.post = function (basicInformations) {
        var request = $http({
            method: "post",
            url: domain + "/Basic_Information/",
            data: basicInformations
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get(domain + "/Basic_Information(" + Id + ")/?$expand=Class,Department");
    }

    //Get All Employees
    this.getBasicInformation = function () {
        return $http.get(domain + "/Basic_Information/?$expand=Class,Department");
    }


    //Update the Record
    this.put = function (id, basicInformations) {
        var request = $http({
            method: "put",
            url: domain + "Basic_Information("+id+")/",
            data: basicInformations
        });
        return request;
    }
    //Delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: "delete",
            url: domain + "/Basic_Information("+Id+")/"
        });
        return request;
    }

  //  getperpagedatashown
    this.getperpagedatashown = function (pagedata) {
        return $http.get(domain + "/Basic_Information/?$expand=Class,Department&$inlinecount=allpages&$skip=0&$top="+pagedata);
    }



    this.getpagination = function (pageno,perpagedata) {
        return $http.get(domain + "/Basic_Information/?$expand=Class,Department&$inlinecount=allpages&$skip="+pageno+"&$top="+perpagedata);
    }


});

X.service('DepartmentService', function ($http, domain) {
    //Create new record
    this.post = function (Department) {
        var request = $http({
            method: "post",
            url: domain + "/Departments/",
            data: Department
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get(domain + "/Departments(" + Id + ")/");
    }

    //Get All Employees
    this.getallDepartment = function () {
        return $http.get(domain + "/Departments/");
    }


    //Update the Record
    this.put = function (Id, Department) {
        var request = $http({
            method: "put",
            url: domain + "/Departments(" + Id + ")/",
            data: Department
        });
        return request;
    }
    //Delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: "delete",
            url: domain + "/Departments(" + Id + ")/"
        });
        return request;
    }
});


X.service('ClassService',function ($http,domain) {
 //Create new record
        this.post = function (Class) {
            var request = $http({
                method: "post",
                url: domain+"/Classes/",
                data: Class
            });
            return request;
        }
        //Get Single Records
        this.get = function (Id) {
            return $http.get(domain + "/Classes(" + Id + ")/");
        }

        //Get All Employees
        this.getallClass = function () {
            return $http.get(domain + "/Classes/");
        }


        //Update the Record
        this.put = function (Id,Classes) {
            var request = $http({
                method: "put",
                url: domain + "/Classes(" + Id + ")/",
                data: Classes
            });
            return request;
        }
        //Delete the Record
        this.delete = function (Id) {
            var request = $http({
                method: "delete",
                url: domain + "/Classes(" + Id + ")/"
            });
            return request;
        }
    });




