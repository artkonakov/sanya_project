'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("CatalogCtrl", ['$scope', 'getItems', '$location', function($scope, getItems, $location) {


    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').then(function(response) {
      $scope.items = response.data;

    });
    getItems.getUrl('/globals.json').then(function(response) {
      $scope.globals = response.data;

    });

    $scope.mainFilter = '';
    $scope.mainSort = 'sortCount';
    $scope.mainSale = undefined;
    $scope.useSale = function () {
      if ($scope.mainSale === undefined ) {
        $scope.mainSale = '';
      } else {
        $scope.mainSale = undefined;
      };
    }
    $scope.useReduction = function () {
      if ($scope.mainReduction === undefined ) {
        $scope.mainReduction = '';
      } else {
        $scope.mainReduction = undefined;
      };
    }
  }]);
