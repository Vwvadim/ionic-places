angular.module('places').factory("singleEventService", function ($http) {

	return {
		getEvent: function() {
			return $http.get("api/singleEvent.json");
		}
	}



});
