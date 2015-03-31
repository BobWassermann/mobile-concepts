'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBeverCtrl
 * @description
 * # QuestBeverCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestBeverCtrl', function ($scope) {
    $scope.messages = [
      'Hallo ik ben Bob de Bolle Bever. Kunnen jullie mij helpen met wat klusjes?',
      'AngularJS',
      'Karma'
    ];
  }).directive('tekstBallon', function(){
      return {
        restrict: 'A',
        scope: true,
        template: '<ng-include src="getTemplateUrl()" />',
        controller: function($scope) {
          $scope.clicked = 0;
          $scope.click = function(){
            $scope.clicked++;
          }
          $scope.getTemplateUrl = function() {
            if($scope.clicked <= ($scope.messages.length - 1)) {
              return "/templates/bever-tekstballon.tpl.html"
            }
          }
        }
      }
});
