'use strict';

angular.module('serveMeApp')
  .controller('CsvCtrl', function ($scope) {
 	
 	$scope.url      = "/assets/dataDir/hw.csv";
  	$scope.coldata  = ['MachineName','PrimaryUser','SystemManufacturer',
  					  'SystemProduct','SystemModel','CPUProduct','CPU Speed(MHz)',
  					  'Device CreateDate','Hard DiskSpace','Free DiskSpace','IP Address'];			  

  });
