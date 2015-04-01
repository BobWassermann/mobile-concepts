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
    $scope.clicked = 0;
    $scope.click = function(){
      $scope.clicked++;
    };
});