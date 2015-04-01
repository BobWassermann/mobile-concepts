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
        templateUrl: '/views/main.html'
      })

      .state('worm', {
        url: '/worm',
        templateUrl: '/views/quest-worm.html',
        controller: 'QuestWormCtrl'
      })

      .state('tak', {
        url: '/tak',
        templateUrl: '/views/quest-tak.html',
        controller: 'QuestTakCtrl'
      })

      .state('bever', {
        url: '/bever',
        controller: 'QuestBeverCtrl',
        templateUrl: '/views/quest-bever.html'
      })

        .state('bever.keuzes', {
          url: '/keuzes',
          template: '<h1>hoi</h1>'
          // templateUrl: '/templates/bever-keuze.tpl.html'
        })

        .state('bever.waterdiertjes', {
          url: '/waterdiertjes',
          templateUrl: '/templates/bever-waterdiertjes.tpl.html'
        })

        .state('bever.holbewoners', {
          url: '/holbewoners',
          templateUrl: '/templates/bever-holbewoners.tpl.html'
        })

        .state('bever.geschorsteschoften', {
          url: '/geschorsteschoften',
          templateUrl: '/templates/bever-geschorsteschoften.tpl.html'
        })

      .state('bloem', {
        url: '/bloem',
        templateUrl: '/views/quest-bloem.html',
        controller: 'QuestBloemCtrl'
      });

  });
