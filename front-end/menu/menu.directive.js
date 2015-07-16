(function() {
  'use strict';
  angular
    .module('menu')
    .directive('menuItem', function(){
      return{
        restrict: 'E',
        templateUrl: 'menu/views/item.html',
        scope: {
          i: '='
        }

      }
    });

})();
