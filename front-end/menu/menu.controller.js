(function() {
  'use strict';
  angular
    .module('menu')
    .controller('MenuController', function($scope, _, MenuService, $routeParams){

      $scope.updatedItem ={};

      MenuService.getMenu().success(function(items){
        console.log(items);
        $scope.items = items;
      });

      if($routeParams.itemId){
        console.log($routeParams.itemId);
        MenuService.getItem($routeParams.itemId).success(function(item){
          console.log(item);
          $scope.item = item;
          $scope.updatedItem = item;
        });
      };

      $scope.addItem = function(newItem){
        MenuService.addItem(newItem);
      };

      $scope.deleteItem = function(id){
        MenuService.deleteItem(id);
      };


      $scope.editItem = function(id, updatedItem){
        console.log("edit");
        console.log(updatedItem);
        MenuService.editItem(id, updatedItem);
        updatedItem = {};
      };

      $scope.sortName = 'id';

      $scope.selectSort = function(sortSelected, $event){
        var el = $event.target;
        $(el).parent().siblings().children().css('text-decoration', 'none');
        $(el).css('text-decoration', 'underline');
        $scope.sortName = sortSelected;
      };


      var watchCallback = function () {
          MenuService.getMenu().success(function (items) {
            $scope.items = items;
          });
        };

      $scope.$on('item:deleted', watchCallback);
      $scope.$on('item:added', watchCallback);
      $scope.$on('item:edited', watchCallback);

      //FAKE DATA
      // var items = [
      //   {
      //     name: 'Fat Belly Burger',
      //     description: 'A million burgers sold!',
      //     price: '24.98',
      //     image: 'http://lorempixel.com/500/500/food/1/'
      //   },
      //   {
      //     name: 'Fat Belly Braut',
      //     description: 'It tastes disgusting!',
      //     price: '19.97',
      //     image: 'http://lorempixel.com/500/500/food/2/'
      //   },
      //   {
      //     name: 'Fake Belly Vegan Burger',
      //     description: 'Square means we care!',
      //     price: '33.32',
      //     image: 'http://lorempixel.com/500/500/food/3/'
      //   },
      //   {
      //     name: 'Fake Belly Began Vraut',
      //     description: 'Overpriced!',
      //     price: '23.18',
      //     image: 'http://lorempixel.com/500/500/food/4/'
      //   },
      // ];
      //
      // $scope.items = items;

    });
})();
