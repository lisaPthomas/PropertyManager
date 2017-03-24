 (function() {
     'use strict';

     angular
         .module('myApp')
         .factory('UserFactory', UserFactory);

     UserFactory.$inject = ['$http', '$q'];

     /* @ngInject */
     function UserFactory($http, $q) {
         var service = {
             getResults: getResults,
             postProperty: postProperty,
             deletePost: deletePost,
             updatePost: updatePost
         };


         return service;

         ////////////////
         //Searches properties by UserName
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
                     defer.reject('No Data Found')
                 }

                 // error code
             }, function(error) {
                 console.log(error);
                 defer.reject(error);
             });
             return defer.promise;
         }

         //rename later --Adds new User to Users Table
         function postProperty(newProperty) {
             var defer = $q.defer();
             $http({
                 method: 'POST',
                 url: "http://localhost:50272/api/Users",

                 data: newProperty

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

         function deletePost(propertyId) {
             var defer = $q.defer();
             $http({
                 method: 'DELETE',
                 url: "http://localhost:50272/api/Properties/" + propertyId,
                 headers: {
                     "Content-Type": "application/json;charset=utf-8"
                 }
             }).then(function(response) {
                 if (typeof response.data === 'object') {
                     defer.resolve(response);
                 } else {
                     defer.reject('unable to delete')
                 }

             }, function(error) {
                 console.log(error);
                 defer.reject(error);
             });

             return defer.promise;
         }

         function updatePost(propertyId, object) {
             var defer = $q.defer();
             $http({
                 method: 'PUT',
                 url: "http://localhost:50272/api/Properties/" + propertyId,
                 data: object
             }).then(function(response) {
                 if (typeof response.data === 'object') {
                     defer.resolve(response);
                 } else {
                     defer.reject('Unable to Update')
                 }

             }, function(error) {
                 console.log(error);
                 defer.reject(error);
             });

             return defer.promise;
         }
     }
 })();
