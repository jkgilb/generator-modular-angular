(function () {
    'use strict';

    angular
        .module('<%= appName %>.core.layout')
        .config(getRoutes);


    /* @ngInject */
    function getRoutes($stateProvider, $urlRouterProvider) {

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('<%= appName %>', {
                abstract: true,
                url: '',
                templateUrl: '<%= appName %>/core/layout/core.layout.tpl.html',
                controller: 'Layout',
                controllerAs: 'vm'
            });
    }
})();