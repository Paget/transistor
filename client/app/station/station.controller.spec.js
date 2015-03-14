'use strict';

describe('Controller: StationCtrl', function () {

  // load the controller's module
  beforeEach(module('transistorApp'));

  var StationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StationCtrl = $controller('StationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
