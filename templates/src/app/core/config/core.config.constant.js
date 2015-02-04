(function () {
    'use strict';

    angular
        .module('<%= appName %>.core.config')
        .constant('<%= appName %>Config', {
            testAttr: 'testAttr',
            testFn: testFn()
        });

    ///////////////////////////////

    function testFn() {
        return 'testFn';
    }
})();