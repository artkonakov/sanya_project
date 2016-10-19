
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
    'angular-loading-bar',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart',
    'gettext'
  ])

.run(function() {

    lightbox.option({
      'showImageNumberLabel': false
    });
})

  .config(['$compileProvider','$locationProvider', '$routeProvider', function($compileProvider, $locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $compileProvider.debugInfoEnabled(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
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
      .when('/shops', {
        templateUrl: 'views/shops.html',
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
      })
      .when('/news', {
        templateUrl: 'views/news.html',
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
      })
      .when('/delivery', {
        templateUrl: 'views/delivery.html',
      })
      .when('/boxes', {
        templateUrl: 'views/boxes.html',
      })
      .when('/completed', {
        templateUrl: 'views/completed.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .otherwise({
        redirectTo: '/'
      });

  }])


.factory('getItems', ['$http', function($http) {
  return {
    //Функция для запроса к серверу через контроллер
    getUrl: function(url) {


      return $http.get(url);
    }

  };


}]);
