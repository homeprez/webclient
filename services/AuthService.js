var app = angular.module('sampleApp');

app.factory('AuthService',function ($http) {
	return {
		getSessionId : function() {
			return "indra";
		}
	};
});