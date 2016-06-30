'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.argument('component', {type: String, required: true});
    this.argument('targetDir', {type: String, required: false});

    this.log(yosay(
      'I will create a React component named ' + chalk.red(this.component) +
      ' in the directory ' +
      chalk.red((this.targetDir ? this.targetDir + '/' : '') + this.component)
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'relay',
        message: 'Will the component use Relay?',
        default: true
      },
      {
        type: 'confirm',
        name: 'styleguide',
        message: 'Would you like to add this component to the styleguide?',
        default: false
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var componentDir;
    if (this.targetDir) {
      componentDir = path.join(this.targetDir, this.component);
    } else {
      componentDir = this.component;
    }

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(path.join(componentDir, 'index.js')),
      {component: this.component}
    );

    if (this.props.relay) {
      this.fs.copyTpl(
        this.templatePath('relay.js'),
        this.destinationPath(path.join(componentDir, this.component + '.js')),
        {component: this.component}
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('plain.js'),
        this.destinationPath(path.join(componentDir, this.component + '.js')),
        {component: this.component}
      );
    }

    this.fs.copyTpl(
      this.templatePath('styles.scss'),
      this.destinationPath(path.join(componentDir, this.component + '.scss')),
      {component: this.component}
    );

    if (this.props.styleguide) {
      this.fs.copyTpl(
        this.templatePath('examples.md'),
        this.destinationPath(path.join(componentDir, this.component + '.examples.js')),
        {component: this.component}
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
