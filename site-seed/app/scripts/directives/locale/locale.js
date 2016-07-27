'use strict';
angular.module('siteSeedApp') 
.directive('ngTranslateLanguageSelect', function (LocaleService) { 
    return {
        restrict: 'A',
        replace: true,
        templateUrl:'views/locale/locale.html',
        controller: function ($scope) {
            $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
            $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
            $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
            $scope.changeLanguage = function (locale) {
                LocaleService.setLocaleByDisplayName(locale);
            };
        }
    };
});
