(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("SuppliesController", SuppliesController);

  function SuppliesController() {
    this.user = "James";

    this.items = [
      { name: "advil", inCountry: true, globally: true },
      { name: "bandages", inCountry: false, globally: true },
      { name: "mosquitos", inCountry: true, globally: true }
    ]
  }
})();
