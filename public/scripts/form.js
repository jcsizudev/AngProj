/**
*  Module
*
* Description
*/
angular.module('myApp', []).
  controller('MyController', ['$scope', function ($scope) {
    $scope.onsubmit = function ($event) {
      console.log('メールアドレス：' + $scope.user.mail);
      console.log('パスワード：' + $scope.user.password);
      console.log('名前（漢字）' + $scope.user.name);
      console.log('備考：' + $scope.user.memo);
    };
  }]);