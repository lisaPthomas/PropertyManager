(function() {
    'use strict';


    var app = angular.module('myApp', ['ui.router', 'toastr', 'LocalStorageModule']);
    //app.value("apiUrl", "http://localhost:50272/api/");

    app.config(function($stateProvider, $urlRouterProvider) {

        // for any unmatched url, redirect to /search

        $urlRouterProvider.otherwise("/search");

        $stateProvider
            .state("search", {
                url: "/search",
                templateUrl: "app/search/search.html",
                controller: "SearchController",
                controllerAs: "vm"
            })

        .state("register", {
            url: "/register",
            templateUrl: "app/user/register.html",
            controller: "UserController",
            controllerAs: "vm"
        })

        .state('signIn', {
            url: "/signIn",
            templateUrl: "app/search/signIn.html",
            controller: "PropertyController",
            controllerAs: "pc"
        })

        .state('propDetail', {
                url: "/propertydetail",
                templateUrl: "app/property/property.detail.html",
                controller: "PropertyController",
                controllerAs: "pc"

            })
            .state('searchGrid', {
                url: "/searchgrid",
                templateUrl: "app/search/search.grid.html",
                controller: "SearchController",
                controllerAs: "vm"
            })

    })

})();
