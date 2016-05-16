/**
 * @ngdoc overview
 * @name xtmotorwebuiApp
 * @description
 * # xtmotorwebuiApp
 *
 * Main module of the application.
 */
 angular
 	.module('app.directives', [])
 	.directive('name', [function () {
 		'use strict';
 		return {
 			restrict: 'A',
 			link: function (scope, iElement, iAttrs) {
 				
 			}
 		};
 	}]);