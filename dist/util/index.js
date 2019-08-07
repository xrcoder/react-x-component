(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getFuncName = getFuncName;

  function getFuncName(func) {
    if (typeof func !== 'function') {
      return false;
    }

    return func.toString().match(/function ([^\(]+)/)[1];
  }
});