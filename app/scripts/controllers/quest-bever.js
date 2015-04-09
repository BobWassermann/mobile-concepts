'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBeverCtrl
 * @description
 * # QuestBeverCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestBeverCtrl', function ($scope, $state, $previousState) {
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

    $scope.kleinebeestjes = [
      {
        name: 'kever',
        fact: 'Er zijn in totaal zo een 5000 keversoorten over de hele wereld.'
      },
      {
        name: 'mier',
        fact: 'De communicatie van mieren verloopt door middel van geurstoffen, ook wel feromonen genoemd.'
      },
      {
        name: 'pissebed',
        fact: 'De pissebed leeft van plantaardig materiaal, zoals rottend hout en bladeren.'
      },
      {
        name: 'slak',
        fact: 'Slakken zijn de enige weekdieren die ook op het land leven.'
      },
      {
        name: 'spin',
        fact: 'In Belgie en Nederland leven bijna 700 verschillende soorten spinnen.'
      },
      {
        name: 'worm',
        fact: 'Bij het trillen van de bodem kruipen de regenwormen uit de grond, dit kan door de loopbewegingen van dieren worden veroorzaakt of door menselijk handelen zoals met behulp van een stok of greep.'
      }
    ];

    $scope.clicked = 0;

    $scope.click = function(){
      var len = 1;
      if($state.is('bever')){
        if($scope.clicked <= len) {
          $scope.clicked++;
        } else {
          $scope.clickDone = true;
        }
      }
    };

    $scope.addFlip = function(){
      if(this.class === 'animation'){
        this.class = '';
      } else {
        this.class = 'animation';
      }
    };
    
    $scope.goPrevious = function(){
      $state.go($previousState.get().state.name + '-2');
    };
});