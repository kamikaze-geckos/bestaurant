(function() {
  'use strict';
  angular
    .module('bestaurant', [
      'ngRoute',
      'underscore',
      'menu'
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
        .when('/restaurants/:title', {
          templateUrl: 'menu/views/menu.html',
          controller: 'MenuController'
        })
    })
  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });
})();
