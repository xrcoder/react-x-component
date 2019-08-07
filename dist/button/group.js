(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/typeof", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/typeof"), require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._typeof, global.react, global.classnames);
    global.group = mod.exports;
  }
})(this, function (_exports, _core, _typeof2, _react, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);

  function ButtonGroup(props) {
    var children = props.children,
        style = props.style,
        lax = props.lax,
        className = props.className;
    return (0, _core.jsx)("div", {
      style: style,
      className: (0, _classnames["default"])('x-btn-group', className)
    }, _react["default"].Children.map(children, function (child) {
      if (lax) {
        return (0, _core.jsx)(child.type, child.props);
      }

      if ((0, _typeof2["default"])(child) !== 'object' || child.type.displayName !== 'Button') {
        console.warn('ButtonGroup组件的子组件必须是Button组件！');
        return null;
      } else {
        return (0, _core.jsx)(child.type, child.props);
      }
    }));
  }

  var _default = ButtonGroup;
  _exports["default"] = _default;
  module.exports = exports.default;
});