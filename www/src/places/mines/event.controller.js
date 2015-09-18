angular.module('places')
	.controller('EventCtrl', function($scope,$ionicLoading,EventService,$ionicFilterBar) {

			$ionicLoading.show({
				content: 'Loading...',
				showBackdrop: false
			});


		//properties
		EventService.getGroupedEvent().then(function(data){
console.log(data);
						$scope.grouped = data;
						$ionicLoading.hide();

		});

		var filterBarInstance;

	    $scope.showFilterBar = function () {

	      filterBarInstance = $ionicFilterBar.show({
	        items: $scope.grouped,
	        update: function (filteredItems, filterText) {
	          $scope.grouped = filteredItems;

						console.log(filteredItems);
	        }
	      });
	    };

});
