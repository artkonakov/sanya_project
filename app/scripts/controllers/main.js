'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:MainCtrl
 * @description
 * # CartCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("MainCtrl", ['$scope', 'getItems', '$rootScope', function($scope, getItems, $rootScope) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;
      console.log($scope.items);
    });
    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;
      console.log($scope.globals);
    });
    $rootScope.cart = [];
  }]);
