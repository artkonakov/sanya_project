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
    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? "active" : "";
    };
    $scope.mainFilter = '';
    $scope.mainSort = 'sortCount';

  }]);
