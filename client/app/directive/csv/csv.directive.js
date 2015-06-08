'use strict';

angular.module('serveMeApp')
  .directive('csv', function ($http,datas) {
    return {
      templateUrl: 'app/directive/csv/csv.html',
      restrict: 'EA',
      scope:{
      	url:'=',
      	colData:'='
      },
      link: function (scope, element, attrs) {
      		
      	    // console.log('columndata is ', scope.colData);
      	    // console.log('dataFormat is ', scope.dataformat)

      	    if (scope.colData == undefined) {
      	    	scope.columndata = [];
      	    }else{
      	    	scope.columndata = scope.colData;
      	    } 

	      	scope.addColumn    = function (rowsEnter){
				scope.columndata.forEach(function(colProp){
					rowsEnter.append("td")
				    .text(function(d){
				 		// console.log("d inside addColum is : ", d)
				 		// console.log("colHead is : " , d[colHead])
				 	return d[colProp]
				 });
				})
	  	     };
	  	    scope.addColHead   = function (thEnter){
	  	    	console.log("thEnter is ",thEnter)
					thEnter.append("th")
				    .text(function(d){
				 		// console.log("d inside addColum is : ", d)
				 		// console.log("colHead is : " , colHead)
				 	return d;
				})
	  	     }; 
	      	scope.texttoCsv    = function (){
		      var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
		      var csvContent = "data:text/csv;charset=utf-8,";
		      data.forEach(function(infoArray, index){
		      var dataString = infoArray.join(",");
		      csvContent += index < infoArray.length ? dataString+ "\n" : dataString;
		      }); 
		      var encodedUri = encodeURI(csvContent);
		      var link = document.createElement("a");
		      link.setAttribute("href", encodedUri);
		      link.setAttribute("download", "my_data.csv");
		      link.click(); // This will download the data file named "my_data.csv".
	 		 };
		    scope.writetojson  = function (data){
		 		console.log("write json got data is : ",  data);
		        var csvContent = "data:text/csv;charset=utf-8,";
		        var dataString;

		        data.forEach(function(infoArray, index){
			      	console.log("infoArray is ", infoArray);
			      	dataString = infoArray.join(",");
			      	console.log("dataString is ",dataString.length);
			      	csvContent += index < dataString.length ? dataString+ "\n" : dataString;
			      	console.log("csvContent is ", csvContent)
		         }); 

			      var encodedUri = encodeURI(csvContent);
			      var link = document.createElement("a");
			      link.setAttribute("href", encodedUri);
			      link.setAttribute("download", "my_data.csv");
			      link.click(); // This will download the data file named "my_data.csv".
			      console.log("link executed");
		     }; 
	        scope.data         = new datas(scope.url,'.col-lg-14',scope.addColumn,scope.addColHead,scope.columndata);  

	        scope.csvdata = scope.data.csvdata

	        setTimeout(function(){
	        	console.log("csvdata is: ", scope.data.csvdata)
	        },2000);
	     }
     };
  });