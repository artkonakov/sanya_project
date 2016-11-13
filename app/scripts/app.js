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
    'gettext',
    'metatags'

  ])

.run(function(MetaTags) {
  MetaTags.initialize();
  lightbox.option({
    'showImageNumberLabel': false
  });

})

.config(['$compileProvider', '$locationProvider', '$routeProvider', 'MetaTagsProvider', function($compileProvider, $locationProvider, $routeProvider, MetaTagsProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
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
    .when('/gallery', {
      templateUrl: 'views/gallery.html',
    })
    .when('/post', {
      templateUrl: 'views/post.html',
    })
    .when('/successful', {
      templateUrl: 'views/successful.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  MetaTagsProvider
    .when('/', {
      title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
    .when('/catalog', {
      title: 'Колобашкин.ру — Каталог подставок',
      description: 'Огромный ассортимент подставок для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, каталог, колпаки, подставки, боксы',
      fb_title: 'Колобашкин.ру — каталог подставок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
    .when('/shops', {
      title: 'Колобашкин.ру — Магазины, где можно приобрести нашу продукцию',
      description: 'Магазины, где вы можете приобрести подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/boxes', {
      title: 'Колобашкин.ру — Колпаки для наших подставок',
      description: 'Колпаки из оргстекла для наших подставок, подставки для моделей с боксом, миниатюры, диорамы, военная техника, подставки для кораблей, подводных лодок от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/gallery', {
      title: 'Колобашкин.ру — Галерея с работами на наших подставках от именитых авторов',
      description: 'Галерея работа на наших подставках, миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/news', {
      title: 'Колобашкин.ру — Свежие новости о нас',
      description: 'Свежие новости о наших подставках, колобашки под миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/delivery', {
      title: 'Колобашкин.ру — Доставка',
      description: 'Информация о доставке, новости о наших подставках, колобашки под миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/contacts', {
      title: 'Колобашкин.ру — Контакты',
      description: 'Информация для связи, оптовые заказы, ждём ваших заказов, написать нам, задать вопрос, новости о наших подставках, колобашки под миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/post', {
      title: 'Колобашкин.ру — Написать нам',
      description: 'Вы можете отправить письмо прямо с сайта, для этого достаточно просто заполнить форму. Написать нам, связаться с нами, задать вопрос, новости о наших подставках, колобашки под миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/payment', {
      title: 'Колобашкин.ру — Оплатить',
      description: 'Страница оплаты, здесь вы можете оплатить за колобашки, мы принимаем как банковские карты, так и платежи через терминалы, написать нам, задать вопрос новости о наших подставках, колобашки под миниатюры, диорамы, военная техника, корабли, подводные лодки от производителя в Санкт-Петербурге',
      keywords: 'Колобашкин, оплата, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })
      .when('/cart', {
      title: 'Колобашкин.ру — Корзина',
      description: 'Страница корзины, здесь вы можете увидеть ваш заказ',
      keywords: 'Колобашкин, оплата, новости, акрил, оргстекло, магазины, offline, маркет, подставки, миниатюры, 1:35, 54мм, колпаки, боксы',
      fb_title: 'Колобашкин.ру — Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок',
      fb_site_name: 'Kolobashkin.ru',
      fb_url: 'http://kolobashkin.ru',
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'
    })                    
    .when('/:item/:material', {
      title: function(item, material) {
        var seomaterial;
        switch (material) {
          case 'beech':
            seomaterial = 'бук';
            break;
          case 'oak':
            seomaterial = 'дуб';
            break;
          case 'birch':
            seomaterial = 'береза';
            break;
          case 'pine':
            seomaterial = 'сосна';
            break;
          default:
            seomaterial = material;
        }
        return 'Модель: :item. Материал: ' + seomaterial;
      },
      description: function(item, material) {
        return 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге';
      },
      robots: 'index, follow',
      keywords: function(item, material) {
        var keywords = ['Колобашки', 'Подставки', 'Сайт для моделистов', 'Миниатюры', 'Диорамы', 'Военная техника', 'Корабли', 'Подводная лодка', 'Санкт-Петербург', 'Спб'];
        var seomaterial;
        switch (material) {
          case 'beech':
            seomaterial = 'бук';
            break;
          case 'oak':
            seomaterial = 'дуб';
            break;
          case 'birch':
            seomaterial = 'береза';
            break;
          case 'pine':
            seomaterial = 'сосна';
            break;
          default:
            seomaterial = material;
        };
        keywords.push(item, seomaterial);
        return keywords.join(', ');
      },
      fb_title: function(item, material) {
        var seomaterial;
        switch (material) {
          case 'beech':
            seomaterial = 'бук';
            break;
          case 'oak':
            seomaterial = 'дуб';
            break;
          case 'birch':
            seomaterial = 'береза';
            break;
          case 'pine':
            seomaterial = 'сосна';
            break;
          default:
            seomaterial = material;
        }
        return 'Модель: :item. Материал: ' + seomaterial;
      },
      fb_site_name: 'Kolobashkin.ru',
      fb_url: function(item, material) {
        return 'http://kolobashkin.ru/:item/:material'
      },
      fb_description: 'Подставки для моделей, миниатюр, диорам, военной техники, кораблей, подводных лодок от производителя в Санкт-Петербурге',
      fb_type: 'Facebook type',
      fb_image: 'http://kolobashkin.ru/images/share.jpg'

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
