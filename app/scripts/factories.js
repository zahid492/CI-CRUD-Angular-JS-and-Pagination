X.factory('Student', ['$resource',
    function ($resource) {
        var resource = $resource('http://localhost:2461/odata/Basic_Information(:Id)?$expand=Department,Class', {},
            { get: { method: 'GET', isObject: true } },
            { delete: { method: 'DELETE' } },
            
            { put: { method: 'PUT', isObject: true } }
            );


        return resource;

    }
]);

X.service('Department', ['$resource', function ($resource) {
    var resource = $resource('http://localhost:2461/odata/Departments');

    return resource;



    

}
]);