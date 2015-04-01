'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBeverCtrl
 * @description
 * # QuestBeverCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestBeverCtrl', function ($scope, $state) {
    $scope.messages = [
      'Hoi, ik ben Bob de Bolle Bever.',
      'Ik speelde verstoppertje met mijn vriendjes, maar ze zijn er vandoor.',
      'Kunnen jullie mij helpen mijn vriendjes terug te vinden?'
    ];
    $scope.opdrachten = [
      'Kleine beestjes',
      'De grote speurtocht',
      'Spullen verzamelen'
    ];
    $scope.validatie = [
      'Ja graag!',
      'Niet nu'
    ];
    $scope.clicked = 0;

    $scope.click = function(){
      var len = $scope.messages.length - 2;
      if($scope.clicked <= len) {
        $scope.clicked++;
      } else {
        $state.go('bever-keuzes');
      }

    };
});