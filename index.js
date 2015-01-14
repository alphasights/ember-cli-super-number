/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-super-number',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/styles/style.css');
  }
};
