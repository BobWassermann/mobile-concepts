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
        controller: function($scope, $transclude) {
          $scope.clicked = 0;
          $scope.click = function(){
            $scope.clicked++;
          };
          $scope.loadOpdracht = function(element) {
            return '/partials/bever-opdracht-' + element + '.tpl.html';
          };
          $scope.getTemplateUrl = function() {
            if($scope.clicked <= ($scope.messages.length - 1)) {
              return '/partials/bever-tekstballon.tpl.html';
            } else {
              return '/partials/bever-keuze.tpl.html';
            }
          };
        }
      };
});
