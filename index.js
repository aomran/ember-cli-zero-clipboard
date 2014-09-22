'use strict';

module.exports = {
  name: 'Ember CLI Zero Clipboard',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import('vendor/zeroclipboard/dist/ZeroClipboard.js');
		app.import('vendor/zeroclipboard/dist/ZeroClipboard.swf', {destDir: 'assets'});
  }
};