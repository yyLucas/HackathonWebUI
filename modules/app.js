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
            $state.go("dashBoard");
        });     
    }])

 	.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
	        .state('wardDetail', {
	            url: "/wardDetail",
	            templateUrl: "/wardDetail.html",
	            controller:"wardCtrl"
	    	})    
	    	.state('dashBoard', {
                url: "/dashBoard",
                templateUrl: "/dashBoard.html",
                controller: 'mainCtrl'
            });
    }])

	

 	.run([function(){
	     
  	}]);
 
 





