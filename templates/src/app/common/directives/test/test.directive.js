(function () {
    'use strict';

    angular
        .module('<%= appName %>.directives')
        .directive('test', test);

    /* @ngInject */
    function test() {
        var directive = {
            restrict: 'EA',
            templateUrl: '<%= appName %>/common/directives/test/test.tpl.html',
            controller: 'Test',
            link: link,
            controllerAs: 'vm'
        };

        return directive;

        /////////////////////////////////

        function link() {

        }
    }

})();