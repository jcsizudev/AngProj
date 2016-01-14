var myApp = angular.module("myApp",[]);

myApp.controller( "MainCtrl", [ "$scope", function($scope) {
    console.log("Main Controller loaded.");

    $scope.clickedItem1 = function(){
        console.log("Clicked item 1.");
    };
    $scope.clickedItem2 = function(){
        console.log("Clicked item 2.");
    };
    $scope.myClick = function(e) {
        var elem = document.getElementById("contextmenu-node");
        console.log(e);
        angular.element(elem).css("display", "inline-block");
        angular.element(elem).css("left", e.clientX + "px");
        angular.element(elem).css("top", e.clientY + "px");
    };
}]);
/*
myApp.directive( "contextMenu", function($compile){
    contextMenu = {};
    contextMenu.restrict = "AE";
    contextMenu.link = function( lScope, lElem, lAttr ){
        lElem.on("contextmenu", function (e) {
           e.preventDefault(); // default context menu is disabled
            //  The customized context menu is defined in the main controller. To function the ng-click functions the, contextmenu HTML should be compiled.
            var ctxtmnu = lElem.append( $compile( lScope[ lAttr.contextMenu ])(lScope) );
            // The location of the context menu is defined on the click position and the click position is catched by the right click event.
            console.log("create context(" + e.clientX + "," + e.clientY + ")");
            console.log(ctxtmnu);
            //ctxtmnu.css("left", e.clientX);
            //ctxtmnu.css("top", e.clientY);
            angular.element(document.getElementById("contextmenu-node")).css("left", 500);
            angular.element(document.getElementById("contextmenu-node")).css("top", 500);
        });
        lElem.on("mouseleave", function(e){
            console.log("Leaved the div");
            // on mouse leave, the context menu is removed.
            if(angular.element(document.getElementById("contextmenu-node")) )
                angular.element(document.getElementById("contextmenu-node")).remove();
        });
    };
    return contextMenu;
});
*/
