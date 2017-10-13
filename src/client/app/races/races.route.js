(function() {
  'use strict';

  angular
    .module('app.races')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'races',
        config: {
          url: '/races',
          templateUrl: 'app/races/races.html',
          controller: 'RacesController',
          controllerAs: 'vm',
          title: 'Races',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Races'
          }
        }
      }
    ];
  }
})();
