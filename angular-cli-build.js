/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const Funnel = require('broccoli-funnel');
const MergeTree = require('broccoli-merge-trees');

module.exports = function(defaults) {
  const inputNode = _createDemoAppInputTree();

  return new Angular2App(defaults, inputNode, {
    sourceDir: 'src/demo-app',
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js'
    ]
  });
};

/**
 * Build the Broccoli Tree containing all the files used as the input to the Demo Angular2App.
 */
function _createDemoAppInputTree() {
  return new MergeTree([
    new Funnel('typings', {
      destDir: 'typings'
    }),
    new Funnel('src', {
      include: ['components/**/*', 'core/**/*'],
      destDir: 'src/demo-app'
    }),
    new Funnel('src/demo-app', {
      destDir: 'src/demo-app'
    })
  ]);
}
