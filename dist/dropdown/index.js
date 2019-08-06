(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "react-overlays"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("react-overlays"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.reactOverlays);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _reactOverlays) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);

  function MenuContainer(_ref) {
    var children = _ref.children,
        show = _ref.show;
    return (0, _core.jsx)("div", {
      className: "x-toggle-menucontainer",
      style: {
        display: show ? 'flex' : 'none'
      }
    }, children);
  }

  function Menu() {
    return (0, _core.jsx)(_reactOverlays.Dropdown.Menu, {
      flip: true
    }, function (_ref2) {
      var show = _ref2.show,
          onClose = _ref2.onClose,
          props = _ref2.props;
      return (0, _core.jsx)(MenuContainer, (0, _extends2["default"])({}, props, {
        show: show
      }), (0, _core.jsx)("button", {
        type: "button",
        onClick: onClose,
        style: {
          textAlign: 'left'
        }
      }, "Item 1"), (0, _core.jsx)("button", {
        type: "button",
        onClick: onClose,
        style: {
          textAlign: 'left'
        }
      }, "Item 2"));
    });
  }

  function Toggle(_ref3) {
    var children = _ref3.children;
    return (0, _core.jsx)(_reactOverlays.Dropdown.Toggle, null, function (_ref4) {
      var toggle = _ref4.toggle,
          props = _ref4.props;
      return (0, _core.jsx)("button", (0, _extends2["default"])({}, props, {
        onClick: toggle
      }), children);
    });
  }

  function DropdownButton(_ref5) {
    var show = _ref5.show,
        onToggle = _ref5.onToggle,
        drop = _ref5.drop,
        alignEnd = _ref5.alignEnd,
        title = _ref5.title,
        role = _ref5.role;
    return (0, _core.jsx)(_reactOverlays.Dropdown, {
      show: show,
      onToggle: onToggle,
      drop: drop,
      alignEnd: alignEnd
    }, function (_ref6) {
      var props = _ref6.props;
      return (0, _core.jsx)("div", (0, _extends2["default"])({}, props, {
        className: "position-relative"
      }), (0, _core.jsx)(Toggle, null, title), (0, _core.jsx)(Menu, {
        role: role
      }));
    });
  }

  function _default() {
    return (0, _core.jsx)(DropdownButton, {
      alignEnd: true,
      title: "\u6D4B\u8BD5"
    });
  }

  module.exports = exports.default;
});