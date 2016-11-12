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
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;

    });
    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;

    });

    $scope.mainFilter = '';
    $scope.mainSort = 'sortCount';
    $scope.mainSale = '';
    $scope.useSale = function () {
      if ($scope.mainSale === '' ) {
        $scope.mainSale = "Распродажа";
      } else {
        $scope.mainSale = '';
      };
    }
  }]);
