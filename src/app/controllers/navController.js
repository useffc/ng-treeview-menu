(function() {
  angular.module('demoApp')

  .controller('navController', [
    '$scope',
    'appStateService',
    function($scope, appStateService) {
      var promise = appStateService.getAppState();
      promise.then(function(response) {
        $scope.navItems = response.data.navItems;
      });
      $scope.menuSelectionOpen = false;
      $scope.menuSelect = function() {
        if ($scope.menuSelectionOpen === true) {
          return $scope.menuSelectionOpen === false;
        }
        else {
          return $scope.menuSelectionOpen === true;
        }
      };
      //each list item should have its own scope, that is, each should know when it's opened or closed. but each
      //should also know when another item has been selected so that it can collapse itself.
    }
  ]);
})();
