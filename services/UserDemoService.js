var app = angular.module('sampleApp');

app.factory('UserDemoService',function () {
	return {
		users : [
			{ name: 'Indra', age: 26, society: 'galaxy', flat: '1234' },
			{ name: 'Sagar', age: 44, society: 'skyline', flat: '1AA4' },
			{ name: 'Rohan', age: 39, society: 'galaxy', flat: 'BB34' },
			{ name: 'Yash', age: 24, society: 'seeview', flat: 'XC34' },
		],
		
		addUser : function (user) {
			this.users.push(user);
		},
		
		editUser : function(index,user) {
			this.users.splice(index,1,user);
		}
	};
});