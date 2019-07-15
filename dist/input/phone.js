(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "./reg"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("./reg"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.react, global.reg);
    global.phone = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _react, _reg2) {
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
  _reg2 = _interopRequireDefault(_reg2);

  var filterValue = function filterValue(val) {
    var _reg = /^[0-9]*$/,
        _val = '';

    if (_reg.test(val)) {
      _val = val;
    } else {
      _val = val.replace(/[^\d]/g, '');
    }

    return _val;
  };

  var Phone = function Phone(props) {
    var value = props.value;

    var _useState = (0, _react.useState)(props.value),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];

    (0, _react.useEffect)(function () {
      setValue(filterValue(value));
    }, [value]);
    return _react["default"].createElement(_reg2["default"], (0, _extends2["default"])({}, props, {
      type: 'text',
      reg: /^[1]([3-9])[0-9]{9}$/,
      value: _value
    }));
  };

  var _default = Phone;
  _exports["default"] = _default;
  module.exports = exports.default;
});