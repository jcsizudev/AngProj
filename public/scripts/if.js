/**
*  Module
*
* Description
*/
angular.module('myApp', []).
  controller('MyController', ['$scope', function ($scope) {
    $scope.show = true;
    $scope.author = {
      name: 'Yamada, Tarou',
      gender: 'male',
      birth: new Date(1950, 11, 4)
    };

    $scope.onclick = function ($event) {
      angular.element(document.getElementById('panel')).css({
        backgroundColor: '#000',
        color: '#fff'
      });
    };
  }]);