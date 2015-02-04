(function () {
    'use strict';

    angular.module('<%= appName %>', [
        /*
         * Application core
         */
        '<%= appName %>.core',
        '<%= appName %>.directives',
        '<%= appName %>.models',
        /*
         * Feature areas
         */
        '<%= appName %>.page'
    ]);
})();