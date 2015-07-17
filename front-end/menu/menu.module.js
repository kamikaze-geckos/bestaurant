(function() {
  'use strict';
  angular
    .module('menu', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/restaurant_id', {
          templateUrl: 'menu/views/menu.html',
          controller: 'MenuController'
        })

        .when('/restaurant_id/item_id', {
          templateUrl: 'menu/views/detailItem.html',
          controller: 'MenuController'
        })
    });
})();
