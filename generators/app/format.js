'use strict';

var path = require('path');
var files = require('./files.json');
var utils = require('./utils');

module.exports = function() {
    var _ = this._;

    // Format appName
    this.appName = this.appName || path.basename(process.cwd());
    this.appName = _.camelize(_.slugify(_.humanize(this.appName)));

    this.configFiles = files.configFiles;
    this.templateFiles = files.templateFiles;
    this.javascriptFiles = _.map(files.templateFiles, function(path) {
        return utils.replacePrefix(path, this.paths);
    }, this);
    this.staticFiles = files.staticFiles;
};