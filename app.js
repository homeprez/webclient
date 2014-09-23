//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ui.router']);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    
    $stateProvider
        
        // ADD NEW USER ========================================
        .state('AddNewUser', {
            url: '/AddNewUser',
            templateUrl: 'templates/add_user.html'
        })
        
        // SHOW USERS =================================
        .state('ShowUsers', {
            url: '/ShowUsers',
			templateUrl: 'templates/show_users.html',
			controller: 'ShowOrdersController' 
        })
		
		.state('about', {
			url: '/about',
			templateUrl: 'templates/About.html'
		})
		
		.state('myPage', {
			url: '',
			templateUrl: 'templates/MyPage.html'
		})
		
		.state('myPage.myBills', {
			url: '/mybills',
			templateUrl: 'templates/MyBills.html'
		})
		
		.state('myPage.myFlats', {
			url: '/myflats',
			templateUrl: 'templates/MyFlats.html'
		})
		
		.state('myPage.myNotifications', {
			url: '/myNotifications',
			templateUrl: 'templates/MyNotifications.html'
		})
		
		.state('login', {
			url: '/Login',
			templateUrl: 'templates/Login.html',
			controller: 'LoginController'
		})
});
 
 

 
 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.users = [{name:'indra'},{name:'anish'},{name:'anand'},{name:'sagar'}];
 
});

sampleApp.controller('LoginController', function($scope) {
	$scope.login = function() {
		alert('login controller');
	}
});