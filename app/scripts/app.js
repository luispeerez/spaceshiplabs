'use strict';

/**
 * @ngdoc overview
 * @name spaceshiplabsApp
 * @description
 * # spaceshiplabsApp
 *
 * Main module of the application.
 */
angular
  .module('spaceshiplabsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
