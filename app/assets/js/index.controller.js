/**
 * Created by abhinav on 31/8/16.
 */
(function () {
    "use strict";
    angular.module("digiapt").
    controller("rootController", ["$scope", function ($scope) {

    }])
        .controller("resultController",["$scope", "$stateParams",function ($scope,$stateParams) {
        alert(JSON.stringify($stateParams.resultData));
    }]);
})();