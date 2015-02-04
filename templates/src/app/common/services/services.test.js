(function () {
    'use strict';

    angular
        .module('<%= appName %>.services')
        .factory('TestService', TestService);

    /* @ngInject */
    function TestService() {
        var service = {
            get: get,
            set: post
        };

        return service;
        //////////////////////

        function get() {
            return 'test';
        }

        function post() {
            return 'test';
        }
    }
})();