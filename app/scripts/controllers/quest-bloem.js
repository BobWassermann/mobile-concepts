'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestBloemCtrl
 * @description
 * # QuestBloemCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestBloemCtrl', function ($scope) {
    $scope.messages = [
      ['intro',
        [
          'Hallo kindertjes, ik ben Bas de Blije Bloem.',
          'IK vind het heerlijk om naar de vogels te kijken.',
          'Willen jullie samen met mij wat opdrachtjes doen?'
        ]
      ],
      ['vogelsspotten',
        [
          'Mijn vogel vriendjes hebben honger.',
          'Laten we samen op zoek gaan naar ze en daarna eten voor ze zoeken!',
          'Gebruik voor deze opdracht jullie verrenkijker.'
        ]
      ],
      ['poepinspecteren',
        [
          'Ik houd van poep, het fungeert als mest en daar groei ik goed van.',
          'Ik kan helaas geen poep vinden.',
          'Willen jullie mij helpen met het zoeken naar poep?'
        ]
      ],
      ['paardenspotten',
        [
          'De Konikpaarden stampen mij en mijn andere bloemenvriendjes altijd plat!',
          'Wil jij mij iets leren over de paarden zodat we hier beter mee om leren gaan?',
          'Je hebt wel je verrenkijker nodig!'
        ]
      ]
    ];
    
    $scope.opdrachten = [
      'Vogels spotten',
      'Poep Inspecteren',
      'Paarden Spotten'
    ];

    $scope.vogelsspotten = [
      {
        name: 'buizert'
      },
      {
        name: 'duif'
      },
      {
        name: 'koolmees'
      },
      {
        name: 'meeuw'
      }
    ];

    $scope.poepinspecteren = [
      {
        name: 'galloway'
      },
      {
        name: 'konikpaard'
      }
    ];
  });
