(function() {
  'use strict';
  angular
    .module('bestaurant')
    .factory('RestaurantService', function($http, $rootScope){
      var url = 'http://kamikaze-geckos.herokuapp.com/api/restaurants';

      var getRestaurants = function(restaurantId){
        return $http.get(url + '.json').success(function(data){
          return data;
        })
      };

      var getRestaurant = function(id){
        return $http.get(url + '/' + id + '.json').success(function(restaurant){
          return restaurant;
        })
      };

      var addRestaurant = function(newRestaurant){
        $http.post(url + '.json', newRestaurant).success(function(resp){
          $rootScope.$broadcast('restaurant:added');
          console.log("new restaurant added");
        });
      };

      var deleteRestaurant = function(id){
        $http.delete(url + '/' + id + '.json').success(function(resp){
          $rootScope.$broadcast('restaurant:deleted');
          console.log("restaurant deleted");
        });
      };

      var editRestaurant = function(id, updatedRestaurant){
        $http.put(url + '/' + id + '.json', updatedRestaurant).success(function(resp){
          $rootScope.$broadcast('restaurant:edited');
          console.log("restaurant updated");
        });
      };

      return{
        getRestaurants: getRestaurants,
        getRestaurant: getRestaurant,
        addRestaurant: addRestaurant,
        deleteRestaurant: deleteRestaurant,
        editRestaurant: editRestaurant
      }

    });
})();
