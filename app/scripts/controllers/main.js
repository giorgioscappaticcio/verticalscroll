'use strict';

/**
 * @ngdoc function
 * @name stopemotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stopemotionApp
 */
angular.module('stopemotionApp')
  .controller('MainCtrl', function ($scope, $document, $window) {
    	var winHeight = $window.innerHeight;

    	$scope.winHeight = {
    		'height' : winHeight+20 + 'px'
    	}
  });
