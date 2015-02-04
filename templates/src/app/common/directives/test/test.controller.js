(function () {
    'use strict';

    angular
        .module('<%= appName %>.directives')
        .controller('Test', Test);

    /* @ngInject */
    function Test() {
        var vm = this;
    }
})();