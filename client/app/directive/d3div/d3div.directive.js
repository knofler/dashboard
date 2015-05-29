'use strict';

angular.module('serveMeApp')
  .directive('d3div', function () {
    return {
      templateUrl: 'app/directive/d3div/d3div.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });