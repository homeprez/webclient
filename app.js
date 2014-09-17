//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewUser', {
        templateUrl: 'templates/add_order.html',
        controller: 'NewUserController'
    }).
      when('/ShowUsers', {
        templateUrl: 'templates/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);
 
 

 
 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.users = [{name:'indra'},{name:'anish'},{name:'anand'},{name:'sagar'}];
 
});