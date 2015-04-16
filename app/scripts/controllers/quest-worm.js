'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestWormCtrl
 * @description
 * # QuestWormCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestWormCtrl', function ($scope) {
    $scope.messages = [
      ['intro',
        [
          'Hallo, Ik ben Willem de Wijze Worm.',
          'Mij vinden jullie onder de grond op vochtige plekjes!',
          'Kunnen jullie mij helpen met wat opdrachten?'
        ]
      ],
      ['grondgraven',
        [
          'Hey kameraad! Ik heb honger.',
          'Wil jij me helpen om de lekkerste grond te vinden? Hiervoor moeten we de grond onderzoeken.',
          'Gebruik voor deze opdracht een grondboor.'
        ]
      ],
      ['stenenspeurtocht',
        [
          'In dit gebied liggen veel verschillende stenen.',
          'Ze hebben allemaal andere kleuren en formaten.',
          'Willen jullie eens zoeken hoe veel verschillende stenen jullie kunnen vinden?'
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
      'Grond Graven',
      'Stenenspeurtocht',
      'Spullen verzamelen'
    ];

    $scope.grondgraven = [
      {
        option: 'Onder de grond',
        value: 'true'
      },
      {
        option: 'Boven de grond',
        value: 'false'
      }
    ];    
    
    $scope.stenenspeurtocht = [
      {
        name: 'baksteen',
      },
      {
        name: 'kalksteen',
      },
      {
        name: 'maaskei',
      },
      {
        name: 'mergel',
      },
      {
        name: 'vuursteen',
      },
      {
        name: 'zandsteen',
      }
    ];
  });
