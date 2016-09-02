/**
 * Created by abhinav on 31/8/16.
 */
(function () {
    "use strict";
    angular.module("digiapt").controller("rootController", ["$scope", "$state", function ($scope, $state) {
        $scope.imageSelected = false;
        $scope.carousel = [];
        $scope.imageName = "";
        $scope.optionThree = ["car1.jpg", "car2.jpg", "car3.jpg"];
        $scope.optionTwo = ["hack1.jpg", "hack2.jpg", "hack3.jpg"];
        $scope.optionOne = ["phone1.jpg", "phone2.jpg", "phone3.jpg"];
        $scope.carousel = $scope.optionOne;
        $scope.formData = "phone";
        $scope.question = "What do you like most??";

        $scope.updateCarousel = function (formData) {
            $scope.carousel = [];
            switch (formData) {
                case "phone":
                    $scope.carousel = $scope.optionOne;
                    break;
                case "car":
                    $scope.carousel = $scope.optionThree;
                    break;
                case "hacking":
                    $scope.carousel = $scope.optionTwo;
                    break;
                default:
                    break;
            }
        }

        $scope.sendData = function () {
            $scope.sendSelectedData = {
                "question": $scope.question,
                "option": $scope.formData,
                "image": $scope.imageName
            }
            $state.go("result", {resultData: $scope.sendSelectedData});
        }

    }])
        .controller("resultController", ["$scope", "$stateParams", function ($scope, $stateParams) {
            $scope.result = $stateParams.resultData;
        }]);
})();