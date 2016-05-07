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
.module('siteSeedApp', [
    'ngTouch',
    'ui.router',
    'oc.lazyLoad'
])
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
            templateUrl:'views/pages/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            url:'/login',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/login.js'
                            ]
                        });
                }
            }
        })
        .state('home', {
            url:'/home',
            templateUrl: 'views/main.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                            ]
                        });
                }
            }
        })
        .state('home.dashboard', {
            url:'/home/dashboard',
            controller:'MainCtrl',
            templateUrl: 'views/dashboard/index.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'siteSeedApp',
                            files:[
                                'scripts/controllers/main.js',
                            ]
                        });
                }
            }
        });
    }
]);

