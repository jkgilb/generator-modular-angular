(function () {
    'use strict';

    angular
        .module('<%= appName %>.page')
        .config(getRoutes);

    /* @ngInject */
    function getRoutes($stateProvider) {
        $stateProvider
            .state('<%= appName %>.page', {
                url: '/page',
                templateUrl: '<%= appName %>/page/page.tpl.html',
                controller: 'Page',
                controllerAs: 'vm',
                resolve: {
                    resolveVar: resolveVar
                }
            });

        /* @ngInject */
        function resolveVar() {
            return 'test';
        }
    }
})();