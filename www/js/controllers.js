angular.module('starter.controllers', [])

    .controller("schemesCtrl", ['$scope','$http', function($scope, $http)
    {
      $http.get('data/schemes.json').success (function(data){
        console.log(data);
        $scope.schemes = data;
      });

    }]
)

.controller('SchemeDetailCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http)
    {
        $http.get('data/' + $stateParams.schemeId + '.json').success(function(data) {
            $scope.scheme = data;
        });
    }])

.controller('modalCtrl', function($scope, $ionicModal) {
    $scope.contact = {
        name: 'Mittens Cat',
        info: 'Tap anywhere on the card to open the modal'
    }

    $ionicModal.fromTemplateUrl('edit-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal
    })

    $scope.openModal = function() {
        $scope.modal.show()
    }

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
});