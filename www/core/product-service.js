


angular.module('reqService', ['ngResource']).factory('Home', ['$resource',
    function ($resource, data) {
        return $resource('http://176.9.220.131/index.php', {}, {
            query: {
                method: 'POST',
                headers: {'Content-Type': undefined},
                data: data,
                transformRequest: angular.identity,
                isArray: true
            }
        });
    }]);
