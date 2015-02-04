(function () {
    'use strict';

    angular
    	.module('<%= appName %>.page')
    	.controller('Page', Page);

    /* @ngInject */
    function Page() {
        var vm = this;

        vm.test = 'test';
        vm.testFn = testFn;

        ///////////////////////////////////////////
        function testFn() {
            return null;
        }
    }
})();