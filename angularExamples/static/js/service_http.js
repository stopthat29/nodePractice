/**
 * Created by Malamute on 9/7/15.
 */
angular.module('myApp', []).
    controller('myController', ['$scope', '$http', function ($scope, $http) {
        $scope.days = [];
        $scope.status = "";
        $scope.removeDay = function (deleteDay) {
            $http.post('/remove/day', {day: deleteDay}).
                success(function (data, status, headers, config) {
                    $scope.days = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.status = data;

                });
        };
        $scope.resetDays = function () {
            $scope.status = "";
            $http.get('/reset/days')
                .success(function (data, status, headers, config) {
                    $scope.days = data;
                }).error(function (data, status, headers, config) {
                    $scope.status = data;
                });
        };
    }]);