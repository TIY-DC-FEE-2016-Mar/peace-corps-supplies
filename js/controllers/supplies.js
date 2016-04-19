(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("SuppliesController", SuppliesController);

  function SuppliesController() {
    this.user = "James";

    this.items = [
      { name: "bandages", inCountry: false, globally: true },
      { name: "advil", inCountry: true, globally: true },
      { name: "mosquitos", inCountry: true, globally: true }
    ]

    this.capitalize = function capitalize(word) {
      return word[0].toUpperCase() + word.substring(1)
    }
  }
})();
