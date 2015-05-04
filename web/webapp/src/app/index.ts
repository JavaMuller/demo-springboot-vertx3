/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module webapp {
  'use strict';

  angular.module('webapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
}
