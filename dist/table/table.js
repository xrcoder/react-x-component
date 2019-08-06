(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.classnames);
    global.table = mod.exports;
  }
})(this, function (_exports, _core, _react, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);

  function _default(props) {
    return (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('x-table-container', props.className)
    }, (0, _core.jsx)("table", {
      className: "x-table"
    }, props.children));
  }

  module.exports = exports.default;
});