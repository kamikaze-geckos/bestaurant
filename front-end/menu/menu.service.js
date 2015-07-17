(function() {
  'use strict';
  angular
    .module('menu')
    .factory('MenuService', function($http, $rootScope){
      var url = 'http://10.0.10.130:3000/api/items.json';

      var getMenu = function(restaurant_id){
        return $http.get(url).success(function(data){
          console.log(data);
          return data;
        })
      };

      var getItem = function(item_id){
        return $http.get(url + '/' + item_id).success(function(item){
          return item;
        })
      };

      var addItem = function(newItem){
        $http.post(url, newItem).success(function(resp){
          console.log("new item added");
        });
      };

      var deleteItem = function(item_id){
        $http.delete(url + '/' + item_id).success(function(resp){
          console.log("item deleted");
        });
      };

      var editItem = function(item_id, updatedItem){
        $http.put(url + '/' + item_id, updatedItem).success(function(resp){
          console.log("item updated");
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
