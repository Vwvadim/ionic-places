"use strict";

angular.module('places')
	.controller('HeaderCtrl', function($rootScope,$scope,$state)
	{
		$scope.title="";
		
		$rootScope.$on('$stateChangeSuccess',
			
			function(event, toState, toParams, fromState, fromPraram){
				
				$scope.title=toState.data.customdata2;
			});
	});