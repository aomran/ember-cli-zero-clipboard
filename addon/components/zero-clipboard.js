import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
  attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
  title: 'Copy to clipboard',
  zeroClipboardEvents: ['ready', 'beforeCopy', 'copy', 'afterCopy', 'destroy', 'error'],

  didInsertElement: function() {
    var client = new ZeroClipboard(this.get('element'));
    var self = this;

    //bind Zero Clipboard events to ember events
    this.get('zeroClipboardEvents').forEach(function(action){
      client.on(action, Ember.run.bind(this, function(event) {
        try {
      	  this.send(action, event);
      	}
      	catch(error) {
      	  Ember.Logger.debug(error.message);
      	}
      }));
    }, self);
  },

  "data-clipboard-text": Ember.computed('text', function() {
    return this.get('text');
  }),

  "data-clipboard-target": Ember.computed('cbTarget', function() {
    return this.get('cbTarget');
  })
});
