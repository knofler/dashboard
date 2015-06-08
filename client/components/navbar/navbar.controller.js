'use strict';

angular.module('serveMeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {'title': 'Home','link': '/'},
      {'title': 'Dashboard','link':'/dashboard'},
      {'title': 'Chart','link':'/chart'},
      {'title': 'CSV','link':'/csv'},
      {'title': 'React','link':'/react'},
      {'title': 'Scroll','link':'/scroll'},
      {'title': 'Upload','link':'/upload'}
      ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });