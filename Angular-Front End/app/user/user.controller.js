//Controller to add new user to users table

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('UserController', UserController);

    UserController.$inject = ['UserFactory', 'toastr'];

    /* @ngInject */
    function UserController(UserFactory, toastr) {
        var vm = this;
        vm.title = 'UserController';

        //activate();

        ////////////////

        vm.getRegisterUsers = function() {
            var newUserData = {
                'UserName': vm.UserName,
                'FirstName': vm.FirstName,
                'LastName': vm.LastName,
                'Email': vm.Email,
                'IsPropertyManager': vm.IsPropertyManager
            }

            UserFactory.postProperty(newUserData).then(
                function(response) {
                    toastr.success('Account Successfully Created!');
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
        };
    }
})();
