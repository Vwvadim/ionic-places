angular.module('places').factory("singleEventService"), function ($http) {

	getEvent: function() {
		return $http.get("api/singleEvent.json");
	}

});
