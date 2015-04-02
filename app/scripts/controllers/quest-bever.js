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
      ['intro',
        [
          'Hoi, ik ben Bob de Bolle Bever.',
          'Ik speelde verstoppertje met mijn vriendjes, maar ze zijn er vandoor.',
          'Kunnen jullie mij helpen mijn vriendjes terug te vinden?'
        ]
      ],
      ['kleinebeestjes',
        [
          'Ga op zoek naar kleine beestjes.',
          'Ze verschuilen zich graag op vochtige plekjes. Vang ze voorzichtig en bekijk ze heel goed!',
          'Gebruik voor deze opdracht jullie loep.'
        ]
      ],
      ['degrotespeurtocht',
        [
          'In de natuur laten de meeste dieren zich niet zo gemakkelijk zien.',
          'We kunnen er wel achter komen waar het diertje zich verstopt heeft.',
          'Ben jij een echte detective? Volg de sporen.'
        ]
      ],
      ['spullenverzamelen',
        [
          'Ik wil een huisje bouwen maar dat is veel werk en ik heb er vanalles voor nodig.',
          'Willen jullie mij helpen met het verzamelen van deze spullen?',
          'Je hebt wel een loep nodig!'
        ]
      ]
    ];
    $scope.opdrachten = [
      'Kleine beestjes',
      'De grote speurtocht',
      'Spullen verzamelen'
    ];
    $scope.clicked = 0;

    $scope.click = function(){
      var len = 1;
      if($state.is('bever')){
        if($scope.clicked <= len) {
          $scope.clicked++;
        } else {
          $state.go('bever-keuzes');
        }
      } else {
        if($scope.clicked <= len) {
          $scope.clicked++;
        } else {
          $state.go('bever-opdracht-keuzes');
        }
      }

    };
});