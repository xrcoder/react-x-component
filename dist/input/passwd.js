(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "./reg"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("./reg"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.reg);
    global.passwd = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _reg) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _reg = _interopRequireDefault(_reg);

  var Passwd = function Passwd(props) {
    return (0, _core.jsx)(_reg["default"], (0, _extends2["default"])({}, props, {
      type: 'password'
    }));
  };

  var _default = Passwd;
  _exports["default"] = _default;
  module.exports = exports.default;
});