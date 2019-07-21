(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./single", "./single_search_control"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./single"), require("./single_search_control"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.single, global.single_search_control);
    global.index = mod.exports;
  }
})(this, function (_exports, _single, _single_search_control) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _single = _interopRequireDefault(_single);
  _single_search_control = _interopRequireDefault(_single_search_control);
  var _default = {
    Single: _single["default"],
    SingleSearch: _single_search_control["default"]
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});