(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "classnames", "react-overlays", "./menu_container", "./menu_target"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("react-overlays"), require("./menu_container"), require("./menu_target"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.classnames, global.reactOverlays, global.menu_container, global.menu_target);
    global.menu_dropdown = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _classnames, _reactOverlays, _menu_container, _menu_target) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _menu_container = _interopRequireDefault(_menu_container);
  _menu_target = _interopRequireDefault(_menu_target);

  var MenuBox = function MenuBox(menu) {
    return function (_ref) {
      var show = _ref.show,
          close = _ref.close,
          props = _ref.props;
      return (0, _core.jsx)(_menu_container["default"], {
        parentProps: props,
        show: show
      }, menu(show, close));
    };
  };

  var MenuTarget = function MenuTarget(children, menu, alignEnd, className) {
    return function (_ref2) {
      var props = _ref2.props;
      return (0, _core.jsx)(_menu_target["default"], (0, _extends2["default"])({}, props, {
        className: className
      }), (0, _core.jsx)(_reactOverlays.Dropdown.Toggle, null, children), (0, _core.jsx)(_reactOverlays.Dropdown.Menu, {
        flip: true,
        alignEnd: alignEnd
      }, MenuBox(menu)));
    };
  };

  function _default(props) {
    var children = props.children,
        menu = props.menu,
        alignEnd = props.alignEnd,
        drop = props.drop,
        onToggle = props.onToggle,
        className = props.className;
    return (0, _core.jsx)(_reactOverlays.Dropdown, {
      drop: drop,
      onToggle: onToggle
    }, MenuTarget(children, menu, alignEnd, className));
  }

  module.exports = exports.default;
});