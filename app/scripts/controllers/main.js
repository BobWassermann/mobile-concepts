'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp').controller('MainCtrl', function ($scope, $state, $previousState) {
    $scope.state = $state;

    $scope.clicked = 0;

    $scope.goHome = function(){
      $scope.clicked = 0;
      $state.go('home');
      $scope.vogelHide = true;
    };

    $scope.click = function(){
      var len = 1;
      if($scope.clicked <= len) {
        $scope.clicked++;
      } else {
        $scope.clickDone = true;
      }
    };

    $scope.addFlip = function(){
      if(this.class !== 'animation'){
        this.class = 'animation';
      }
    };

    $scope.goPrevious = function(){
      $state.go($previousState.get().state.name + '-2');
    };

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
  }).filter('range', function() {
    return function(val, range) {
      range = parseInt(range);
      for (var i=0; i<range; i++) {
        val.push(i);
      }
      return val;
    };
  });

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);
