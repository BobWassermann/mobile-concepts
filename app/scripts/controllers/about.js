'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
