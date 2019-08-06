(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "./input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("./input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.slicedToArray, global.react, global.input);
    global.reg = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _slicedToArray2, _react, _input) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _input = _interopRequireDefault(_input);

  function RegInput(props) {
    var className = props.className,
        value = props.value,
        reg = props.reg,
        _onChange = props.onChange;

    var _useState = (0, _react.useState)(value),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        regValue = _useState2[0],
        setRegValue = _useState2[1];

    var _useState3 = (0, _react.useState)(true),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        resRule = _useState4[0],
        setResRule = _useState4[1];

    (0, _react.useEffect)(function () {
      setRegValue(value);
      setResRule(reg.test(value));
    }, [value]);
    return (0, _core.jsx)(_input["default"], (0, _extends2["default"])({}, props, {
      value: regValue,
      className: className,
      error: Boolean(!resRule && regValue),
      onChange: function onChange(res, e) {
        setRegValue(res);

        _onChange(res, resRule, e);
      }
    }));
  }

  RegInput.defaultProps = {
    reg: /[\s\S]*/
  };
  var _default = RegInput;
  _exports["default"] = _default;
  module.exports = exports.default;
});