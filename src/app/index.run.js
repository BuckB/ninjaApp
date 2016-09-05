(function() {
  'use strict';

  angular
    .module('ninjaApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
