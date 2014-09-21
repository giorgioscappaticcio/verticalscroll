'use strict';

/**
 * @ngdoc directive
 * @name stopemotionApp.directive:vimeo
 * @description
 * # vimeo
 */
angular.module('stopemotionApp')
  .directive('vimeo', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        //Assumes that true means the video is playing
        controlBoolean: '='
      },
      template: '<iframe id="{{id}}" height="{{height}}" width="{{width}}"> {{text}} </iframe>',
      link: function postLink(scope, element, attrs) {
        var url = "http://player.vimeo.com/video/" + attrs.vid + "?title=0&byline=0&portrait=0&api=1";
        element.attr('src', url);

        var iframe = element[0],
        player = $f(iframe);

        scope.$watch('controlBoolean', function(){
          if(scope.controlBoolean){
            player.api('play');
          }
          else{
            player.api('pause');
          }
        });
      }
    };
  });
