angular.module('places').factory("EventService", function ($http, $q,$filter) {

	return {
		jsonResult:"",
		getGroupedEvent: function () {

			var that=this;

			return this.getEvent().then(function(result){

				that.jsonResult = result.data;
				console.log("loaded")

				var grouped = $filter('groupByDate')(result.data);

				angular.forEach(grouped, function(value, key) {

					grouped[key] = {date:key,list:value}
	  		console.log(key + 'groupByDate' + value);
	});


console.log('grouped' , grouped);

				return grouped;
			});

		},

		getEvent: function() {
			return $http.get("api/event.json");
		}
	}

});
