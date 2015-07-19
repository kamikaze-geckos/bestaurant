(function() {
  'use strict';
  angular
    .module('bestaurant', [
      'ngRoute',
      'underscore',
      'menu',
      'restaurant'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          redirectTo: '/restaurants'
        })
        .when('/restaurants', {
          templateUrl: 'restaurant/views/restaurants.html',
          controller: 'RestaurantController'
        })
        .when('/editRestaurant', {
          templateUrl: 'restaurant/views/editRestaurant.html',
          controller: 'RestaurantController'
        })
        .when('/:restaurantId', {
          templateUrl: 'menu/views/menu.html',
          controller: 'MenuController'
        })

        .when('/:restaurantId/:itemId', {
          templateUrl: 'menu/views/detailItem.html',
          controller: 'MenuController'
        })


    })
  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });
})();
