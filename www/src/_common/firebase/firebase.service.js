angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://blinding-fire-6620.firebaseIO.com/');
	var auth = $firebaseAuth(ref);

	return {
		logout: function (){
			auth.$unauth();
			$state.go('auth.login');
		},


		login: function (email,password) {
				var promise = auth.$authWithPassword({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		
	
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});