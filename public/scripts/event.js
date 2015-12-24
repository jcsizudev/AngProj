/**
*  Module
*
* Description
*/
angular.module('myApp', []).
  controller('MyController', ['$scope', function ($scope) {
    $scope.greeting = "こんにちはＸＸＸさん";

    $scope.onclick = function ($event) {
      $scope.greeting = "こんにちは" + $scope.myName + "さん";
      console.log($event);
    }
  }]);