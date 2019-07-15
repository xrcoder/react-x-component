(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "./input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("./input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.react, global.classnames, global.input);
    global.reg = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _react, _classnames, _input) {
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
  _classnames = _interopRequireDefault(_classnames);
  _input = _interopRequireDefault(_input);

  var RegInput = function RegInput(props) {
    var value = props.value,
        className = props.className,
        reg = props.reg,
        _onChange = props.onChange;

    var _useState = (0, _react.useState)(value),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];

    var _useState3 = (0, _react.useState)(true),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        _isValid = _useState4[0],
        setValid = _useState4[1]; //默认合法


    (0, _react.useEffect)(function () {
      setValue(value);
      setValid(reg.test(value));
    });
    return _react["default"].createElement(_input["default"], (0, _extends2["default"])({}, props, {
      value: _value,
      className: (0, _classnames["default"])(className, {
        'x-input-error': !_isValid && _value
      }),
      onChange: function onChange(res, e) {
        setValue(res);

        _onChange(res, _isValid, e);
      }
    }));
  };

  RegInput.defaultProps = {
    reg: /[\s\S]*/
  };
  var _default = RegInput;
  _exports["default"] = _default;
  module.exports = exports.default;
});