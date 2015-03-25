'use strict';

describe('Controller: QuestWormCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileConceptsApp'));

  var QuestWormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestWormCtrl = $controller('QuestWormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
