import Ember from 'ember';

export default Ember.Component.extend({

  games : [],

  actions : {

    addGame : function() {
      let gameName = this.get("gameName");
      this.get("games").pushObject(gameName);
    },

    saveChanges : function() {
      this.sendAction("action", this.get("games"));
    }

  }

});
