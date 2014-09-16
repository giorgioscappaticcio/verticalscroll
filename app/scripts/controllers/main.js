'use strict';

/**
 * @ngdoc function
 * @name stopemotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stopemotionApp
 */
angular.module('stopemotionApp')
  .controller('MainCtrl', function ($scope, $document, $window, $rootScope) {
    	var winHeight = $window.innerHeight;

    	$scope.winHeight = {
    		'height' : winHeight+20 + 'px'
    	}

    	$rootScope.windowWidth = $window.outerWidth;
 		angular.element($window).bind('resize',function(){
  			$rootScope.windowWidth = $window.outerWidth;
  			$rootScope.$apply('windowWidth');
 		});

 		$rootScope.$watch('windowWidth',function(newVal, oldVal){
  			var winHeight = $window.innerHeight;

	    	$scope.winHeight = {
	    		'height' : winHeight+20 + 'px'
	    	};
 		})
  });
