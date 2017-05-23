angular.module('app.main').controller('AppCntl', ['$scope', '$http',
function($scope, $http) {
  'use strict';

var requete = {
  method: 'GET',
  url: 'http://localhost:8081/oasp4j-sample-server/login',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': '73a06e37-e849-443a-b816-2cd3b9f5f162',
    'Cookie': 'test'
  }
}
  $http(requete).then(function successCallback(response) {
    console.log('OK');
  }, function errorCallback(response) {
    console.log('NOK');
  });
}]);


// $scope.message = 'Hello!';
// console.log($scope.message);
