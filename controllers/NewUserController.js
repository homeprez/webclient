var sampleApp = angular.module('sampleApp');

sampleApp.controller('NewUserController', ['$scope','DemoService',function($scope,DemoService) {

    $scope.message = 'This is Add new order screen';
	function hello() {
		DemoService.sayHello();
	};
	
     
}]);