'use strict';

var utils = require('./utils');

var writeFiles = function() {
    var _ = this._;
    var data = this;

    _.forEach(this.configFiles, function(dest, src) {
        dest = utils.replacePrefix(dest, this.paths);
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), data);
    }, this);

    _.forEach(this.templateFiles, function(path) {
        var dest = utils.replacePrefix(path, this.paths);
        this.fs.copyTpl(this.templatePath(path), this.destinationPath(dest), data);
    }, this);

    _.forEach(this.staticFiles, function(path) {
        var dest = utils.replacePrefix(path, this.paths);
        this.fs.copy(this.templatePath(path), this.destinationPath(dest), data);
    }, this);
};

module.exports = writeFiles;