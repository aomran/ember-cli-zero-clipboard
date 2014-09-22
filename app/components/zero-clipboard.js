import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
	tagName: 'button',
	attributeBindings: ['title', 'data-clipboard-text'],
	title: 'Copy to clipboard',
	didInsertElement: function () {
	  new ZeroClipboard(this.get('element'));
	},
	"data-clipboard-text": function(){
		return this.get('text');
	}.property('text')
});