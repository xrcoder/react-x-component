(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./week"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./week"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.week);
    global.index = mod.exports;
  }
})(this, function (_exports, _week) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _week = _interopRequireDefault(_week);
  var _default = {
    Week: _week["default"]
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});