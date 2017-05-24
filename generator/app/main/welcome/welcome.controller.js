angular.module('app').controller('welcome', function($scope,$location){
$scope.avancement=0;
$scope.showContent=true;
$scope.appfon=function(){
  return ($scope.avancement >=80) ? " mega application " : ($scope.avancement >=60) ? " super application " :
  ($scope.avancement >=40) ? "application" : "début d'application";
};

$scope.inscription=function(user){
  alert("Bonjour "+user);
  $location.url("/main/register");
}

});
