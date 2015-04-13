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
        controller: 'QuestWormCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-worm.html' },
          'keuzes@worm':          { templateUrl: '/templates/keuze.tpl.html' }
        }
      })

      .state('tak', {
        url: '/tak',
        controller: 'QuestTakCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-tak.html' },
          'keuzes@worm':          { templateUrl: '/templates/keuze.tpl.html' }
        }
      })

      .state('bloem', {
        url: '/bloem',
        controller: 'QuestBloemCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-bloem.html' },
          'keuzes@bloem':         { templateUrl: '/templates/keuze.tpl.html' }
        }
      })

      .state('bever', {
        url: '/bever',
        controller: 'QuestBeverCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-bever.html' },
          'keuzes@bever':         { templateUrl: '/templates/keuze.tpl.html' }
        }
      })

      .state('bever.kleinebeestjes', {
        url: '/kleinebeestjes',
        templateUrl: '/templates/bever-kleinebeestjes.tpl.html',
        controller: function($scope){
          $scope.clickDone = false;
          document.querySelector('.fullscreen.keuze-wrap').style.display = 'none';
        }
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
      });
});