(function(){

	angular.module("turtleFacts", ['ngRoute'])

		.config(function($routeProvider){

			$routeProvider
				.when('/',{
					templateUrl: 'partials/home.html'
				})
				.when('/quiz',{
					templateUrl: 'partials/quiz.html'
				})
				.when('/results',{
					templateUrl: 'partials/results.html'
				})
				.otherwise({
					redirectTo: '/'
				})


		});

})();