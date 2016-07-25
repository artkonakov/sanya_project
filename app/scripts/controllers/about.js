'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("AboutCtrl", ['$scope', 'getItems', '$routeParams', '$rootScope', function($scope, getItems, $routeParams, $rootScope) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;
      console.log($scope.items);
    });


    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;
      console.log($scope.globals);
    });

    $scope.aboutItem = $routeParams.item;

    $scope.currentMaterial = $routeParams.material;

    $scope.localscope = $rootScope.globalscope;

    //Проверяем параметр url чтобы установить текущее положение материала в массиве
    switch ($scope.currentMaterial) {
      case 'oak': $scope.index = 0;
      break;
      case 'beech': $scope.index = 1;
      break;
      case 'birch': $scope.index = 2;
      break;
      case 'pine': $scope.index = 3;
      break;
    };
    $rootScope.cart =[];
    $scope.addToCart = function(item) {

      $rootScope.cart.push(item);
      console.log($rootScope.cart);
    };

  }]);
