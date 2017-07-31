angular.module('amlakApp')
    .directive("ngFileInput", function() {
        return {
            scope: true,
            link: function(scope, elm, attrs) {
                elm.bind('change', function(element, arg) {
                    var file = element.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function(loadEvent) {
                        scope.Homes.choosePictures(loadEvent.target.result, file);
                    };
                    reader.readAsDataURL(file);
                    /*var reader  = new FileReader();

                    reader.addEventListener("load", function () {
                        scope.Images.push(reader.result);
                    }, false);

                    if (file) {
                        reader.readAsDataURL(file);
                    }*/
                });
            }
        };
    })
    /*.directive("hamidTable", ['Home', '$location', '$cordovaImagePicker', '$base64', '$cordovaFile','$http',
        function(Home, $location, $cordovaImagePicker, $base64, $cordovaFile, $http) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './views/hamid-table.html',
            scope: true,
        };
    }])*/
    .controller('IndexCtrl', ['$scope', '$location', '$timeout', 'Home', 'dataService',
        function($scope, $location, $timeout, Home, dataService) {
            "use strict";
            $scope.indexData = dataService.indexData;

            $scope.Homes = {
                /**
                 * @return {boolean}
                 */
                /*PagingHome: function($index) {
                    return ($index >= (($scope.options.ProCurrentPage * $scope.options.HomePaging[0]) - $scope.options.HomePaging[0])
                        && $index < ($scope.options.ProCurrentPage * $scope.options.HomePaging[0]));
                },*/
                ShowUpdateDialog: function(row) {
                    $scope.indexData.AddNew = row.id;
                    $scope.indexData.newPro.id = row.id;
                    $scope.indexData.newPro.name = row.name;
                    $scope.indexData.newPro.area = row.area;
                    $scope.indexData.newPro.price = row.price;
                },
                ChangeOrder: function(OrderBy) {
                    if (OrderBy === $scope.indexData.TableOrder) {
                        $scope.indexData.TableOrder = '-' + OrderBy;
                    } else {
                        $scope.indexData.TableOrder = OrderBy;
                    }
                },
                searchTable: function(row) {
                    var ret = true;
                    angular.forEach($scope.indexData.searchArr, function(searchVal, searchKey) {
                        if (row[searchKey]) {
                            ret = !!(row[searchKey].toString().toLowerCase()).includes(searchVal.toLowerCase());

                            if (!ret) {
                                return ret;
                            }
                        }
                    });
                    return ret;
                },
                RemoveHome: function(id) {
                    var data = {
                        data: {
                            action: 'RemoveHome',
                            id: id
                        }
                    };
                    Home.query(data, function(succ) {
                        if (succ.length > 0) {
                            for (var i = 0; i < $scope.indexData.options.columns.body.length; i++) {
                                if ($scope.indexData.options.columns.body[i] && $scope.indexData.options.columns.body[i]["id"] === id) {
                                    $scope.indexData.options.columns.body.splice(i, 1);

                                    break;
                                }
                            }
                        }
                    });
                },
                AddHome: function() {
                    var data = {
                        data: {
                            action: 'AddHome',
                            home: $scope.indexData.newPro
                        }
                    };

                    $scope.indexData.FormData = new FormData();
                    $scope.indexData.FormData.append('data[action]', 'AddHome');

                    for (var pic in $scope.indexData.FormDataPic) {
                        if ($scope.indexData.FormDataPic[pic]) {
                            $scope.indexData.FormData.append('Images[]', $scope.indexData.FormDataPic[pic]);
                        }
                    }

                    var keys = Object.keys($scope.indexData.newPro);
                    for (var index in keys) {
                        if ($scope.indexData.newPro[keys[index]]) {
                            $scope.indexData.FormData.append('data[home][' + keys[index] + ']', $scope.indexData.newPro[keys[index]]);
                        }
                    }

                    // $scope.indexData.FormData.append('data', JSON.stringify(data));

                    Home.query($scope.indexData.FormData, function(succ) {
                        if (succ.length > 0) {
                            $scope.indexData.newPro.Images = succ.Images;
                            // $scope.indexData.newPro.id = parseInt(succ[0]);
                            $scope.indexData.options.columns.body.push($scope.indexData.newPro);
                            $scope.indexData.newPro = {
                                id: ""
                            };
                            $scope.indexData.AddNew = false;
                        }
                    });
                },
                GetList: function() {
                    $scope.indexData.FormData = new FormData();
                    $scope.indexData.FormData.append('data[action]', 'GetList');

                    Home.query($scope.indexData.FormData, function(Homes) {
                        $scope.indexData.options.columns.body = Homes;
                        for (var i = 0; i < $scope.indexData.options.columns.body.length; i++) {
                            $scope.indexData.options.columns.body[i]["id"] = parseInt($scope.indexData.options.columns.body[i]["id"]);
                            $scope.indexData.options.columns.body[i].pictures = JSON.parse($scope.indexData.options.columns.body[i].pictures);
                            // $scope.indexData.options.columns.body[i]["price"] = parseInt($scope.indexData.options.columns.body[i]["price"]);
                        }

                        $scope.indexData.options.columns.head = angular.copy($scope.indexData.options.columns.body[0]);
                        $scope.indexData.netError = false;
                    }, function(err) {
                        $scope.indexData.netError = true;
                    });
                },
                UpdateHome: function() {
                    var data = {
                        data: {
                            action: 'UpdateHome',
                            home: $scope.indexData.newPro
                        }
                    };
                    Home.query(data, function(succ) {
                        if (succ.length > 0) {
                            for (var i = 0; i < $scope.indexData.options.columns.body.length; i++) {
                                if ($scope.indexData.options.columns.body[i]["id"] === $scope.indexData.newPro.id) {
                                    $scope.indexData.options.columns.body[i] = $scope.indexData.newPro;
                                    $scope.indexData.newPro = {
                                        id: ""
                                    };
                                    $scope.indexData.AddNew = false;

                                    break;
                                }
                            }
                        }
                    });
                },
                clearSearch: function() {
                    $scope.indexData.searchArr = {};
                    for (var cellIndex = 0; cellIndex < $scope.indexData.options.columns.body.length; cellIndex++) {
                        delete $scope.indexData.options.columns.body[cellIndex]["show"];
                    }
                },
                go: function(pId) {
                    window.localStorage.setItem('OneHome', pId);
                    $location.path('/OneHome');
                },
                removePicture: function(Index) {
                    $scope.indexData.mycarouselIndex = $scope.indexData.mycarouselIndex - 1;

                    $scope.indexData.newPro.pictures.splice(Index, 1);
                    $scope.indexData.ImagesForUpload.splice(Index, 1);
                },
                choosePictures: function(img, Picture) {
                    $scope.indexData.FormDataPic = ($scope.indexData.FormDataPic) ? $scope.indexData.FormDataPic : [];
                    $scope.indexData.FormDataPic.push(Picture);

                    var image = new Image();
                    image.src = img;
                    image.onload = function() {
                        $scope.indexData.ImagesForUpload.push(this.src);
                        $scope.indexData.mycarouselIndex = $scope.indexData.ImagesForUpload.length - 1;

                        $scope.indexData.$apply();
                    };
                }
            };

            if(($scope.indexData.options.columns.body && $scope.indexData.options.columns.body.length <= 0) ||
                !$scope.indexData.options.columns.body){
                $scope.Homes.GetList();
            }else{
                $scope.indexData.netError = false;
            }
        }]);
