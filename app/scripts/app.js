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

      // Worm
      .state('worm', {
        url: '/worm',
        controller: 'QuestWormCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-worm.html' },
          'tekstballon@worm':     { templateUrl: '/templates/tekstballon.tpl.html' }
        },
        data: {
          stateNumber: 0,
          option: 'state',
          value: '.keuzes'
        }
      })
        .state('worm.keuzes', {
          url: '/keuzes',
          templateUrl: '/templates/worm-keuze.tpl.html'
        })
        .state('worm.stenenspeurtocht', {
          url: '/worm/stenenspeurtocht',
          templateUrl: '/templates/worm-stenenspeurtocht.tpl.html',
          data: {
            stateNumber: 2
          }
        })
        .state('worm.grondgraven', {
          url: '/worm/grondgraven',
          templateUrl: '/templates/worm-grondgraven.tpl.html',
          data: {
            stateNumber: 1
          }
        })


      // Tak
      .state('tak', {
        url: '/tak',
        controller: 'QuestTakCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-tak.html' },
          'tekstballon@tak':          { templateUrl: '/templates/tekstballon.tpl.html' }
        },
        data: {
          stateNumber: 0,
          option: 'state',
          value: '.keuzes'
        }
      })
        .state('tak.keuzes', {
          url: '/keuzes',
          templateUrl: '/templates/tak-keuze.tpl.html'
        })
        .state('tak.aangespoeldetakken', {
          url: '/tak/aangespoeldetakken',
          templateUrl: '/templates/tak-aangespoeldetakken.tpl.html'
        })
        .state('tak.detaksi', {
          url: '/bever/detaksi',
          templateUrl: '/templates/tak-detaksi.tpl.html',
          data: {
            stateNumber: 1,
            option: 'statement',
            value: '$scope.clickDone = true'
          }
        })
        .state('tak.detaksi.1', {
          url: '/detaksi/1',
          templateUrl: '/templates/tak-detaksi.tpl.html',
          controller: function($scope){
            $scope.tekstballonDone = true;
          }
        })

        .state('tak.demooistetak', {
          url: '/bever/demooistetak',
          templateUrl: '/templates/tak-demooistetak.tpl.html'
        })


      // Bloem
      .state('bloem', {
        url: '/bloem',
        controller: 'QuestBloemCtrl',
        views: {
          '':                     { templateUrl: '/views/quest-bloem.html' },
          'tekstballon@bloem':    { templateUrl: '/templates/tekstballon.tpl.html' }
        },
        data: {
          stateNumber: 0,
          option: 'state',
          value: '.keuzes'
        }
      })
        .state('bloem.keuzes', {
          url: '/keuzes',
          templateUrl: '/templates/bloem-keuze.tpl.html'
        })
        .state('bloem.vogelsspotten', {
          url: '/bloem/vogelsspotten',
          templateUrl: '/templates/bloem-vogelsspotten.tpl.html'
        })
        .state('bloem.poepinspecteren', {
          url: '/bloem/poepinspecteren',
          templateUrl: '/templates/bloem-poepinspecteren.tpl.html'
        })
        .state('bloem.paardenspotten', {
          url: '/bloem/paardenspotten',
          templateUrl: '/templates/bloem-paardenspotten.tpl.html'
        })


      // Bever
      .state('bever', {
        url: '/bever',
        controller: 'QuestBeverCtrl',
        views: {
          '':                   { templateUrl: '/views/quest-bever.html' },
          'tekstballon@bever':  { templateUrl: '/templates/tekstballon.tpl.html' }
        },
        data: {
          stateNumber: 0,
          option: 'state',
          value: '.keuzes'
        }
      })
        .state('bever.keuzes', {
          url: '/keuzes',
          templateUrl: '/templates/bever-keuze.tpl.html'
        })
        .state('bever.kleinebeestjes', {
          url: '/kleinebeestjes',
          templateUrl: '/templates/bever-kleinebeestjes.tpl.html',
          data: {
            stateNumber: 1,
            option: 'statement',
            value: '$scope.clickDone = true'
          }
        })
        .state('bever.kleinebeestjes.1', {
          url: '/kleinebeestjes/1',
          templateUrl: '/templates/bever-kleinebeestes.tpl.html',
          controller: function($scope){
            $scope.tekstballonDone = true;
          }
        })
        .state('bever.degrotespeurtocht', {
          url: '/degrotespeurtocht',
          templateUrl: '/templates/bever-degrotespeurtocht.tpl.html',
          data: {
            stateNumber: 2
          }
        })
        .state('bever.spullenverzamelen', {
          url: '/bever/spullenverzamelen',
          templateUrl: '/templates/bever-spullenverzamelen.tpl.html',
          data: {
            stateNumber: 3
          }
        });
});