'use strict';

describe('Controller: QuestBloemCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileConceptsApp'));

  var QuestBloemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestBloemCtrl = $controller('QuestBloemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
