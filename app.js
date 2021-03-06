//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ui.router','restangular','ui.bootstrap','ui.calendar']);
 
sampleApp.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/rest');
	
});

sampleApp.run(function(AuthService,Restangular){
	Restangular.setFullRequestInterceptor(function(element, operation, route, url, headers, params) {
      var currentHeaders = headers;
       if (AuthService.getSessionId()) {
         currentHeaders.sessionId = AuthService.getSessionId();
		 alert('auth service interceptor');
       }
      return {
        element: element,
        params: params,
        headers: currentHeaders
      };
    });
});

sampleApp.config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common['Tenant-id'] = 'X';
}]);
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
		
		.state('myPage.addSociety', {
			url: '/addSociety',
			templateUrl: 'templates/AddSociety.html',
			controller: 'AddSocietyController'
		})
		
		.state('myPage.user', {
			url: '/user',
			templateUrl: 'templates/User.html',
			controller: 'UserController'
		})
		
		.state('myPage.editUser', {
			url: '/user/:id/edit',
			templateUrl: 'templates/UserEdit.html',
			controller: 'UserController',
			resolve : 	{
					UserDemoService : 'UserDemoService',
					user : function(UserDemoService) {
						alert(UserDemoService.users[3].name);
						return UserDemoService.users[2];
					}
			}
		})
		
		.state('myPage.events', {
			url: '/events',
			templateUrl: 'templates/Events.html'
		})
		
		
		.state('login', {
			url: '/Login',
			templateUrl: 'templates/Login.html',
			controller: 'LoginController'
		})
});
 
 

angular.module('sampleApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, message) {

  $scope.myMessage = message;


  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.users = [{name:'indra'},{name:'anish'},{name:'anand'},{name:'sagar'}];
 
});

sampleApp.controller('LoginController', function($scope,$modal,Restangular,DialogService) {
	$scope.login = function() {
	var data = {userName: 'anand', password: 'password'};
		var queryParamObj = { role: 'admin' },
		headerObj = { 'x-user': 'admin' };
		var user = Restangular.one('login');
		
    
		user.post('',$scope.serialize(data),'',{'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"});
		alert(user);
	}
	
	$scope.open = function (size) {
		DialogService.error('error ala re');
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