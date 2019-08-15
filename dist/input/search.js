(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "./addon", "../button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("./addon"), require("../button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.addon, global.button);
    global.search = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _addon, _button) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _addon = _interopRequireDefault(_addon);

  var _default = function _default(props) {
    var children = props.children,
        onSearch = props.onSearch,
        btnType = props.btnType,
        disabled = props.disabled;
    return (0, _core.jsx)(_addon["default"], (0, _extends2["default"])({}, props, {
      children: null,
      onSearch: null,
      btnType: null,
      render: function render() {
        return (0, _core.jsx)(_button.Button, {
          type: btnType,
          disabled: disabled,
          onClick: onSearch
        }, children);
      }
    }));
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});