(function() {
  angular.module('demoApp')

  .service('appStateService', function($http, $q) {
    var deferred = $q.defer();
    $http.get('dist/data/data.json')
    .then(function(data) {
      deferred.resolve(data);
    });

    this.getAppState = function() {
      return deferred.promise;
    };

  });
})();
