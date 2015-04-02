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

      .state('bever-keuzes', {
        url: '/bever/keuzes',
        templateUrl: '/templates/bever-keuze.tpl.html'
      })

      .state('bever-opdracht-kleinebeestjes', {
        url: '/bever/kleinebeestjes',
        templateUrl: '/templates/bever-kleinebeestjes.tpl.html'
      })

      .state('bever-opdracht-degrotespeurtocht', {
        url: '/bever/degrotespeurtocht',
        templateUrl: '/templates/bever-degrotespeurtocht.tpl.html'
      })

      .state('bever-opdracht-spullenverzamelen', {
        url: '/bever/spullenverzamelen',
        templateUrl: '/templates/bever-spullenverzamelen.tpl.html'
      })

      .state('bever-opdracht-keuzes', {
        url: '/bever/opdracht/keuzes',
        templateUrl: '/templates/bever-keuze-opdracht.tpl.html'
      })

      .state('bloem', {
        url: '/bloem',
        templateUrl: '/views/quest-bloem.html',
        controller: 'QuestBloemCtrl'
      });

  });
