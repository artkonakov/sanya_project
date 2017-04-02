'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("AboutCtrl", ['$scope', 'getItems', '$routeParams', '$location', function($scope, getItems, $routeParams, $location) {

    $scope.aboutItem = $routeParams.item;
    $scope.currentMaterial = $routeParams.material;

    $scope.URL = $location.path();
    


    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').then(function(response) {

      $scope.items = response.data;

      $scope.getArray = function(array, value) {

        for (var i = 0; i < array.length; i++) {

          if (array[i].id === value) {
            $scope.currentArray = array[i];

            return $scope.currentArray;
          }
        };
      };


      $scope.getArray($scope.items, $scope.aboutItem);

      $scope.getArrayMaterial = function(array, value) {

        for (var i = 0; i < array.materials.length; i++) {

          if (array.materials[i].name === value) {
            $scope.currentArrayMaterial = array.materials[i];

            return $scope.currentArrayMaterial;
          }

          // $location.path('/');
        };
      };

      $scope.getArrayMaterial($scope.currentArray, $scope.currentMaterial);



    });



    getItems.getUrl('/globals.json').then(function(response) {
      $scope.globals = response.data;
    });









  }]);
