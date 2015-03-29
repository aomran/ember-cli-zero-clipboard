import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
	attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
	title: 'Copy to clipboard',
	didInsertElement: function () {
	  var client = new ZeroClipboard(this.get('element'));

		var events = [
			'ready',
			'beforeCopy',
			'copy',
			'afterCopy',
			'destroy'
		] // 'error'
		//bind aftercopy to an ember event
	  client.on("aftercopy", Ember.run.bind(this, function(event) {
			this.send('afterCopy', event);
	  }));
	},
	"data-clipboard-text": function(){
		return this.get('text');
	}.property('text'),

	"data-clipboard-target": function(){
		return this.get('cbTarget');
	}.property('cbTarget')
});
