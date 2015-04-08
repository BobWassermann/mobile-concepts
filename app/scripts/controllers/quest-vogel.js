'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBeverCtrl
 * @description
 * # QuestBeverCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestVogelCtrl', function ($scope) {
    $scope.messages = [
      'Kunnen jullie mijn vriendjes helpen?'
    ];

    $scope.clicked = 0;

    $scope.click = function(){
      var len = $scope.messages.length - 2;
      if($scope.clicked <= len) {
        $scope.clicked++;
      } else {
        document.querySelector('.tekstballon.vogel').style.display = 'none';
        document.querySelector('.vogel').classList.add('weg');      
      }
    };
});