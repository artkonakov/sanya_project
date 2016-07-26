'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("AboutCtrl", ['$scope', 'getItems', '$routeParams', function($scope, getItems, $routeParams) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;

    });


    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;

    });

    $scope.aboutItem = $routeParams.item;

    $scope.currentMaterial = $routeParams.material;


    //Проверяем параметр url чтобы установить текущее положение материала в массиве
    switch ($scope.currentMaterial) {
      case 'oak':
        $scope.index = 0;
        break;
      case 'beech':
        $scope.index = 1;
        break;
      case 'birch':
        $scope.index = 2;
        break;
      case 'pine':
        $scope.index = 3;
        break;
    };


    function find(array, value) {

      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
      }

      return -1;
    };
    


  }]);
