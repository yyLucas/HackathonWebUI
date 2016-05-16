/**
 * @ngdoc overview
 * @name xtmotorwebuiApp
 * @description
 * # xtmotorwebuiApp
 *
 * Main module of the application.
 */
angular
 	.module('xtmotorsWebsite', [		
 		'ngResource',
 		'ngAnimate',
 		'ui.router',
        'ngMaterial',

 		'app.controllers',
 		'app.directives',
 		'app.services'
 		

 	])

 	.config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get("$state");
            $state.go("carFilter");
        });     
    }])

 	.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
	        .state('carDetail', {
	            url: "/carDetail",
	            templateUrl: "/carDetail.html",
	            controller:"carCtrl"
	    	})    
	    	.state('carFilter', {
                url: "/carFilter",
                templateUrl: "/carFilter.html",
                controller: 'carCtrl'
            });
    }])

	

 	.run([function(){
	     
  	}]);
 
 





