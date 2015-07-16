(function() {
  'use strict';
  angular
    .module('bestaurant')
    .controller('MenuController', function($scope, $route) {
      $scope.$route = $route;
    })
})();
