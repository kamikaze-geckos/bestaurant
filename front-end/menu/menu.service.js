(function() {
  'use strict';
  angular
    .module('menu')
    .factory('MenuService', function($http, $rootScope){
      var url = 'http://kamikaze-geckos.herokuapp.com/api/items';

      var getMenu = function(restaurantId){
        return $http.get(url + '.json').success(function(data){
          return data;
        })
      };

      var getItem = function(id){
        return $http.get(url + '/' + id + '.json').success(function(item){
          return item;
        })
      };

      var addItem = function(newItem){
        $http.post(url + '.json', newItem).success(function(resp){
          $rootScope.$broadcast('item:added');
        });
      };

      var deleteItem = function(id){
        $http.delete(url + '/' + id + '.json').success(function(resp){
          $rootScope.$broadcast('item:deleted');
        });
      };

      var editItem = function(id, updatedItem){
        $http.put(url + '/' + id + '.json', updatedItem).success(function(resp){
          $rootScope.$broadcast('item:edited');
        });
      };

      return{
        getMenu: getMenu,
        getItem: getItem,
        addItem: addItem,
        deleteItem: deleteItem,
        editItem: editItem
      }

    });
})();
