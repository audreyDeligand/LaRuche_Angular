angular.module('app').controller('deco', function($scope,$location){

  $scope.showContent=true;

$scope.logout=function(){
  alert("déconnécté");
  $location.url("/main/welcome");
}

});
