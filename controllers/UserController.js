var sampleApp = angular.module('sampleApp');

sampleApp.controller('UserController', ['$scope','UserDemoService','$state',function($scope,UserDemoService,$state,$stateparams,user) {

    $scope.users = UserDemoService.users;
	
	$scope.hello = function hello() {
		//UserDemoService.sayHello();
		alert('hello');
	};
	
	$scope.edit = function edit(index,user) {
		UserDemoService.editUser(index,user);
	};
	
	$scope.user = user;
		
     
}]);