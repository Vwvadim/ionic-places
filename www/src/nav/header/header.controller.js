"use strict";

angular.module('places')
	.controller('HeaderCtrl', function($rootScope,$scope,$state,$ionicFilterBar) {

		//properties
		$scope.enabled = _isEnabled();
		$scope.title = _getTitle();
		$scope.backEnabled = _backEnabled();

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){

				$scope.title = _getTitle();
				$scope.enabled = _isEnabled();
				$scope.backEnabled = _backEnabled();

		});

		//privates
		function _isEnabled(){
			return !$state.is("login");
		};

		function _getTitle(){
			return ($state.$current.data) ? $state.$current.data.title : "";
		};

		function _backEnabled(){
			return $state.is("tab.singleEvent");
		};

	});
