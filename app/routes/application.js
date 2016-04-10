import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {

    return ['Rise of the Tomb Raider', 'Quantum Break', 'Borderlands', 'Tom Clancy\'s The Division'];

  },

  actions: {
    saveGameList: function (games) {
      alert("Changes saved");
    }
  }

});
