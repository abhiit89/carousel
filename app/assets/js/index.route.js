/**
 * Created by abhinav on 2/9/16.
 */

(function () {
    "use strict";
    angular.module("digiapt").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "/app/assets/js/partials/index.tmpl.html",
                controller: "rootController"
            }).
        state('result', {
            url: '/result',
            templateUrl: '/app/assets/js/partials/result.tmpl.html',
            params: {
                resultData: null,
            },
            controller: "resultController"
        });
    }]);
})();