(function() {
  "use strict";
  var app;

  app = angular
    .module("module001", [])
    .directive("directive001", fnDirective001)
    .service("service001", fnService001)
    .provider("provider001", fnProvider001)
    .filter("filter001", fnFilter001)
    .run(["$templateCache", fnRun001]);

  /**
   * ��Ƽ�� �Լ�
   * @returns {{}}
   */
  function fnDirective001() {
    return {};
  }

  /**
   * ���� �Լ�
   * @returns {{}}
   */
  function fnService001() {
    return {};
  }

  /**
   * ���ι��̴� �Լ�
   * @returns {{}}
   */
  function fnProvider001() {
    // �Ʒ��� ���� ������ �߻�
    // angularjs_1_7_5.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module app_001 due to:
    // Error: [$injector:modulerr] Failed to instantiate module module001 due to:
    // Error: [$injector:pget] Provider 'provider001' must define $get factory method.
    // �ذ��� :
    // this.$get = function() {
    //    return {};
    // };
    this.$get = function() {
      return {};
    };
  }

  /**
   * ���� �Լ�
   * @returns {{}}
   */
  function fnFilter001() {
    // �Ʒ��� ���� ���� ������ ������ �߻��Ѵ�.
    return function(param) {
      return param + "!";
    };
  }

  /**
   * run �Լ�
   * @returns {Function}
   */
  function fnRun001() {
    return "";
  }
})();
