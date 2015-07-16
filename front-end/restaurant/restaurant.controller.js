(function() {
  'use strict';
  angular
    .module('bestaurant')
    .controller('RestaurantController', function($scope, $route) {
      $scope.$route = $route;

      var restaurants = [
        {
          name: 'McDonald\'s',
          description: 'A million burgers sold!',
          image: 'http://lorempixel.com/500/500/food/1/'
        },
        {
          name: 'Burger King',
          description: 'It tastes disgusting!',
          image: 'http://lorempixel.com/500/500/food/2/'
        },
        {
          name: 'Wendy\'s',
          description: 'Square means we care!',
          image: 'http://lorempixel.com/500/500/food/3/'
        },
        {
          name: 'Five Guys',
          description: 'Overpriced as fuck!',
          image: 'http://lorempixel.com/500/500/food/4/'
        },
      ]

      $scope.restaurants = restaurants;
    })
})();
