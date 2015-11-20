(function() {
  angular.module('demoApp')

  .directive('treeview', function() {
    return {
      controller: function($scope) {},
      link: function(scope, element, attrs, navCtrl) {
      },
      templateUrl: 'dist/templates/nav.html'
    }
  });

})();
