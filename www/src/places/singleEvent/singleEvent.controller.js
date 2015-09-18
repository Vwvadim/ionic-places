angular.module('places')
	.controller('singleEventCtrl', function($scope, singleEventService,$stateParams) {


 	console.log($stateParams);

	$scope.item = {
		name: $stateParams.name,
		description: $stateParams.description,
		image: $stateParams.image,
		date: $stateParams.date,
		lien: $stateParams.lien,
	}

		singleEventService.getEvent().then(function (data) {
			//console.log(data);
			$scope.items = data.data;
		});

	});
