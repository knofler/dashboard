'use strict';

describe('Controller: ScrollCtrl', function () {

  // load the controller's module
  beforeEach(module('serveMeApp'));

  var ScrollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScrollCtrl = $controller('ScrollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
