'use strict';
/**
 * @ngdoc overview
 * @name xtmotorwebuiApp
 * @description
 * # xtmotorwebuiApp
 *
 * Main module of the application.
 */
 angular
 	.module('app.services', [])
	 	.service('hackathonAPIService', ['$resource','$http', function($resource,$http) {
	        var apiUrl = 'http://orionhackathon2016-api.azurewebsites.net/';

	        return $resource(apiUrl+':section/:id',{ id: '@_id' },{ 'update': { method: 'PUT' }});
	            //   DEFAULT RESOURCE FUNTIONS
	            //   'get':    {method:'GET'},
	            //   'save':   {method:'POST'},
	            //   'query':  {method:'GET', isArray:true},
	            //   'remove': {method:'DELETE'},
	            //   'delete': {method:'DELETE'}
	  	}]);