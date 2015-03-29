import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
	attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
	title: 'Copy to clipboard',
	zeroClipboardEvents: ['ready', 'beforeCopy', 'copy', 'afterCopy', 'destroy'],
	didInsertElement: function () {
	  var client = new ZeroClipboard(this.get('element'));
		// 'error'
		var _this = this;
		//bind Zero Clipboard events to ember events
		this.get('zeroClipboardEvents').forEach(function(action){
			client.on(action, Ember.run.bind(this, function(event) {
				this.send(action, event);
		  }));
		}, _this);
	},
	"data-clipboard-text": function(){
		return this.get('text');
	}.property('text'),

	"data-clipboard-target": function(){
		return this.get('cbTarget');
	}.property('cbTarget')
});
