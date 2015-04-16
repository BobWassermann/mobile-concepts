'use strict';

/**
 * @ngdoc function
 * @name mobileConceptsApp.controller:QuestTakCtrl
 * @description
 * # QuestTakCtrl
 * Controller of the mobileConceptsApp
 */
angular.module('mobileConceptsApp')
  .controller('QuestTakCtrl', function ($scope) {
    $scope.messages = [
      ['intro',
        [
          'Samen met mijn familie ben ik aangespoeld in dit gebied.',
          'Wij vinden het leuk hier!',
          'Misschien kunnen we elkaar nog iets bijleren over takken?!'
        ]
      ],
      ['aangespoeldetakken',
        [
          'Takken kunnen tientalle kilometers afleggen voordat ze ergens aanstranden.  ',
          'Waarom een tak in de Maas ligt kun je meestal afleiden aan het uiterlijk van de tak.',
          'De Maas heeft ook effect op de buitenkant van de tak.'
        ]
      ],
      ['detaksi',
        [
          'Wanneer mensen lange afstanden moeten afleggen nemen ze de taxi, een insect neemt "de taksi".',
          'Op deze manier kunnen ze afstanden afleggen die anders onmogelijk zijn voor kleine beestjes.',
          'Laten we op zoek gaan naar taksi-takken.'
        ]
      ],
      ['demooistetak',
        [
          'Takken kun je vinden in allerlei soorten en maten.',
          'Zoek een tak die jij het mooiste vindt en vertel de groep waarom je voor die tak gekozen hebt.',
          'Als de tak kleiner is dan je arm, dan mag je hem mee naar huis nemen. Of je laat hem liggen. Aan jou de keus.'
        ]
      ]
    ];
    
    $scope.opdrachten = [
      'Aangespoelde takken',
      'De taksi',
      'De mooiste tak'
    ];

    $scope.detaksi = [
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

    $scope.aangespoeldetakken = [
      {
        name: 'glad',
        fact: 'Zoals je ziet zijn de takken in de afbeelding behoorlijk glad. Dit komt onder andere door het schuren over de bodem van de Maas.'
      },
      {
        name: 'aangeknaagd',
        fact: 'Bij sommige takken zie je, zoals bij de afbeelding hierboven, knaagsporen. Dit wilt dus zeggen dat ergens stroomopwaards bevers aan het werk zijn geweest.'
      },
    ];

    $scope.demooistetak = [
      {
        option: 'Ja, natuurlijk!',
      },
      {
        option: 'Nee, deze keer niet',
      },
    ];

  });
