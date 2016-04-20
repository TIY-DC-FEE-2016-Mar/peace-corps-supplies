(function() {
  'use strict';

  angular
    .module("medlink")
    .controller("SuppliesController", SuppliesController);

  function SuppliesController() {
    this.items = [
      { name: "bandages", inCountry: false, globally: true, description: "A bandage is a piece of material used either to support a medical device such as a dressing or splint, or on its own to provide support to or to restrict the movement of a part of the body." },
      { name: "advil", inCountry: true, globally: true, description: "Ibuprofen, from isobutylphenylpropanoic acid, is a nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation." },
      { name: "mosquitos", inCountry: true, globally: true, description: "Mosquitoes are small, midge-like flies which comprise the family Culicidae. Females of most species are ectoparasites, whose tube-like mouthparts (called a proboscis) pierce the hosts' skin to consume blood." }
    ];

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
        this.newItem = {};
      } else {
        // FIXME: do something better here
        // alert("Something was wrong! Fix your form!");
      }
    }
  }
})();
