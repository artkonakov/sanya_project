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





    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {

      $scope.items = response;

      $scope.getArray = function(array, value) {

        for (var i = 0; i < array.length; i++) {

          if (array[i].id == value) {
            $scope.currentArray = array[i];
            console.log($scope.currentArray);
            return $scope.currentArray;
          }
        };
      };


      $scope.getArray($scope.items, $scope.aboutItem);

      $scope.getArrayMaterial = function(array, value) {

        for (var i = 0; i < array.materials.length; i++) {

          if (array.materials[i].name == value) {
            $scope.currentArrayMaterial = array.materials[i];
            console.log($scope.currentArrayMaterial);
            return $scope.currentArrayMaterial;
          }

          // $location.path('/');
        };
      };

      $scope.getArrayMaterial($scope.currentArray, $scope.currentMaterial);



    });



    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;
    });









  }]);
