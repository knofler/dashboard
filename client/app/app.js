'use strict';

angular.module('serveMeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'react',
  'ui.select',
  'ui.sortable',
  'angularFileUpload',
  'ui.grid.infiniteScroll','ui.grid','ui.grid.edit','ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.pinning',
  'ui.grid.exporter','ui.grid.importer','ui.grid.saveState','ui.grid.cellNav', 'ui.grid.moveColumns',
  'infinite-scroll',
  'ngAnimate',
  'ngTouch',
  'ngDraggable'

])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .filter('pagination', function(){
    return function(input, start){
    if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
      }
    })
  .filter('advancefilter', ['$filter', function($filter){
    return function(data, text){
      if(text !== undefined){
        var textArr = text.split(' ');
        angular.forEach(textArr, function(test){
            if(test){
                  data = $filter('filter')(data, test);
            }
        });
        return data;
      }else{
        return data;
      }     
    }
    }])
  .filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

  });