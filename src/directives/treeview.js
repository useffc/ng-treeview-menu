(function() {
  angular.module('demoApp')

  .directive('treeview', function() {
    return {
      controller: [
        '$scope',
        'appStateService',
        function($scope, appStateService) {
          var promise = appStateService.getAppState();
          promise.then(function(response) {
            $scope.navItems = response.data.navItems;
          });
          this.getNavItems = function() {
            return $scope.navItems;
          };
          this.expanded = false;
        }
      ],
      scope:  {
        expanded: '=',
      },
      templateUrl: 'dist/templates/nav.html'
    };
  })
  .directive('treeviewBranch', function() {
    return {
      require: '^treeview',
      link: function(scope, element, attributes, navCtrl) {
        element.bind('click', function() {
          navCtrl.expanded = true;
          navCtrl.openItem = scope.item;
        });
      }
    };
  })
  .directive('treeviewItem', function() {
    return {
      require: '^treeview',
      link: function(scope, element, attributes, navCtrl) {
        element.bind('click', function() {
          console.log(scope.child.name + ' clicked');
        });
      }
    };
  });

})();
