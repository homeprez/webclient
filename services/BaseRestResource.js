var app = angular.module('sampleApp');

app.factory('DemoService',function ($http) {
	return {
		getData : function() {
			$http({method: 'GET', url: 'abcd.html'}).
			success(function(data, status, headers, config) {
					alert(data);					
			})
		};
		
		postData : function() {
			$http({method: 'POST', url: 'abcd.html'})
		}
	};
});