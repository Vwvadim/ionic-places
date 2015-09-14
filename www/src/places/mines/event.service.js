angular.module('places').factory("EventService", function ($http, $q,$filter) {

	return {
		jsonResult:null,
		getGroupedEvent: function () {

			var that=this;

			return this.getEvent().then(function(result){

				that.jsonResult = result.data;
				console.log("loaded")

				return $filter('groupByDate')(result.data);
			});

		},

		getEvent: function() {
			return $http.get("api/event.json");
		}
	}

});
