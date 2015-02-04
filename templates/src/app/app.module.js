(function () {
    'use strict';

    angular.module('<%= appName %>', [
        /*
         * Application core
         */
        '<%= appName %>.core',
        '<%= appName %>.directives',
        '<%= appName %>.services',
        /*
         * Feature areas
         */
        '<%= appName %>.page'
    ]);
})();