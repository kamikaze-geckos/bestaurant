(function() {
  'use strict';
  angular
    .module('bestaurant')
    .controller('RestaurantController', function($scope, $route, RestaurantService, $routeParams, $rootScope) {
      $scope.$route = $route;



      $scope.loadEditTemplate = function(restaurant){
        $rootScope.updatedRestaurant = restaurant;
      };

      RestaurantService.getRestaurants().success(function(data){
        $scope.restaurants = data;
      });

      if($routeParams.restaurantId){
        RestaurantService.getRestaurant($routeParams.restaurantId).success(function(restaurant){
          $scope.restaurant = restaurant;
          $scope.updatedRestaurant = restaurant;
        });
      };

      $scope.newRestaurant = {};

      $scope.addRestaurant = function(newRestaurant){
        $('.alertItem').fadeIn('slow').fadeOut('slow');
        RestaurantService.addRestaurant(newRestaurant);
        $scope.newRestaurant = {};
      };

      $scope.deleteRestaurant = function(id){
        RestaurantService.deleteRestaurant(id);
      };


      $scope.editRestaurant = function(id, updatedRestaurant){
        $('.alertItem').fadeIn('slow').fadeOut('slow');
        RestaurantService.editRestaurant(id, updatedRestaurant);
      };

      var watchCallback = function () {
          RestaurantService.getRestaurants().success(function (restaurants) {
            $scope.restaurants = restaurants;
          });
        };

      $scope.$on('restaurant:deleted', watchCallback);
      $scope.$on('restaurant:added', watchCallback);
      $scope.$on('restaurant:edited', watchCallback);

    })
})();
