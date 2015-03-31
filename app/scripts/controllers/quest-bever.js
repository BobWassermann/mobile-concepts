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
      'Hoi, ik ben Bob de Bolle Bever.',
      'Ik speelde verstoppertje met mijn vriendjes, maar ze zijn er vandoor.',
      'Kunnen jullie mij helpen mijn vriendjes terug te vinden?'
    ];
    $scope.opdrachten = [
      'Waterdiertjes',
      'Holbewoners',
      'Geschorste schoften'
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
          };
          $scope.getTemplateUrl = function() {
            if($scope.clicked <= ($scope.messages.length - 1)) {
              return '/templates/bever-tekstballon.tpl.html';
            } else {
              return '/templates/bever-keuze.tpl.html';
            }
          };
        }
      };
});
