	'use strict';

angular.module('serveMeApp')
  .controller('ChartCtrl',function ($scope) {
 
  	//Instantiate charts service
  	$scope.chartmodel = 'chart';
  	$scope.columndata = ['created','data1','data2','data3','data4'];
  	$scope.updatedata = ['data5','data6'];

 
  });
