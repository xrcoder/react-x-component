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
    global.index = mod.exports;
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

  function MenuContainer(props) {
    var children = props.children,
        show = props.show,
        parentProps = props.parentProps,
        className = props.className;
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, parentProps, {
      className: (0, _classnames["default"])('x-toggle-menu', {
        'x-toggle-menu-show': show
      }, className)
    }), children);
  }

  function MenuTarget(props) {
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('x-toggle', props.className)
    }), props.children);
  }

  var _default = {
    MenuContainer: MenuContainer,
    MenuTarget: MenuTarget
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});