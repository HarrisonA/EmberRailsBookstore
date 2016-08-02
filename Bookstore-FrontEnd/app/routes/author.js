import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('author', params.author_id);  //author_id comes
  },

  actions: {
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
});
