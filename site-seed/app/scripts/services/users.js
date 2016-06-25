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
        }
    };
});
