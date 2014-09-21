'use strict';

/**
 * @ngdoc function
 * @name stopemotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stopemotionApp
 */
angular.module('stopemotionApp')
  .controller('MainCtrl', function ($scope, $document, $window, $rootScope, $sce) {
    	

      

      function chagneElSize() {
        
        var winHeight = $window.innerHeight;
        var winWidth = $window.innerWidth;
        
        $scope.winHeight = {
          'height' : winHeight + 'px'
        }

        $scope.docHeight = winHeight;

        $scope.constMarTop = {
          'margin-top' : winHeight / 3 + 'px'
        }

        $scope.frame60 = {
          'width' : winWidth * 60 / 100 + 'px',
          'height' : winHeight * 60 / 100 + 'px'
        }

      };

      

      $rootScope.windowWidth = $window.outerWidth;
      $rootScope.windowHeight = $window.outerHeight;
      
      angular.element($window).bind('resize',function(){
        $rootScope.windowWidth = $window.outerWidth;
        $rootScope.windowHeight = $window.outerHeight;
        $rootScope.$apply('windowWidth');
        $rootScope.$apply('windowHeight');
      });

      $rootScope.$watch('windowWidth',function(newVal, oldVal){

        chagneElSize();
      });

      $rootScope.$watch('windowHeight',function(newVal, oldVal){

        chagneElSize();
      });


    $document.on('scroll', function() {
      //console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());

      if ( $document.scrollTop() < $scope.docHeight){
        $scope.screen1 = true;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = false;
      } else if ($document.scrollTop() < $scope.docHeight * 2){
        $scope.screen1 = false;
        $scope.screen2 = true;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = false;
      }else if ($document.scrollTop() < $scope.docHeight * 3){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = true;
        $scope.screen4 = false;
        $scope.screen5 = false;
      }else if ($document.scrollTop() < $scope.docHeight * 4){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = true;
        $scope.screen5 = false;
      }else if ($document.scrollTop() < $scope.docHeight * 5){
        $scope.screen1 = false;
        $scope.screen2 = false;
        $scope.screen3 = false;
        $scope.screen4 = false;
        $scope.screen5 = true;
      }
      $scope.$apply();
    
    });

    $scope.templates =
      [ { name: 'nothing', url: ''},
        { name: 'fullvideo', url: '././views/fullvideo.html'} ];
    
    $scope.template = $scope.templates[0];

    $scope.openvideo = function(videoId){
      $scope.videoId = videoId;
      $scope.template = $scope.templates[1];
      $('body').css('overflow','hidden');
    };

    $scope.closevideo = function(){
      $scope.template = $scope.templates[0];
      $('body').css('overflow','');
    }

  });
