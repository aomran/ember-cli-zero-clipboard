import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
	attributeBindings: ['title', 'data-clipboard-text'],
	title: 'Copy to clipboard',
	didInsertElement: function () {
	  var client = new ZeroClipboard(this.get('element'));

		//bind aftercopy to an ember event
	  client.on("aftercopy", function(event) {
			this.send('aftercopy', event);
	  }.bind(this));
	},
	"data-clipboard-text": function(){
		return this.get('text');
	}.property('text')
});
