(function() {
  angular.module('demoApp')

  .directive('treeview', function() {
    return {
      controller: ['$scope', function($scope) {
        console.log($scope.$parent);
        this.getNav = function() {
          return $scope.$parent.navItems;
        };
      }],
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
        });
      }
    };
  });

})();
