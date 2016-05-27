'use strict';

angular.module('siteSeedApp')
.directive('header', function(){
    return {
        templateUrl:'views/header/header.html',
        restrict: 'E'
    }
});
