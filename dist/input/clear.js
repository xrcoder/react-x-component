(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "../icon", "./input", "./group"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("../icon"), require("./input"), require("./group"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.slicedToArray, global.react, global.classnames, global.icon, global.input, global.group);
    global.clear = mod.exports;
  }
})(this, function (_exports, _core, _slicedToArray2, _react, _classnames, _icon, _input, _group) {
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
  _icon = _interopRequireDefault(_icon);
  _input = _interopRequireDefault(_input);
  _group = _interopRequireDefault(_group);

  function useClearBtn(value) {
    var _useState = (0, _react.useState)(value),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        status = _useState2[0],
        setStatus = _useState2[1];

    var changeStatus = function changeStatus(res) {
      setStatus(res);
    };

    var updateStatus = function updateStatus(v) {
      if (v.length === 0) {
        setStatus(false);
      } else {
        setStatus(true);
      }
    };

    return {
      status: status,
      changeStatus: changeStatus,
      updateStatus: updateStatus
    };
  }

  function useInputValue(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

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

  function Clear(props) {
    var style = props.style,
        className = props.className,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        error = props.error,
        placeholder = props.placeholder,
        type = props.type,
        maxLength = props.maxLength,
        minLength = props.minLength,
        disabled = props.disabled,
        _onChange = props.onChange,
        onEnter = props.onEnter,
        _onFocus = props.onFocus,
        _onBlur = props.onBlur,
        onClear = props.onClear;

    var _useClearBtn = useClearBtn(false),
        status = _useClearBtn.status,
        changeStatus = _useClearBtn.changeStatus,
        updateStatus = _useClearBtn.updateStatus;

    var oInput = useInputValue(value);
    (0, _react.useEffect)(function () {
      oInput.updateValue(value);
    }, [value]);
    return (0, _core.jsx)(_group["default"], {
      className: (0, _classnames["default"])(className),
      style: style
    }, (0, _core.jsx)(_input["default"], {
      placeholder: placeholder,
      type: type,
      error: error,
      maxLength: maxLength,
      minLength: minLength,
      disabled: disabled,
      value: oInput.value,
      onChange: function onChange(res, e) {
        updateStatus(res);
        oInput.onChange(e);
        _onChange && _onChange(res, e);
      },
      onFocus: function onFocus(e) {
        _onFocus && _onFocus(e);
        updateStatus(value || oInput.value);
      },
      onBlur: function onBlur(e) {
        changeStatus(false);
        _onBlur && _onBlur(e);
      },
      onEnter: onEnter
    }), (0, _core.jsx)(_icon["default"], {
      className: (0, _classnames["default"])('clear-btn', {
        'show': status
      }),
      name: 'times-circle',
      onClick: function onClick(e) {
        oInput.updateValue('');
        _onChange && _onChange('', e);
        onClear && onClear(e);
      }
    }));
  }

  var _default = Clear;
  _exports["default"] = _default;
  module.exports = exports.default;
});