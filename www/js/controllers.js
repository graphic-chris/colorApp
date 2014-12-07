angular.module('starter.controllers', [])

    .controller("schemesCtrl", ['$scope','$http', function($scope, $http)
    {
      $http.get('data/schemes.json').success (function(data){
        console.log(data);
        $scope.schemes = data;
      });

    }]
)

 //   .controller('SchemeDetailCtrl', ['$scope','$http', function($scope, $http, $stateParams, Schemes) {
  //      $http.get('data/schemes.json').success(function (data) {
   //         console.log(data);
    //        $scope.schemes = data;
     //       $scope.scheme = Schemes.get($stateParams.schemeId);
      //  });
   // }]
//)

//.controller('SchemeDetailCtrl', function($scope, $stateParams, Schemes) {
//  $scope.scheme = Schemes.get($stateParams.schemeId);
//})

.controller('SchemeDetailCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http)
    {
        $http.get('data/' + $stateParams.schemeId + '.json').success(function(data) {
            $scope.scheme = data;
        });
    }]);