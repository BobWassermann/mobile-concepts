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
          'Ga opzoek naar takken. Dik of juist dun, lang of kort, alles mag.  ',
          'Waar denk je dat de tak vandaan komt, en waarom?',
          'Klik op de afbeeldingen hierboven en ontdek meer over de aangespoelde takken.'
        ]
      ],
      ['detaksi',
        [
          'Wanneer mensen lange afstanden moeten afleggen nemen ze de taxi, een insect neemt "de taksi".',
          'Kun jij taksi-takken vinden? Zo ja, welke insecten zitten op de taksi?',
          'Gooi de taksi-takken maar in de Maas. Gooi zo ver als je kan. Zo kan de taksi weer verder!'
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
  });
