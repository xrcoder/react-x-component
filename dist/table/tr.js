(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react);
    global.tr = mod.exports;
  }
})(this, function (_exports, _core, _react) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _react = _interopRequireDefault(_react);

  function _default(props) {
    return (0, _core.jsx)("tr", props, props.children);
  }

  module.exports = exports.default;
});