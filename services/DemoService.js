var app = angular.module('sampleApp');

app.factory('DemoService',function ($http) {
	return {
		sayHello : function() {
			$http({method: 'GET', url: 'abcd.html'}).
			success(function(data, status, headers, config) {
					alert(data);					
			})
		}
	};
});