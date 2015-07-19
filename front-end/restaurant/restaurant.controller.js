(function() {
  'use strict';
  angular
    .module('bestaurant')
    .controller('RestaurantController', function($scope, $route, RestaurantService, $routeParams) {
      $scope.$route = $route;

      $scope.updatedRestaurant ={};

      RestaurantService.getRestaurants().success(function(data){
        console.log(data);
        $scope.restaurants = data;
      });

      if($routeParams.restaurantId){
        console.log($routeParams.restaurantId);
        RestaurantService.getRestaurant($routeParams.restaurantId).success(function(restaurant){
          console.log(restaurant);
          $scope.restaurant = restaurant;
          $scope.updatedRestaurant = restaurant;
        });
      };

      $scope.newRestaurant = {};

      $scope.addRestaurant = function(newRestaurant){
        console.log(newRestaurant);
        $('.alertItem').fadeIn('slow').fadeOut('slow');
        RestaurantService.addRestaurant(newRestaurant);
        $scope.newRestaurant = {};
      };

      $scope.deleteRestaurant = function(id){
        console.log("delete");
        RestaurantService.deleteRestaurant(id);
      };


      $scope.editRestaurant = function(id, updatedRestaurant){
        $('.alertItem').fadeIn('slow').fadeOut('slow');
        console.log("edit");
        console.log(updatedRestaurant);
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
