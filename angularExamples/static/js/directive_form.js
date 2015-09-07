/**
 * Created by Malamute on 9/7/15.
 */
angular.module('myApp', []).
    controller('myController', function ($scope) {
        $scope.cameras = [
            {make: 'Canon', model: '70D', mp: 20.2},
            {make: 'Canon', model: '6D', mp: 20},
            {make: 'Nikon', model: 'D90', mp: 20},
            {make: 'Nikon', model: 'D5200', mp: 24.1}];
        $scope.cameraObj = $scope.cameras[0];
        $scope.cameraName = 'Cannon';
        $scope.cbValue = '';
        $scope.someText = '';

    });