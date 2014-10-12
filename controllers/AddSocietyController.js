var sampleApp = angular.module('sampleApp');

sampleApp.controller('AddSocietyController', function($scope,Restangular) {
	$scope.sayHi = function () {
		alert('Hi Society controller');
	}
	
	$scope.addSociety = function() {
		var data = {name: $scope.name,
					address: $scope.address,
					date: $scope.date,
					regNumber: $scope.regNumber
					};
		var queryParamObj = { role: 'admin' },
		headerObj = { 'x-user': 'admin' };
		var user = Restangular.one('society');
		
    
		user.post('',$scope.serialize(data),'',{'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"});
		alert(user);
	}
	
	$scope.serialize = function(obj) {
	  var str = [];
	  for(var p in obj)
		if (obj.hasOwnProperty(p)) {
		  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	  return str.join("&");
	}
});