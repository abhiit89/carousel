/**
 * Created by abhinav on 2/9/16.
 */

(function () {
    "use strict";
    angular.module("digiapt").directive("clickImage", function () {
        return {
            restrict: "A",
            scope: {
                name: "=",
                selected: "=",
                image: "="
            },
            link: function ($scope, element, attrs) {
                element.on("click", function () {
                    element.parent().addClass(" bottom-right glyphicon glyphicon-ok");
                    $scope.selected = true;
                    $scope.image = $scope.name;
                })
            }
        }
    });
})();