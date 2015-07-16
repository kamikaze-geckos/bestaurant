(function() {
  'use strict';
  angular
    .module('bestaurant')
    .controller('RestaurantController', function($scope, $route) {
      $scope.$route = $route;
    })
})();
