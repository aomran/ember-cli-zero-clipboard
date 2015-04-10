import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
  attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
  title: 'Copy to clipboard',
  didInsertElement: function () {
    var client = new ZeroClipboard(this.get('element'));

    // bind ZeroClipboard static events to Ember events

    client.on('ready', function(event) {
      this.send('ready', event);
    }.bind(this));

    client.on('beforecopy', function(event) {
      this.send('beforeCopy', event);
    }.bind(this));

    client.on('copy', function(event) {
      this.send('copy', event);
    }.bind(this));

    client.on('aftercopy', function(event) {
      this.send('afterCopy', event);
    }.bind(this));

    client.on('destroy', function(event) {
      this.send('destroy', event);
    }.bind(this));

    client.on('error', function(event) {
      this.send('error', event);
    }.bind(this));
  },
  "data-clipboard-text": function(){
    return this.get('text');
  }.property('text'),

  "data-clipboard-target": function(){
    return this.get('cbTarget');
  }.property('cbTarget')
});
