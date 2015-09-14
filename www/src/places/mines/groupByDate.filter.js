angular.module('places').filter('groupByDate',function(){
	return function(array) {
		return _.groupBy(array, function(n) {
			return n.date;
		});
	};
});
