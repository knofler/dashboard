'use strict';

angular.module('serveMeApp')
  .controller('DashboardCtrl',function ($scope) {
   
	// @@@@@@@@@@@@@@@@@@@ Directive implementation codes here @@@@@@@@@@@@@@@@@@@@@@@
	  
  	//Instantiate charts service
  	$scope.chartmodel = 'chart';
  	$scope.columndata = ['created'];
  	$scope.updatedata = [];

    $scope.apiName  = 'charts';
    $scope.dataobj  = [{name:'rumman'}, {name:'john'}, {name:'Alfred'},{name:'Leisa'}, {name:'David'}, {name:'Andy'}];
    $scope.dashData = ['Dash-ten','Dash-nine','Dash-eight','Dash-seven','Dash-six','Dash-five'];

  });
