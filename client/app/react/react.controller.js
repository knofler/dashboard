'use strict';

angular.module('serveMeApp')
  .controller('ReactCtrl', function ($scope) {

	// @@@@@@@@@@@@@@@@@@@ DATA SOURCES and Models @@@@@@@@@@@@@@@@@@@@@@@

    $scope.scopedata = "This is scope data from controller displayed via custDir Directive";

    $scope.transcludeVar  = "This is from Controller?";

    $scope.showMsg =  function(data){
        console.log(data);
     };

     // console.log($scope.transcludeVar);

    // ********** REACT Data source for angular controller to use through out the apps***********
    
    //ng-model being used for reactJs data Source
    $scope.framework    = 'ReactJs';
    $scope.data         = [];
    
    // Fill the data map with random data
    // for(var i = 0; i < 1500; ++i) {
    //   $scope.data[i] = {};
    //     for(var j = 0; j < 5; ++j) {
    //       $scope.data[i][j] = Math.random();
    //     }
    //  }
    
    // ********** REACT Data source for angular controller to use through out the apps***********

    // @@@@@@@@@@@@@@@@@@@ DATA SOURCES and Models @@@@@@@@@@@@@@@@@@@@@@@

  });

  