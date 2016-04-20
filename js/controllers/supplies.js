(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("SuppliesController", SuppliesController);

  SuppliesController.$inject = ["supplyStore"];

  function SuppliesController(supplyStore) {
    console.log('supplyStore is', supplyStore);

    this.items = supplyStore.data;

    this.capitalize = function capitalize(word) {
      if (!word) { return ""; }
      return word[0].toUpperCase() + word.substring(1);
    }

    // Sorting
    this.sortOrder = "name";
    this.reverse = function reverse() {
      if (this.sortOrder === "name") {
        this.sortOrder = "-name";
      } else {
        this.sortOrder = "name";
      }
    }

    // Filtering
    this.searchQuery = "";

    this.newItem = {
      name: "",
      description: "",
      inCountry: true,
      globally: true
    };
    this.save = function saveItem(form) {
      if (form.$valid) {
        this.items.push(this.newItem);
        supplyStore.save(this.items);
        this.newItem = {};
      } else {
        // FIXME: do something better here
        // alert("Something was wrong! Fix your form!");
      }
    }
  }
})();
