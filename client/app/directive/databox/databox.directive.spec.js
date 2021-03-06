'use strict';

describe('Directive: databox', function () {

  // load the directive's module and view
  beforeEach(module('serveMeApp'));
  beforeEach(module('app/directive/databox/databox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<databox></databox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the databox directive');
  }));
});