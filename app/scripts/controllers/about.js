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

    $scope.aboutItem = $routeParams.item;
    $scope.currentMaterial = $routeParams.material;





    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {

      $scope.items = response;

      $scope.getArray = function(array, value) {

        for (var i = 0; i < array.length; i++) {
          console.log(array.length);
          console.log(value);
          console.log(array[10].id);
          if (array[i].id == value) {
            $scope.currentArray = array[i];
            console.log($scope.currentArray);
            return $scope.currentArray;
          }
          return console.log('Ошибка!');
        };

      };

      $scope.getArray($scope.items, $scope.aboutItem);

      $scope.getMaterial = function() {

        for (var i = 0; i < $scope.currentArray.materials.length; i++) {
          if ($scope.currentArray.materials[i].name == $scope.currentMaterial) {

            $scope.currentArrayMaterial = $scope.currentArray.materials[i];
            console.log($scope.currentArrayMaterial);
            return $scope.currentArrayMaterial;
          }
          return console.log('Ошибка!');
        };

      };

      $scope.getMaterial();

    });



    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;
    });









  }]);
