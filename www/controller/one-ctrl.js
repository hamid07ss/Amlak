angular.module('amlakApp')
    .controller('oneCtrl', ['$scope', '$location', 'Home', 'dataService', function($scope, $location, Home, dataService) {
        "use strict";
        $scope.PId = window.localStorage.getItem('OneHome');

        $scope.onData = dataService.oneData;
        $scope.onData = ($scope.onData.PId === $scope.PId)?'':dataService.oneDataDefault;
        $scope.onData.PId = $scope.PId;
        $scope.allLoaded = false;

        $scope.home = {
            GetOneHome: function(PId) {
                $scope.onData.FormData = new FormData();
                $scope.onData.FormData.append('data[action]', 'GetOneHome');
                $scope.onData.FormData.append('data[id]', PId);

                Home.query($scope.onData.FormData, function(Homes) {
                    $scope.onData.options.details = Homes[0];
                    $scope.onData.options.more = Homes[1];

                    $scope.onData.options.pictures = JSON.parse(Homes[0].pictures);
                    $scope.onData.netError = false;
                }, function(err) {
                    $scope.onData.netError = true;
                });
            }
        };

        if(!$scope.onData.options.details || ($scope.onData.options.details && $scope.onData.options.pictures.length < 0)){
            $scope.home.GetOneHome($scope.onData.PId);
        }else{
            $scope.onData.netError = false;
        }

        $scope.goBack = function() {
            $location.path('/');
        };
    }]);
