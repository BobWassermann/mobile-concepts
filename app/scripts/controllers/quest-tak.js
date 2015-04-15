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
          'Ga op zoek naar takken. Dik of juist dun, lang of kort, alles mag.  ',
          'Waar denk je dat de tak vandaan komt, en waarom?',
          'Klik op de afbeeldingen hierboven en ontdek meer over de aangespoelde takken.'
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
  });
