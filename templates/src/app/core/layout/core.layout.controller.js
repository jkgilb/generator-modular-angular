(function () {
    'use strict';

    angular
        .module('<%= appName %>.core.layout')
        .controller('Layout', Layout);

    /* @ngInject */
    function Layout() {
        var vm = this;
    }
})();