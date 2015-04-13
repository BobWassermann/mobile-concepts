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
    $scope.checkCounter = 0;

    $scope.goHome = function(){
      $scope.clicked = 0;
      $scope.clickDone = false;
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

    $scope.reset = function(){
      $scope.clicked = 0;
      $scope.clickDone = false;
      console.log('reset');
    };

    $scope.check = function(){
      if(this.class !== 'check'){
        this.class = 'check';
        $scope.checkCounter++;
      } else {
        this.class = '';
        $scope.checkCounter--;
      }
      if($scope.checkCounter >= 2) {
        $scope.checkDone = true;
      } else {
        $scope.checkDone = false;
      }
    };

    $scope.info = function(){
      if(this.class !== 'info'){
        this.class = 'info';
      } else {
        $scope.checkCounter--;
        this.class = '';
      }
    };

    $scope.goPrevious = function(){
      $state.go($previousState.get().state.name + '-2');
    };

  }).directive('tekstballon', function(){
    return {
      scope: true,
      restricht: 'AEC',
      replace: 'true',
      template: '<div class="tekstballon" ng-click="click()"><span>{{messages[0][1][clicked]}}</span></div>'
    };
  }).directive('onLongPress', function($timeout) {
    return {
      restrict: 'A',
      link: function($scope, $elm, $attrs) {
        $elm.bind('touchstart', function() {
          // Locally scoped variable that will keep track of the long press
          $scope.longPress = true;
   
          // We'll set a timeout for 600 ms for a long press
          $timeout(function() {
            if ($scope.longPress) {
              // If the touchend event hasn't fired,
              // apply the function given in on the element's on-long-press attribute
              $scope.$apply(function() {
                $scope.$eval($attrs.onLongPress);
              });
            }
          }, 600);
        });
   
        $elm.bind('touchend', function() {
          // Prevent the onLongPress event from firing
          $scope.longPress = false;
          // If there is an on-touch-end function attached to this element, apply it
          if ($attrs.onTouchEnd) {
            $scope.$apply(function() {
              $scope.$eval($attrs.onTouchEnd);
            });
          }
        });
      }
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
