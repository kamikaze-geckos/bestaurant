(function() {
  'use strict';
  angular
    .module('menu')
    .controller('MenuController', function($scope, _, MenuService, $routeParams){

      MenuService.getMenu().success(function(items){
        $scope.items = items;
      });

      $scope.addItem = function(newItem){
        MenuService.addItem(newItem);
      };

      $scope.deleteItem = function(item_id){
        MenuService.deleteItem(item_id);
      };

      $scope.editItem = function(item_id, updatedItem){
        MenuService.editItem(item_id, updatedItem);
      };

      if($routeParams.item_id){
        $scope.getItem = function($routeParams.item_id){
          MenuService.getItem(item_id).success(function(item){
            $scope.item = item;
          });
        };
      };
    })
})();
