


angular.module('reqService', ['ngResource']).factory('Product', ['$resource',
    function ($resource, data) {
        return $resource('http://server.dev/projecttest/index.php', {}, {
            query: {
                method: 'POST',
                params: data,
                transformRequest: function (data) {
                    return angular.toJson(data);
                },
                isArray: true
            }
        });
    }]);
