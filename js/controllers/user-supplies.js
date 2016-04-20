(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("UserSuppliesController", UserSuppliesController);

  UserSuppliesController.$inject = ["supplyStore"];

  function UserSuppliesController(supplyStore) {
    this.availableSupplies = [];

    var that = this;
    supplyStore.data.forEach(function(item) {
      if (item.inCountry && item.globally) {
        that.availableSupplies.push(item);
      }
    });
  }
})();
