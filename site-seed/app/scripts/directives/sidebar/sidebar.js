'use strict';

angular.module('siteSeedApp')
.directive('sidebar',[function() {
    return {
        templateUrl:'views/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
        scope: {
        },
        controller: function() {
        }
    }
}]);
