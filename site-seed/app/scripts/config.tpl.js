angular
.module('siteSeedApp', [
    'ngTouch',
    'ngResource',
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'pascalprecht.translate'
])  
.constant('APP_CONFIG', /* @echo APP_CONFIG */)
.value('debug', true);
