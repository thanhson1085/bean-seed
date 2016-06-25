'use strict';

// LoginCtrl
angular.module('siteSeedApp')
.controller('LoginCtrl', function(Users, $rootScope, $cookies, $state) {
    var vm = this;
    // logout before login
    $rootScope.user_info = {};
    $cookies.remove('userInfo');
    vm.login = function login(){
        Users.login(vm.username, vm.password).then(function(data){
            $rootScope.user_info = data;
            $cookies.put('userInfo', JSON.stringify(data));
            vm.error = null;
            $state.go('home.dashboard');
        }).catch(function(){
            vm.error = 'Access Denied!';
        });
    };
});
