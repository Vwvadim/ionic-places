angular.module('places')
	.controller('EventCtrl', function($scope,$ionicLoading,EventService,$ionicFilterBar) {

			$ionicLoading.show({
				content: 'Loading...',
				showBackdrop: false
			});


		//properties
		EventService.getGroupedEvent().then(function(data){

						$scope.grouped = data;
						$ionicLoading.hide();

		});

		var filterBarInstance;

	    $scope.showFilterBar = function () {
	      filterBarInstance = $ionicFilterBar.show({
	        items: $scope.groupBy,
	        update: function (filteredItems, filterText) {
	          $scope.groupBy = filteredItems;
	          if (filterText) {
	            console.log(filterText);
	          }
	        }
	      });
	    };

});
