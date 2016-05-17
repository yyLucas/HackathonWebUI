"use strict";
/**
 * @ngdoc overview
 * @name xtmotorwebuiApp
 * @description
 * # xtmotorwebuiApp
 *
 * Main module of the application.
 */
 angular
 	.module('app.controllers', [])
 	.controller('mainCtrl', ['$scope', '$state', '$interval', 'hackathonAPIService', function ($scope, $state, $interval, hackathonAPIService) {
 
 		hackathonAPIService.query({section:'usage?date=2016-5-17'})
          .$promise.then(function(usages){          	
          	$scope.usages = usages;
          	$scope.date = new Date(usages[0].date);
          },function(error){
            //console.log("error");
        });

        $scope.editWard = function(item){  	
        	$state.go('wardDetail',{}, {reload: true});
        	$scope.currentWard = item;
        };

        $scope.backToDashboard = function(){
        	$state.go('dashBoard',{}, {reload: true});
        };

 		$scope.make = [{name:'Make'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedMake = $scope.make[0];



 	}]);