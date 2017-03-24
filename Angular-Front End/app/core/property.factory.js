(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('propertyFactory', propertyFactory);

    propertyFactory.$inject = ['$state', '$http', '$q'];

    /* @ngInject */
    function propertyFactory($state, $http, $q) {
        var service = {
            getProperty: getProperty,
            postNewProperty: postNewProperty,
            getResults: getResults
        };

        return service;

        ////////////////

        //Filters Properties from Search.html
        function getProperty(City, Zip, minRent, maxRent, Bedroom, Bathroom) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:50272/api/properties/search',
                params: {
                    'City': City,
                    'Zip': Zip,
                    'minRent': minRent,
                    'maxRent': maxRent,
                    'Bedroom': Bedroom,
                    'Bathroom': Bathroom
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found :(')
                }
                // error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });

            return defer.promise;

        }
        //Gets properties by Property Managers UserName
        function getResults(userName) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:50272/api/Users/',
                params: {
                    'UserName': userName
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found :(')
                }

                // error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });
            return defer.promise;
        }

        //posts new property by user
        function postNewProperty(property) {
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: "http://localhost:50272/api/Properties",

                data: property

            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found :(')
                }

                // error code
            }, function(error) {
                console.log(error);
                defer.reject(error);
            });
            return defer.promise;
        }

    }
})();
