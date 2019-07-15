(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "react", "classnames", "./input", "./group"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("./input"), require("./group"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react, global.classnames, global.input, global.group);
    global.addon = mod.exports;
  }
})(this, function (_exports, _extends2, _react, _classnames, _input, _group) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _input = _interopRequireDefault(_input);
  _group = _interopRequireDefault(_group);

  function Inner(props) {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_input["default"], props), _react["default"].createElement("div", {
      className: "group-addon-right"
    }, props.render()));
  }

  var _default = function _default(props) {
    var className = props.className,
        style = props.style;
    return _react["default"].createElement(_group["default"], {
      className: (0, _classnames["default"])('x-input-group-addon', className),
      style: style
    }, _react["default"].createElement(Inner, (0, _extends2["default"])({}, props, {
      className: null,
      style: null
    })));
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});