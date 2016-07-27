'use strict';
angular.module('siteSeedApp')
.controller('ListUserCtrl', function($scope, $stateParams, Users, APP_CONFIG) {
    var page = $stateParams.page ? parseInt($stateParams.page) : 1,
        limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;

    $scope.limit = limit;
    Users.list(page, limit).then(function(data){
        $scope.users = data;
    });
});
