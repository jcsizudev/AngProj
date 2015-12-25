/**
*  Module
*
* Description
*/
angular.module('myApp', []).
  controller('MyController', ['$scope', '$http', function ($scope, $http) {
    $scope.onclick = function () {
      $http({
        method: 'GET',
        url: 'httptest',
        params: {name: $scope.name}
      }).success(function (data, status, headers, config) {
        $scope.result = data;
      }).error(function (data, status, headers, config) {
        $scope.result = '通信に失敗しました。';
      });
    };

    $scope.sort = function (exp, reverse) {
      $scope.members = $filter('orderBy')($scope.members, exp, reverse);
    };
  }]);
