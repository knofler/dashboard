'use strict';

angular.module('serveMeApp')
  .directive('tabs', function () {
    return {
      templateUrl: 'app/directive/tabs/tabs.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });