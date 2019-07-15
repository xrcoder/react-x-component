(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "react", "classnames", "./group"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("./group"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react, global.classnames, global.group);
    global.index = mod.exports;
  }
})(this, function (_exports, _extends2, _react, _classnames, _group) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _group = _interopRequireDefault(_group);

  function Name(props) {
    return _react["default"].createElement("label", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('x-form-name', props.className)
    }), props.children);
  }

  var _default = {
    Name: Name,
    Group: _group["default"]
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});