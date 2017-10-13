(function() {
  'use strict';

  angular
    .module('app.races')
    .controller('RacesController', RacesController);

  RacesController.$inject = ['logger'];
  /* @ngInject */
  function RacesController(logger) {
    var vm = this;
    vm.title = 'Races';

    activate();

    function activate() {
      logger.info('Activated Races View');
    }
  }
})();
