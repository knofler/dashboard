'use strict';

angular.module('serveMeApp')
  .directive('charts', function (charts,socket) {
    return {
      templateUrl: 'app/directive/charts/charts.html',
      restrict: 'EA',
      scope:{
      	chartModel :'=',
      	chartData  :"=",
      	updateData :"=" 
      },
      link: function (scope, element, attrs) {
      	// instantiate charts service
      	// console.log("chartModel is : ",scope.chartModel)
      	scope.chart = new charts(scope.chartData,scope.chartModel);

	 	//assign chartObj to data model
	 	scope.chartobj  = scope.chart.chartObj;

	    //C3 generate the graph for the first time on page on page load On Page load run
		setTimeout(function(){
			// *****************Generate chart without data********************
			scope.apiChart = c3.generate({
				bindto:'#apiChart',
				data:{
					x:'created',
				    columns:scope.chartobj
				},
				axis: {
					x:{
			        	type: 'timeseries',
			        	tick: {
			            	format: '%Y-%m-%d'
			        	}
			        }
			    }    
			 });
		   },500)		

		// Graph function to update graph with new data 
		scope.graph  =  function () {
			// console.log("Graph will be rendered by this function")
			// console.log("chartData before update is ", scope.chartData);
			// console.log("update data is ", scope.updateData)
			scope.chart.update(scope.updateData);
			// console.log("chartData after update is ", scope.chartData);
			// scope.chart.chartObj.push(scope.updateData);
			// console.log("ChartObj after push is  ", scope.chart.chartObj); 
			// On chart update emit notification
			scope.chart.notify("chart");
		 };	 

		// ************Load Data **************************

		//loadData function to re render the graph with new data
		scope.loadData = function(){
			// console.log("loaddata being executed by socket", scope.chartData);
			setTimeout(function(){
			  scope.apiChart.load({
				columns:scope.chartobj,
				type:'line'
			   })
			 },500)  
		 };

		//On Socket notification update graph
		socket.socket.on('updateGraph',function(data){
		  // console.log("update_graph data ",  data)
		  scope.loadData();
		 });

		//On column drop run graph function
		socket.socket.on('runChartUpdate',function(data){
		  // console.log("runChartUpdate data ",  data)
		  scope.graph();
		 });
	  }
    };
  });