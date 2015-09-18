angular.module('places')
	.config(function ($stateProvider) {

		//resolve to restrict access without authentification
		var authResolve = function(LoginService,$state){
			var promise = LoginService.requireAuth()
				.catch(function(error){

					$state.go("login");

					return promise;
				});
			return promise;
		};

		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "src/nav/menu/menu.html",
				controller: "MenuCtrl"

				//disable resolve auth to test more quickly
				/*resolve:{
					auth: authResolve
				}*/
			})
			// Each tab has its own nav history stack:
			.state('tab.event', {
				url: '/event',
				data:{
					title:"Soirées"
				},
				views: {
					'tab-event': {
						templateUrl: 'src/places/mines/event.html',
						controller:'EventCtrl'
					}
				}
			})

			.state('tab.singleEvent', {
				url: '/singleEvent:name?image?description?date?lien',
				data:{
					title:"Votre soirée"
				},

				views: {
					'tab-event': {
						templateUrl: 'src/places/singleEvent/singleEvent.html',
						controller:'singleEventCtrl'
					}
				}
			})

			.state('tab.add-place', {
				url: '/add-place',
				data:{
					title:"Mes soirées"
				},
				views: {
					'tab-add-place': {
						templateUrl: 'src/places/add/add-place.html',
						controller:'AddPlaceCtrl'
					}
				}
			})
			.state('tab.around-me', {
				url: '/around-me',
				data:{
					title:"Évènements près de chez moi"
				},
				views: {
					'tab-around-me': {
						templateUrl: 'src/places/around/around-me.html',
						controller:'AroundMeCtrl'
					}
				}
			})
			.state('tab.friends', {
				url: '/friends',
				data:{
					title:"Mes amis"
				},
				views: {
					'tab-friends': {
						templateUrl: 'src/places/friends/friends.html',
						controller:'FriendsCtrl'
					}
				}
			});

	});
