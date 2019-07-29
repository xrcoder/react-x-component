(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "../button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("../button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.propTypes, global.button);
    global.btn = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _propTypes, _button) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function useValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var updateValue = function updateValue(res) {
      setValue(res);
    };

    return {
      value: value,
      updateValue: updateValue
    };
  }

  function useDisabled(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var updateValue = function updateValue(res) {
      setValue(res);
    };

    return {
      value: value,
      updateValue: updateValue
    };
  }

  function Btn(props) {
    var className = props.className,
        style = props.style,
        _props$type = props.type,
        type = _props$type === void 0 ? 'primary' : _props$type,
        size = props.size,
        label = props.label,
        value = props.value,
        disabled = props.disabled,
        onChange = props.onChange;
    var oValue = useValue(value);
    var oDisabled = useDisabled(disabled);
    (0, _react.useEffect)(function () {
      oValue.updateValue(value);
    }, [value]);
    (0, _react.useEffect)(function () {
      oDisabled.updateValue(disabled);
    }, [disabled]);
    return _react["default"].createElement(_button.Button, {
      style: style,
      type: type,
      disabled: oDisabled.value,
      inverse: !oValue.value,
      size: size,
      className: className,
      onClick: function onClick(e) {
        if (disabled || oValue.value) {
          return;
        }

        var v = !oValue.value;
        oValue.updateValue(v);
        onChange(e, v);
      }
    }, label);
  }

  Btn.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    label: _propTypes["default"].string,
    value: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  };
  Btn.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function onChange() {}
  };
  var _default = Btn;
  _exports["default"] = _default;
  module.exports = exports.default;
});