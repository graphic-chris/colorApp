angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Schemes', function() {
  // Might use a resource here that returns a JSON array


  var schemes = [
    { id: 0, name: 'Sunset' },
    { id: 1, name: 'Aqua' },
    { id: 2, name: 'Pastels' },
    { id: 3, name: 'High Energy' },
    { id: 4, name: 'Sandy Beach' }
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
