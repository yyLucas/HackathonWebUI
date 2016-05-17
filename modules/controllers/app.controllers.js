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
 	.controller('mainCtrl', ['$scope', '$state', '$interval', 'xtmotorsAPIService', function ($scope, $state, $interval, xtmotorsAPIService) {
 
 		xtmotorsAPIService.query({section:'car/summary'})
          .$promise.then(function(cars){
            $scope.cars  = cars.slice(0,4);
          },function(error){
            //console.log("error");
        });

        $scope.editWard = function(){
        	$state.go('wardDetail',{}, {reload: true});
        };

        $scope.backToDashboard = function(){
        	$state.go('dashBoard',{}, {reload: true});
        };

        $scope.message = " hello Lucas!";
        $scope.searchText = "";

 		$scope.make = [{name:'Make'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedMake = $scope.make[0];

		$scope.odometer = [{name:'Odometer'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedOdometer = $scope.odometer[0];

		$scope.model = [{name:'Model'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedModel = $scope.model[0];

		$scope.year = [{name:'Year'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedYear = $scope.year[0];

		$scope.bodyType = [{name:'BodyType'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedBodyType = $scope.bodyType[0];

		$scope.price = [{name:'Price'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedPrice = $scope.price[0];


		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.active = 0;
		var slides = $scope.slides = [];
		var currIndex = 0;

		$scope.determinateValue = 30;
		$scope.modes = [ ];
            $scope.activated = true;

		
		$interval(function() {
               $scope.determinateValue += 1;
               if ($scope.determinateValue > 100) {
                  $scope.determinateValue = 30;
               }
            }, 100, 0, true);

		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://lorempixel.com/' + newWidth + '/300',
				text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
				id: currIndex++
			});
			
		}
		for (var i = 0; i < 4; i++) {
				$scope.addSlide();
		}

 	}])


	.controller('wardCtrl', ['$rootScope','$scope', '$state',function($rootScope, $scope, $state){
	    $rootScope.edit = function(){
	    	$state.go('carFilter',{}, {reload: true});
	    };

	    $scope.make = [{name:'Make'}, {name:'Toyota'}, {name:'Honda'}, {name:'BMW'}];
		$scope.selectedMake = $scope.make[0];
	}]);