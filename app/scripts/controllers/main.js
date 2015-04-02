'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('MainCtrl', function () {
  }).filter('removeSpacesThenLowercase', function () {
      return function (text) {
      var str = text.replace(/\s+/g, '');
      return str.toLowerCase();
    };
  }).filter('capitalize', function() {
      return function (text) {
      var str = text.replace(/\s+/g, '');
      return str.toLowerCase().substring(0,1).toUpperCase()+str.substring(1);
    };
  });

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);
