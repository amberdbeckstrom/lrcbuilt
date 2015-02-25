/**
* lrcApp Module
*/
var lrcapp = angular.module('lrcApp', ['ngRoute']);

lrcapp.config([
    '$routeProvider',
    function($routeProvider) {
        'use strict';
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/account', {
            templateUrl: 'templates/account.html'
        })
        .when('/plans', {
            templateUrl: 'templates/storm.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .when('/shop', {
            templateUrl: 'templates/shop.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);

lrcapp.controller('CartController', ['$scope', function($scope) {
    $scope.cart = 0;

    $scope.add_to_cart = function () {
        $scope.cart += 1;
        console.log($scope.cart);
    }

    console.log($scope.cart);
}]);
