'use strict';

/**
 * @ngdoc overview
 * @name mobileConceptsApp
 * @description
 * # mobileConceptsApp
 *
 * Main module of the application.
 */
angular
  .module('mobileConceptsApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/quest-bever', {
        templateUrl: 'views/quest-bever.html',
        controller: 'QuestBeverCtrl'
      })
      .when('/quest-worm', {
        templateUrl: 'views/quest-worm.html',
        controller: 'QuestWormCtrl'
      })
      .when('/quest-tak', {
        templateUrl: 'views/quest-tak.html',
        controller: 'QuestTakCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
