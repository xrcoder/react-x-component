(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.classnames);
    global.group = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);

  var _default = function _default(props) {
    var error = props.error,
        children = props.children,
        className = props.className;
    return (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('x-input-group', className)
    }, _react["default"].Children.map(children, function (child) {
      return (0, _core.jsx)(child.type, (0, _extends2["default"])({}, child.props, {
        error: error
      }));
    }));
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});