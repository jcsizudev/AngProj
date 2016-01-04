/**
*  Module
*
* Description
*/
angular.module('myApp', []).
  directive('myHelloName', function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div>こんにちは、<span ng-transclude></span>！</div>'
    };
  });
