//search.controller. get--query with search fields


(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['propertyFactory', '$state', 'toastr'];

    /* @ngInject */

    function SearchController(propertyFactory, $state, toastr) {
        var vm = this;
        vm.title = 'SearchController';
        //vm.getProperties = [''];

        //activate();

        ////////////////
        //gets search on main search page from any guest
        vm.getSearch = function(City, Zip, minRent, maxRent, Bedrooms, Bathrooms) {
            propertyFactory.getProperty(City, Zip, minRent, maxRent, Bedrooms, Bathrooms).then(
                function(response) {
                    vm.getProperties = response.data;

                    toastr.success('We have data!');
                    console.log(response.data);
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There is a problem:' + error);
                    } else {
                        toastr.info('no data found');
                    }
                }

            )
        }
    }
})();
