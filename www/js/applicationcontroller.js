(function() {

  angular
    .module('starter')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams'];

    function ApplicationController($http, $stateParams) {
      var self = this;

    }

})();