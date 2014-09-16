var sampleApp = angular.module('core');

sampleApp.controller('AddNewUserController', function($scope, $http) {
    hello();
    $scope.message = 'This is Add new order screen';
	function hello() {
		$http({method: 'GET', url: 'abcd.html'}).
			success(function(data, status, headers, config) {
					alert(data);
					$scope.hellodata = data;
			}).
		error(function(data, status, headers, config) {
					alert(data)});
	};
	
     
});