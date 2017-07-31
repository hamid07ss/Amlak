'use strict';

/**
 * @ngdoc overview
 * @name amlakApp
 * @description
 * # amlakApp
 *
 * Main module of the application.
 */
angular
    .module('amlakApp', [
        'ngAnimate',
        'angular-carousel',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'base64',
        'ngCordova',
        'reqService'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/hamid-table.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/OneHome', {
                templateUrl: 'views/one.html',
                controller: 'oneCtrl',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
