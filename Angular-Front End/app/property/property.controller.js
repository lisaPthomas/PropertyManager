//PUT/Delete/Post/Get from the property manager--> User Factory

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('PropertyController', PropertyController);

    PropertyController.$inject = ['propertyFactory', 'UserFactory', '$state', 'toastr', 'localStorageService'];

    /* @ngInject */
    function PropertyController(propertyFactory, UserFactory, $state, toastr, localStorageService) {
        var pc = this;
        pc.title = 'PropertyController';

        //activate();

        ////////////////
        //function controller to addProperty by UserId
        pc.addProperty = function() {

                var userIdStorage = localStorageService.get("saveUserInfo");

                var propertyObject = {
                    PropertyName: pc.PropertyName,
                    Address1: pc.Address1,
                    Address2: pc.Address2,
                    City: pc.City,
                    State: pc.State,
                    Zip: pc.Zip,
                    ContactPhone: pc.ContactPhone,
                    Rent: pc.Rent,
                    SqFootage: pc.SqFootage,
                    Bedroom: pc.Bedroom,
                    PetFriendly: pc.PetFriendly,
                    LeaseTerm: pc.LeaseTerm,
                    PropertyImage: pc.PropertyImage,
                    UserId: userIdStorage
                }


                propertyFactory.postNewProperty(propertyObject).then(
                    function(response) {
                        console.log(response);
                    }
                )
            }
            //function to get properties listed by user by userName or UserId ----need to finish
        pc.getSearchByUser = function() {
            var userNameStorage = localStorageService.get("saveUserName");

            var propertyOwnerObject = {
                PropertyName: pc.PropertyName,
                Address1: pc.Address1,
                Address2: pc.Address2,
                City: pc.City,
                State: pc.State,
                Zip: pc.Zip,
                Rent: pc.Rent,
                SqFootage: pc.SqFootage,
                Bedroom: pc.Bedroom,
                PetFriendly: pc.PetFriendly,
                LeaseTerm: pc.LeaseTerm,
                PropertyImage: pc.PropertyImage,
                UserName: userNameStorage
            }
            propertyFactory.getResults(userNameStorage).then(
                function(response) {
                    pc.getObject = response.data[0].properties;
                    console.log(response);

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

        //login to filter users to different pages
        pc.filterUsers = function(userName) {
            UserFactory.getResults(userName).then(
                function(response) {
                    localStorageService.set("saveUserInfo", response.data[0].userId);
                    localStorageService.set("saveUserName", response.data[0].userName);
                    pc.getUsers = response.data[0].isPropertyManager;
                    console.log(pc.getUsers);
                    if (pc.getUsers == true) {
                        $state.go('propDetail');
                    } else {
                        $state.go('searchGrid');
                    }
                }

            )
        }

        //Delete Function by Property Id
        pc.deleteProperty = function(propertyId) {
            UserFactory.deletePost(propertyId).then(function(response) {
                    //activate();
                },
                function(error) {})
        }

        pc.updateProperty = function(propertyId, object) {
            UserFactory.updatePost(propertyId, object).then(function(response) {

                },
                function(error) {})
        }

    }
})();
