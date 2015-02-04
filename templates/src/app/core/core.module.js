(function () {
    'use strict';

    angular.module('<%= appName %>.core', [
        /*
         * Angular modules
         */
        'ngSanitize',
        /*
         * 3rd Party modules
         */
        'ui.router',
        'angular-loading-bar',
        /*
         * Core modules
         */
        '<%= appName %>.core.layout',
        '<%= appName %>.core.config'
    ]);
})();