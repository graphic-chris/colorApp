angular.module('starter.controllers', [])

    .controller("schemesCtrl", ['$scope','$http', function($scope, $http)
    {
      $http.get('data/schemes.json').success (function(data){
        console.log(data);
        $scope.schemes = data;
      });

    }]
)

.controller('SchemeDetailCtrl', function($scope, $stateParams, Schemes) {
  $scope.scheme = Schemes.get($stateParams.schemeId);
})