angular.module('app.main').controller('AppCntl', ['$scope', '$http',
function($scope, $http) {

  'use strict';

var requete = {
  method: 'GET',
  url: 'http://localhost:8081/oasp4j-sample-server/login',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': '07933522-5b51-476b-8452-34e83c5b59cc',
    'Cookie' : 'test',
  }
}
  $http(requete).then(function successCallback(response) {
    console.log('requete http get envoyé OK');
  }, function errorCallback(response) {
    console.log('enquete http get non envoyé NOK');
  });
}]);
