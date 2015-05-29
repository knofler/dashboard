'use strict';

describe('Directive: d3div', function () {

  // load the directive's module and view
  beforeEach(module('serveMeApp'));
  beforeEach(module('app/directive/d3div/d3div.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d3div></d3div>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the d3div directive');
  }));
});