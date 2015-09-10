angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService, $http){
			
$http.get("/api/friends.json").
	success(function(data, status, header, config){
		console.log(data)
		$scope.list=data;
	}).
	error(function(data,status,header,config) {
		console.log("error")

	});

	});
