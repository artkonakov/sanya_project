'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("MainCtrl", ['$scope', 'getItems', function($scope, getItems) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;

    });
    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;

    });

    $scope.mainFilter = '';
    $scope.mainSort = 'sortCount';

  }]);
