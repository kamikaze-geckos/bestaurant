(function() {
  'use strict';
  angular
    .module('bestaurant', [
      'ngRoute',
      'underscore'
    ])
  angular
    .module('underscore', [])
    .factory('_', function($window){
    return $window._;
    });
})();
