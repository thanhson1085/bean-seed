'use strict';

angular.module('siteSeedApp')
.controller('RegisterCtrl', function(Users, $state) {
    var vs = this;
    vs.register = function login(){
        var userData = {
            username: vs.username,
            email: vs.email,
            password: vs.password,
            firstname: vs.firstname,
            lastname: vs.lastname
        };
        Users.register(userData).then(function(){
            vs.error = null;
            $state.go('login');
        }).catch(function(e){
            vs.error = 'Register Denied, Your username or Email is exists!';
        });
    };
});
