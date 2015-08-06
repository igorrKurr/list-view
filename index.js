/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-list-view',
  init: function(app) {
    this.app = app;
  },

  included: function(app) {
    this.app.import('vendor/layout-bin-packer.js');
  }
};
