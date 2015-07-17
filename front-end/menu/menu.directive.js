(function() {
  'use strict';
  angular
    .module('menu')
    .directive('menuItem', function(){
      return{
        restrict: 'E',
        templateUrl: 'menu/views/detailItem.html',
        scope: {
          i: '='
        }

      }
    });

})();
