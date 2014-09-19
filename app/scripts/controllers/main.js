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

      $scope.docHeight = winHeight;

    	$scope.winHeight = {
    		'height' : winHeight + 'px'
    	}

    	$rootScope.windowWidth = $window.outerWidth;
 		angular.element($window).bind('resize',function(){
  			$rootScope.windowWidth = $window.outerWidth;
  			$rootScope.$apply('windowWidth');
 		});

 		$rootScope.$watch('windowWidth',function(newVal, oldVal){
  			var winHeight = $window.innerHeight;

	    	$scope.winHeight = {
	    		'height' : winHeight + 'px'
	    	};

        $scope.docHeight = winHeight;
 		});

    // $scope.screen1 = true;
    // $scope.screen2 = false;

    $document.on('scroll', function() {
      //console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());

      if ($document.scrollTop() >= 0 && $document.scrollTop() < $scope.docHeight){
        $scope.screen1 = true;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = false;
      } else if ($document.scrollTop() >= $scope.docHeight && $document.scrollTop() < $scope.docHeight * 2){
        $scope.screen1 = false;
        $scope.screen2 = true;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = false;
      }else if ($document.scrollTop() >= $scope.docHeight * 2 && $document.scrollTop() < $scope.docHeight * 3){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = true;
        $scope.screen4 = false;
        $scope.screen5 = false;
      }else if ($document.scrollTop() >= $scope.docHeight * 3 && $document.scrollTop() < $scope.docHeight * 4){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = true;
        $scope.screen5 = false;
      }else if ($document.scrollTop() >= $scope.docHeight * 4 && $document.scrollTop() <= $scope.docHeight * 5){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = true;
      }
      $scope.$apply();
    
    });

  });
