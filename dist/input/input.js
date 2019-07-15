(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.classnames, global.propTypes);
    global.input = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _classnames, _propTypes) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function useInputValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var onChange = (0, _react.useCallback)(function (e) {
      setValue(e.currentTarget.value);
    }, []);

    var updateValue = function updateValue(value) {
      setValue(value);
    };

    return {
      value: value,
      onChange: onChange,
      updateValue: updateValue
    };
  }

  function Input(_ref) {
    var placeholder = _ref.placeholder,
        error = _ref.error,
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value,
        className = _ref.className,
        style = _ref.style,
        _onChange = _ref.onChange,
        onEnter = _ref.onEnter,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        disabled = _ref.disabled,
        maxLength = _ref.maxLength,
        minLength = _ref.minLength,
        type = _ref.type;
    var oInput = useInputValue(value);

    var _useState3 = (0, _react.useState)(disabled),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        isBan = _useState4[0],
        setIsBan = _useState4[1];

    var _useState5 = (0, _react.useState)(error),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        isError = _useState6[0],
        setIsError = _useState6[1];

    (0, _react.useEffect)(function () {
      oInput.updateValue(value);
    }, [value]);
    (0, _react.useEffect)(function () {
      setIsBan(disabled);
    }, [disabled]);
    (0, _react.useEffect)(function () {
      setIsError(error);
    }, [isError]);
    return _react["default"].createElement("input", {
      value: oInput.value,
      style: style,
      type: type,
      className: (0, _classnames["default"])('x-input', className, {
        'x-input-error': isError
      }),
      disabled: isBan,
      placeholder: placeholder,
      minLength: minLength,
      maxLength: maxLength,
      onChange: function onChange(e) {
        oInput.onChange(e);
        _onChange && _onChange(e.target.value, e);
      },
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: function onKeyDown(e) {
        if (e.keyCode === 13 && onEnter) {
          onEnter(e.target.value, e);
        }
      }
    });
  }

  Input.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    disabled: _propTypes["default"].bool,
    error: _propTypes["default"].bool,
    maxLength: _propTypes["default"].number,
    minLength: _propTypes["default"].number,
    type: _propTypes["default"].string,
    onFocus: _propTypes["default"].func,
    onBlur: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onEnter: _propTypes["default"].func
  };
  Input.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    style: null,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onEnter: function onEnter() {}
  };
  var _default = Input;
  _exports["default"] = _default;
  module.exports = exports.default;
});