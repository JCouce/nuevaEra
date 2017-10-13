(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function HomeController($q, dataservice, logger) {
    var vm = this;
    vm.class = {};
    vm.races = {};
    vm.people = [];
    vm.messageCount = 0;
    vm.title = 'Home';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople(), getClases(), getRaces()];
      return $q.all(promises).then(function() {
        logger.info('Activated Home View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
    function getClases() {
      return dataservice.getClases().then(function(data) {
        vm.class = data;
        return vm.class;
      });
    }
    function getRaces() {
      return dataservice.getRaces().then(function(data) {
        vm.races = data;
        return vm.races;
      });
    }
  }
})();
