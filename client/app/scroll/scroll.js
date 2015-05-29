'use strict';

angular.module('serveMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scroll', {
        url: '/scroll',
        templateUrl: 'app/scroll/scroll.html',
        controller: 'ScrollCtrl'
      });
  });