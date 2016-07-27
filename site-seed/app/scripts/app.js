'use strict';

/**
 * @ngdoc overview
 * @name siteSeedApp
 * @description
 * # siteSeedApp
 *
 * Main module of the application.
 */
angular
.module('siteSeedApp') 
.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}])
.config(function ($translateProvider, APP_CONFIG) {
    if (APP_CONFIG.debug_mode) {
        $translateProvider.useMissingTranslationHandlerLog();
    }

    $translateProvider.useStaticFilesLoader({
        files: [
            {
                prefix: 'resources/locale-',
                suffix: '.json'
            }
        ]
    });

    $translateProvider.preferredLanguage(APP_CONFIG.locales.preferredLocale);
    $translateProvider.useLocalStorage();
})
.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$ocLazyLoadProvider', 
    '$httpProvider',
    function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $httpProvider) {

        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
        });

        $urlRouterProvider.otherwise('/home/dashboard');

        $stateProvider
        .state('login',{
            templateUrl: 'views/pages/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            url: '/login',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/login.js',
                                'scripts/services/users.js'
                            ]
                        });
                }
            }
        })
        .state('register',{
            templateUrl:'views/pages/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'vs',
            url:'/register',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'sbAdminApp',
                            files:[
                                'scripts/controllers/register.js',
                                'scripts/services/users.js'
                            ]
                        });
                }
            }
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/directives/header/header.js',
                                'scripts/directives/sidebar/sidebar.js',
                                'scripts/services/locale.js',
                                'scripts/directives/locale/locale.js',
                                'scripts/services/users.js'
                            ]
                        });
                }
            }
        })
        .state('home.dashboard', {
            url: '/dashboard',
            controller: 'MainCtrl',
            templateUrl: 'views/dashboard/home.html',
            resolve: {
                loadMyDirectives: function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/main.js'
                            ]
                        });
                }
            }
        })
        .state('home.users', {
            url: '/users/list/{page}/{limit}',
            controller: 'ListUserCtrl',
            templateUrl: 'views/users/list.html',
            resolve: {
                loadMyDirectives: function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/users.js'
                            ]
                        });
                }
            }
        })
        .state('home.user_get', {
            url: '/users/get/:userId',
            controller: 'UserDetailCtrl',
            templateUrl: 'views/users/view.html',
            resolve: {
                loadMyDirectives: function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/users.js'
                            ]
                        });
                }
            }
        })
        .state('home.user_setting',{
            templateUrl:'views/users/setting.html',
            url:'/users/setting',
        });
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }
])
.factory('httpRequestInterceptor', function ($rootScope, $cookies) {
    var ret = {
        request: function (config) {
            var user_info = $cookies.get('userInfo') || '{}';
            $rootScope.user_info = JSON.parse(user_info);
            config.headers.Authorization = 'Bearer ' + $rootScope.user_info.token;
            return config;
        }
    };
    return ret;
});

