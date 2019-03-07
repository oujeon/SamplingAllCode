(function () {
    'use strict';
    var app;

    app = angular.module('module001', [])
        .directive('directive001', fnDirective001)
        .service('service001', fnService001)
        .provider('provider001', fnProvider001)
        .filter('filter001', fnFilter001)
        .run(['$templateCache', fnRun001]);


    /**
     * 디렉티브 함수
     * @returns {{}}
     */
    function fnDirective001() {

        return {};
    }

    /**
     * 서비스 함수
     * @returns {{}}
     */
    function fnService001() {

        return {};
    }

    /**
     * 프로바이더 함수
     * @returns {{}}
     */
    function fnProvider001() {

        // 아래와 같은 에러가 발생
        // angularjs_1_7_5.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module app_001 due to:
        // Error: [$injector:modulerr] Failed to instantiate module module001 due to:
        // Error: [$injector:pget] Provider 'provider001' must define $get factory method.
        // 해결방법 :
        // this.$get = function() {
        //    return {};
        // };
        this.$get = function () {
            return {};
        };
    }

    /**
     * 필터 함수
     * @returns {{}}
     */
    function fnFilter001() {

        // 아래와 같이 하지 않으면 에러가 발생한다.
        return function (param) {
            return param + "!";
        }
    }

    /**
     * run 함수
     * @returns {Function}
     */
    function fnRun001() {
        return "";
    }

})();
