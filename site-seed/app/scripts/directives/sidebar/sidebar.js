'use strict';

angular.module('siteSeedApp')
.directive('sidebar',[function() {
    return {
        templateUrl:'views/sidebar/sidebar.html',
        restrict: 'E',
        scope: {
        },
        controller: function($scope) {
            $scope.collapse = 0;
            $scope.check = function(x) {
                if ($scope.collapse === x) {
                    return $scope.collapse = 0;
                }
                $scope.collapse = x;
            }
        }
    }
}]);
