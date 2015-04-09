'use strict';

/**
 * @ngdoc overview
 * @name mobileConceptsApp
 * @description
 * # mobileConceptsApp
 *
 * Main module of the application.
 */

var app = angular.module('mobileConceptsApp', ['ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router', 'ct.ui.router.extras']);

app.config(function ($stateProvider, $urlRouterProvider, $provide) {
    
    $provide.decorator('uiSrefDirective', function ($delegate) {
      var originalUiSref, originalUiSrefLink;
      originalUiSref = $delegate[0];
      originalUiSrefLink = originalUiSref.link;
 
      $delegate[0].compile = function () {
 
        return function (scope, element, attrs, uiSref) {
          var originalBind = element.bind, enableFastClick = !angular.isDefined(attrs.disableFastclick);
 
          element.bind = function (event, callback) {
            originalBind.call(element, event === 'click' && enableFastClick ? 'touchstart mousedown' : event, function () {
              callback.apply(element, arguments);
            });
          };
 
          originalUiSrefLink.call($delegate, scope, element, attrs, uiSref);
        };
      };
 
      return $delegate;
    });
   
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
        views: {
          '':                     { templateUrl: '/views/quest-bever.html' },
          'keuzes@bever':         { templateUrl: '/templates/bever-keuze.tpl.html' }
        }
      })

      .state('bever.kleinebeestjes', {
        url: '/bever/kleinebeestjes',
        templateUrl: '/templates/bever-kleinebeestjes.tpl.html'
      })

        .state('bever-opdracht-kleinebeestjes-2', {
          url: '/bever/kleinebeestjes/2',
          templateUrl: '/templates/bever-kleinebeestjes-2.tpl.html'
        })

      .state('bever-opdracht-degrotespeurtocht', {
        url: '/bever/degrotespeurtocht',
        templateUrl: '/templates/bever-degrotespeurtocht.tpl.html'
      })

        .state('bever-opdracht-degrotespeurtocht-2', {
          url: '/bever/degrotespeurtocht/2',
          templateUrl: '/templates/bever-degrotespeurtocht-2.tpl.html'
        })

      .state('bever-opdracht-spullenverzamelen', {
        url: '/bever/spullenverzamelen',
        templateUrl: '/templates/bever-spullenverzamelen.tpl.html'
      })

        .state('bever-opdracht-spullenverzamelen-2', {
          url: '/bever/spullenverzamelen/2',
          templateUrl: '/templates/bever-spullenverzamelen-2.tpl.html'
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