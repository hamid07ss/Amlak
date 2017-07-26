angular.module('amlakApp')
  .directive("hamidTable", ['Home', '$location', function(Home, $location) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './views/hamid-table.html',
      scope: true,
      controller: function($scope) {
        $scope.AddNew = false;
        $scope.EditId = 0;
        $scope.SearchForm = false;
        $scope.searchArr = {};
        $scope.TableOrder = 'id';
        $scope.newPro = {
          id: ""
        };
        $scope.cellNames = {
          id: {
            name: 'id',
            searchable: false
          },
          name: {
            name: 'نام',
            searchable: true
          },
          area: {
            name: 'توضیحات',
            searchable: true
          },
          price: {
            name: 'قیمت',
            searchable: true
          }
        };
        $scope.options = [];
        $scope.options.columns = [];
        $scope.options.HomePaging = [5, 25, 50, 100];
        $scope.options.ProCurrentPage = 1;
        $scope.options.HomePrinted = 0;

        $scope.Homes = {
          /**
           * @return {boolean}
           */
          PagingHome: function($index) {
            return ($index >= (($scope.options.ProCurrentPage * $scope.options.HomePaging[0]) - $scope.options.HomePaging[0])
              && $index < ($scope.options.ProCurrentPage * $scope.options.HomePaging[0]));
          },
          ShowUpdateDialog: function(row) {
            $scope.AddNew = row.id;
            $scope.newPro.id = row.id;
            $scope.newPro.name = row.name;
            $scope.newPro.area = row.area;
            $scope.newPro.price = row.price;
          },
          ChangeOrder: function(OrderBy) {
            if (OrderBy === $scope.TableOrder) {
              $scope.TableOrder = '-' + OrderBy;
            } else {
              $scope.TableOrder = OrderBy;
            }
          },
          searchTable: function(row) {
            console.log(row.id);
            var ret = true;
            angular.forEach($scope.searchArr, function(searchVal, searchKey) {
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
                for (var i = 0; i < $scope.options.columns.body.length; i++) {
                  if ($scope.options.columns.body[i] && $scope.options.columns.body[i]["id"] === id) {
                    $scope.options.columns.body.splice(i, 1);

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
                home: $scope.newPro
              }
            };
            Home.query(data, function(succ) {
              if (succ.length > 0) {
                $scope.newPro.id = parseInt(succ[0]);
                $scope.options.columns.body.push($scope.newPro);
                $scope.newPro = {
                  id: ""
                };
                $scope.AddNew = false;
              }
            });
          },
          GetList: function() {
            var data = {
              "data": {
                "action": 'GetList'
              }
            };
            Home.query(data, function(Homes) {
              $scope.options.columns.body = Homes;
              for (var i = 0; i < $scope.options.columns.body.length; i++) {
                $scope.options.columns.body[i]["id"] = parseInt($scope.options.columns.body[i]["id"]);
                // $scope.options.columns.body[i]["price"] = parseInt($scope.options.columns.body[i]["price"]);
              }

              $scope.options.columns.head = angular.copy($scope.options.columns.body[0]);
            });
          },
          UpdateHome: function() {
            var data = {
              data: {
                action: 'UpdateHome',
                home: $scope.newPro
              }
            };
            Home.query(data, function(succ) {
              if (succ.length > 0) {
                for (var i = 0; i < $scope.options.columns.body.length; i++) {
                  if ($scope.options.columns.body[i]["id"] === $scope.newPro.id) {
                    $scope.options.columns.body[i] = $scope.newPro;
                    $scope.newPro = {
                      id: ""
                    };
                    $scope.AddNew = false;

                    break;
                  }
                }
              }
            });
          },
          clearSearch: function() {
            $scope.searchArr = {};
            for (var cellIndex = 0; cellIndex < $scope.options.columns.body.length; cellIndex++) {
              delete $scope.options.columns.body[cellIndex]["show"];
            }
          },
          go: function(pId) {
            $location.path(pId);
          }
        };

        $scope.Homes.GetList();
      }
    };
  }]);
