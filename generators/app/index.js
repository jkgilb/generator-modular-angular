'use strict';

// Npm modules
var path = require('path');
var yeoman = require('yeoman-generator');
var  yosay = require('yosay');
var chalk = require('chalk');
var utils = require('./utils');

// Configuration and utils
var options = require('./options.json');

var modularAngularGenerator = yeoman.generators.Base.extend({

    //Setup some bits
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../../templates'));

        //Setting up app name argument
        this.argument('appName', {
            type: String,
            required: false
        });

        options.forEach(function(option) {
            this.option(option.name, {
                type: global[option.type],
                required: option.required,
                desc: option.desc,
                defaults: option.defaults
            });
        }.bind(this));
    },

    //Deal with cli options passed through
    info: function() {

        if (!this.options['skip-welcome-message']) {
            this.log(yosay(
                chalk.red('Welcome!') + '\n' +
                chalk.yellow('This is a generator for creating modular / scalable angular applications!') + '\n' +
                chalk.yellow('Projects will be created using strict coding styles inspired by @toddmotto & @john_papa')
            ));
        }

        if(this.options['default']) {

        }
    },

    // Checking if there is an existing yo project
    checkYoRc: function() {
        var cb = this.async();

        if(this.config.get('props') && !this.options['default']) {
            this.prompt([{
                type: 'confirm',
                name: 'skipConfig',
                message: 'Existing ' + chalk.green('.yo-rc') + ' configuration found, would you like to use it?',
                default: true
            }], function (answers) {
                this.skipConfig = answers.skipConfig;
                cb();
            }.bind(this));
        } else {
            cb();
        }
    },

    getOptions: function() {
        if (this.skipConfig || this.options['default']) {
            return;
        }

        ['app-path', 'dist-path', 'test-path', 'tmp-path'].forEach(function (name) {
                if (utils.isAbsolutePath(this.options[name])) {
                    this.env.error(name + ' must be a relative path');
                }
        }.bind(this));

        this.paths = {
            src: this.options['app-path'],
            dist: this.options['dist-path'],
            test: this.options['test-path']
        }
    },
    formatProps: require('./format'),
    writeFiles: require('./writeFiles')
});

module.exports = modularAngularGenerator;

