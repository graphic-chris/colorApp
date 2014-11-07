angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Schemes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var schemes = [
    { id: 0, name: 'Sunset' },
    { id: 1, name: 'Pastels' },
    { id: 2, name: 'High Contrast' },
    { id: 3, name: 'yellows' }
  ];

  return {
    all: function() {
      return schemes;
    },
    get: function(schemeId) {
      // Simple index lookup
      return schemes[schemeId];
    }
  }
});
