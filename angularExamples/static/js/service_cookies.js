/**
 * Created by Malamute on 9/7/15.
 */
var app = angular.module('myApp', ['ngCookies']);

app.controller('myController', ['$scope', '$cookieStore', function ($scope, cookieStore) {
    $scope.favCookie = '';
    $scope.myFavCookie = cookieStore.get('myAppCookie').flavor;
    $scope.setCookie = function () {
        if ($scope.favCookie === 'None') {

            cookieStore.remove('myAppCookie');
        } else {
            cookieStore.put('myAppCookie', {flavor: $scope.favCookie});
            console.log(cookieStore.get('myAppCookie'));
        }
        $scope.myFavCookie = cookieStore.get('myAppCookie');
    };
}]);