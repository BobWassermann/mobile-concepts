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
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/'); // if all fails
    
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })

      .state('worm', {
        url: '/worm',
        templateUrl: 'views/quest-worm.html',
        controller: 'QuestWormCtrl'
      })

      .state('tak', {
        url: '/tak',
        templateUrl: 'views/quest-tak.html',
        controller: 'QuestTakCtrl'
      })

      .state('bever', {
        url: '/bever',
        templateUrl: 'views/quest-bever.html',
        controller: 'QuestBeverCtrl'
      })

      .state('bloem', {
        url: '/bloem',
        templateUrl: 'views/quest-bloem.html',
        controller: 'QuestBloemCtrl'
      })

  });
