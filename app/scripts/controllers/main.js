'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
