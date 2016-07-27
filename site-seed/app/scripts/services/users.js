'use strict';
angular.module('siteSeedApp').factory('Users', function($resource, $q, APP_CONFIG) {
    return {
        login: function(username, password){
            var deferred = $q.defer();
            var url = APP_CONFIG.services.users.login;
            var data = {
                username: username,
                password: password
            };
            var Login = $resource(url);
            
            Login.save(data, function(res) {
                // login success
                deferred.resolve(res);
            }, function(res) {
                // login fails
                deferred.reject(res);
            });
            return deferred.promise;
        },
        register: function(data){
            var deferred = $q.defer();
            var url = APP_CONFIG.services.users.create;
            var Register = $resource(url);
            
            Register.save(data, function(res) {
                deferred.resolve(res);
            }, function(res) {
                deferred.reject(res);
            });
            return deferred.promise;
        },
        list: function(page, limit){
            var deferred = $q.defer();
            var url = APP_CONFIG.services.users.list;
            var Users = $resource(url, {limit: limit, page: page});
            
            Users.get(function(res) {
                deferred.resolve(res);
            }, function(res) {
                deferred.reject(res);
            });
            return deferred.promise;
        },
        get: function(userId){
            var deferred = $q.defer();
            var url = APP_CONFIG.services.users.get;
            var Users = $resource(url, {userId: userId});
            
            Users.get(function(res) {
                deferred.resolve(res);
            }, function(res) {
                deferred.reject(res);
            });
            return deferred.promise;
        }
    };
});
