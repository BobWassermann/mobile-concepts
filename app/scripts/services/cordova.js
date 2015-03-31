'use strict';

/**
 * @ngdoc service
 * @name mobileConceptsApp.cordova
 * @description
 * # cordova
 * Factory in the mobileConceptsApp.
 */
angular.module('mobileConceptsApp')
  .factory('cordova', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
