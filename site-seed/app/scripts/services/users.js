'use strict';
angular.module('siteSeedApp').factory('Users', function(Helper, $http, httpi, $q, APP_CONFIG) {
    return {
        login: function(username, password){
            var deferred = $q.defer();
            var url = APP_CONFIG.services.users.login;
            $http({
                method: 'POST',
                url: url,
                data: { username: username, password: password },
                transformRequest: Helper.transformRequestEncodeURI,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                // login success
                deferred.resolve(data);
            }).error(function(data){
                // login fails
                deferred.reject(data);
            });
            return deferred.promise;
        }
    };
});
