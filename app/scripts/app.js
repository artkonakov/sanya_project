
'use strict';
lightbox.option({
    'showImageNumberLabel': false
  });
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
  .config(function($routeProvider) {
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


}])

.factory('Cart', ['$scope', function($scope) {

  return {
    getCart: function() {

    },
    addToCart: function() {

    }
  };

}]);
