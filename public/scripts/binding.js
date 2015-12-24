/**
*  Module
*
* Description
*/
angular.module('myApp', ['ngSanitize']).
  controller('MyController', ['$scope', '$sce', function($scope, $sce){
    //$scope.myName = "anyone";
    /*
    $scope.memo = '<p onmouseover="alert(\'OK\');">ようこそ</p>'
      + '<a href="http://www.wings.msn.to">WINGSへ</a>'
      + '<script>var x = 1;</script>'
      + '<button>応募</button>';
    */
    var memo = '<p onmouseover="alert(\'OK\');">ようこそ</p>'
      + '<a href="http://www.wings.msn.to">WINGSへ</a>'
      + '<script>var x = 1;</script>'
      + '<button>応募</button>';
    $scope.memo  = $sce.trustAsHtml(memo);
  }]);
