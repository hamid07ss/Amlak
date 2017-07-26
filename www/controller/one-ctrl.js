angular.module('amlakApp')
  .directive("hamidTable", ['Product', '$location', function(Product, $location) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './views/one.html',
      scope: true,
      controller: function($scope) {
        console.log($scope);
        /*$scope.AddNew = false;
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
          p_name: {
            name: 'نام',
            searchable: true
          },
          p_desc: {
            name: 'توضیحات',
            searchable: true
          },
          p_price: {
            name: 'قیمت',
            searchable: true
          }
        };
        $scope.options = [];
        $scope.options.columns = [];
        $scope.options.productPaging = [5, 25, 50, 100];
        $scope.options.ProCurrentPage = 1;
        $scope.options.productPrinted = 0;

        $scope.products = {
          /!**
           * @return {boolean}
           *!/
          PagingProduct: function($index) {
            return ($index >= (($scope.options.ProCurrentPage * $scope.options.productPaging[0]) - $scope.options.productPaging[0])
              && $index < ($scope.options.ProCurrentPage * $scope.options.productPaging[0]));
          },
          ShowUpdateDialog: function(row) {
            $scope.AddNew = row.id;
            $scope.newPro.id = row.id;
            $scope.newPro.p_name = row.p_name;
            $scope.newPro.p_desc = row.p_desc;
            $scope.newPro.p_price = row.p_price;
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
          RemoveProduct: function(id) {
            var data = {
              data: {
                action: 'RemoveProduct',
                id: id
              }
            };
            Product.query(data, function(succ) {
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
          AddProduct: function() {
            var data = {
              data: {
                action: 'AddProduct',
                product: $scope.newPro
              }
            };
            Product.query(data, function(succ) {
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
          GetProducts: function() {
            var data = {
              "data": {
                "action": 'GetProducts'
              }
            };
            Product.query(data, function(products) {
              $scope.options.columns.body = products;
              for (var i = 0; i < $scope.options.columns.body.length; i++) {
                $scope.options.columns.body[i]["id"] = parseInt($scope.options.columns.body[i]["id"]);
                $scope.options.columns.body[i]["p_price"] = parseInt($scope.options.columns.body[i]["p_price"]);
              }

              $scope.options.columns.head = angular.copy($scope.options.columns.body[0]);
            });
          },
          UpdateProduct: function() {
            var data = {
              data: {
                action: 'UpdateProduct',
                product: $scope.newPro
              }
            };
            Product.query(data, function(succ) {
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

        $scope.products.GetProducts();*/
      }
    };
  }]);
