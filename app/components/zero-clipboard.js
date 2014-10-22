import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
	attributeBindings: ['title', 'data-clipboard-text'],
	title: 'Copy to clipboard',
	didInsertElement: function () {
	  // see https://gist.github.com/Mic92/5232331
	  ZeroClipboard.config({
		hoverClass: "hover",
		activeClass: "active"
	  });

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
