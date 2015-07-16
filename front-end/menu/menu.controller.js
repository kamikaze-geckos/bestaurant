(function() {
  'use strict';
  angular
    .module('menu')
    .controller('MenuController', function($scope, _, MenuService, $routeParams){

      MenuService.getMenu().success(function(items){
        $scope.items = items;
      });

      if($routeParams.item_id){
        MenuService.getItem($routeParams.item_id).success(function(item){
          $scope.item = item;
        });
      };

      $scope.addItem = function(newItem){
        MenuService.addItem(newItem);
      };

      $scope.deleteItem = function(item_id){
        MenuService.deleteItem(item_id);
      };

      $scope.editItem = function(item_id, updatedItem){
        MenuService.editItem(item_id, updatedItem);
      };

    });
})();
