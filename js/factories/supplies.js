(function() {
  'use strict';

  angular
    .module("medlink")
    .factory("supplyStore", supplyStore);

  var initial = [
    { name: "bandages", inCountry: false, globally: true, description: "A bandage is a piece of material used either to support a medical device such as a dressing or splint, or on its own to provide support to or to restrict the movement of a part of the body." },
    { name: "advil", inCountry: true, globally: true, description: "Ibuprofen, from isobutylphenylpropanoic acid, is a nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation." },
    { name: "mosquitos", inCountry: true, globally: true, description: "Mosquitoes are small, midge-like flies which comprise the family Culicidae. Females of most species are ectoparasites, whose tube-like mouthparts (called a proboscis) pierce the hosts' skin to consume blood." }
  ];

  var localStorageKey = "medlink-angular";
  if (!localStorage.getItem(localStorageKey)) {
    console.log("Updating storage");
    localStorage.setItem(localStorageKey, JSON.stringify(initial))
  }

  function saveAllItems(items) {
    console.log("should save", items);
    localStorage.setItem(localStorageKey, angular.toJson(items));
  }

  function supplyStore() {
    console.log("Running the factory");
    // return JSON.parse(localStorage.getItem(localStorageKey));
    return {
      data: JSON.parse(localStorage.getItem(localStorageKey)),
      save: saveAllItems
    };
  }
})();
