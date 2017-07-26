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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'reqService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<hamid-table></hamid-table>'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:id', {
        templateUrl: 'views/one.html'
        // controller: 'oneCtrl',
        // controllerAs: 'page'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
