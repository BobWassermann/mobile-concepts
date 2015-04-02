'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBeverCtrl
 * @description
 * # QuestBeverCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestVogelCtrl', function ($scope, $state) {
    $scope.messages = [
      'Kunnen jullie mijn vriendjes helpen?'
    ];
    // $scope.opdrachten = [
    //   'Kleine beestjes',
    //   'De grote speurtocht',
    //   'Spullen verzamelen'
    // ];
    // $scope.validatie = [
    //   'Ja graag!',
    //   'Niet nu'
    // ];
    $scope.clicked = 0;

    $scope.click = function(){
      var len = $scope.messages.length - 2;
      if($scope.clicked <= len) {
        $scope.clicked++;
      } else {
        document.getElementById('vogel').style.display = 'none';
      }

    };


});