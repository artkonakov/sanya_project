
'use strict';

/**
 * @ngdoc overview
 * @name kolobashkinApp
 * @description
 * # kolobashkinApp
 *
 * Main module of the application.
 */
angular
  .module('kolobashkinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart'
  ])

  .run(function(){

    lightbox.option({
        'showImageNumberLabel': false
      });
  })
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:item/:material', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  })


.factory('getItems', ['$http', function($http) {
  return {
    //Функция для запроса к серверу через контроллер
    getUrl: function(url) {
      return $http.get(url);
    }
  };


}]);
