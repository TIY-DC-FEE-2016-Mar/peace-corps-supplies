(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("SuppliesController", SuppliesController);

  function SuppliesController() {
    this.user = "James";
  }
})();
