angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('schemesCtrl', function($scope, Schemes) {
  $scope.schemes = Schemes.all();
})

.controller('SchemeDetailCtrl', function($scope, $stateParams, Schemes) {
  $scope.scheme = Schemes.get($stateParams.schemeId);
})

.controller('AccountCtrl', function($scope) {
});
