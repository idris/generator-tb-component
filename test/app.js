'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tb-component:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['Card'])
      .withPrompts({styleguide: true, relay: false})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'Card/index.js',
      'Card/Card.js',
      'Card/Card.scss',
      'Card/Card.examples.md'
    ]);
  });
});
