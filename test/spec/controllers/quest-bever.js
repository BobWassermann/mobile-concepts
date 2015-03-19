'use strict';

describe('Controller: QuestBeverCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileConceptsApp'));

  var QuestBeverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestBeverCtrl = $controller('QuestBeverCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
