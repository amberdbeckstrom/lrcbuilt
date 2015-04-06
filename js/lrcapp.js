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
        .when('/cart', {
            templateUrl: 'templates/cart.html'
        })
        .when('/shirt', {
            templateUrl: 'templates/shirt.html'
        })
        .when('/thankyou', {
            templateUrl: 'templates/thankyou.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);

lrcapp.controller('CartController', ['$scope', function($scope) {
    $scope.cart = [];
    $scope.cart_total = 0;

    /**
     * Add an item to the cart
     * @param {string} item
     */
    function add_cart_item(item) {
        var in_cart = false;

        $scope.cart.forEach(function (cart_item) {
            if (cart_item.name == item) {
                in_cart = true;
                cart_item.amount += 1;
            }
        });

        if (!in_cart) {
            $scope.cart.push({
                name: item,
                amount: 1
            });
        }
    }

    $scope.add_to_cart = function (item) {
        add_cart_item(item);
        $scope.cart_total += 1
        console.log($scope.cart);
    }

    $scope.update_item = function (item) {
        console.log(item)
        if (item.amount == 0) {
            $scope.cart = $scope.cart.filter(function (cart_item) {
                return cart_item.name != item.name
            });
        }
    }

    console.log($scope.cart);
}]);
