/**
*  Module
*
* Description
*/
angular.module('myApp', [])
  .directive('myMenu', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      template: '<div class="menu">'
        + '<span ng-click="ontoggle()">----- </span>'
        + '<a href="{{src.path}}">{{src.title}}</a>'
        + '<ul ng-show="show"></ul>'
        + '</div>',
      replace: true,
      compile: function (element, attrs) {
        var template = '<li ng-repeat="item in src.subs">'
          + '<my-menu src="item"></my-menu>'
          + '</li>';
        var link;
        return function (scope, element, attrs) {
          link = link || $compile(template);
          link(scope, function (cloned) {
            element.find('ul').append(cloned);
          });
          scope.ontoggle = function () {
            scope.show = !scope.show;
          };
        };
      }
    };
  }])
  .controller('MyController', ['$scope', function ($scope) {
    $scope.menu = {
      title: 'ホーム',
      path: 'index.html',
      subs: [
        {
          title: '書籍情報',
          path: 'books.html'
        },
        {
          title: '記事一覧',
          path: 'article.html',
          subs: [
            {
              title: 'JavaScript関連',
              path: 'js.html',
              subs: [
                {
                  title: 'jQuery',
                  path: 'jq.html'
                },
                {
                  title: 'AngularJS',
                  path: 'angular.html'
                }
              ]
            },
            {
              title: 'Java関連',
              path: 'java.html'
            },
            {
              title: 'データベース関連',
              path: 'db.html'
            }
          ]
        }
      ]
    };
  }]);