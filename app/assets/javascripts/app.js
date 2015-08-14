// MAIN ANGULAR MODULE FILE

angular.module('crudAngles', ['templates'])

.controller('TestCtrl', ['$scope', function($scope){
  $scope.helloWorld = "Hello DYNAMIC ANGULARIZED world."
}])