(function() {
  'use strict';
  angular
    .module('menu')
    .controller('MenuController', function($scope, _, MenuService, $routeParams){

      // MenuService.getMenu().success(function(items){
      //   $scope.items = items;
      // });

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

      $scope.sortName = 'id';

      $scope.selectSort = function(sortSelected, $event){
        var el = $event.target;
        $(el).parent().siblings().children().css('text-decoration', 'none');
        $(el).css('text-decoration', 'underline');
        $scope.sortName = sortSelected;
      };

      //FAKE DATA
      var items = [
        {
          name: 'Fat Belly Burger',
          description: 'A million burgers sold!',
          price: '24.98',
          image: 'http://lorempixel.com/500/500/food/1/'
        },
        {
          name: 'Fat Belly Braut',
          description: 'It tastes disgusting!',
          price: '19.97',
          image: 'http://lorempixel.com/500/500/food/2/'
        },
        {
          name: 'Fake Belly Vegan Burger',
          description: 'Square means we care!',
          price: '33.32',
          image: 'http://lorempixel.com/500/500/food/3/'
        },
        {
          name: 'Fake Belly Began Vraut',
          description: 'Overpriced!',
          price: '23.18',
          image: 'http://lorempixel.com/500/500/food/4/'
        },
      ];

      $scope.items = items;

    });
})();
