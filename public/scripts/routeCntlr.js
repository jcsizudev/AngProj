/**
*  Module
*
* Description
*/
angular.module('myApp').
  controller('MainController', ['$scope', function ($scope) {
    $scope.msg = "ようこそWINGSプロジェクトへ";
  }]).
  controller('ArticlesController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]).
  controller('SearchController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.keyword = $routeParams.keyword;
  }]);