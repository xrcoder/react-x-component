(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.slicedToArray, global.react, global.classnames, global.propTypes);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _slicedToArray2, _react, _classnames, _propTypes) {
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

  function Switch(props) {
    var style = props.style,
        className = props.className,
        status = props.status,
        onChange = props.onChange,
        disabled = props.disabled;

    var _useState = (0, _react.useState)(status),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isOn = _useState2[0],
        setIsOn = _useState2[1];

    var _useState3 = (0, _react.useState)(disabled),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        isDisabled = _useState4[0],
        setIsDisabled = _useState4[1];

    (0, _react.useEffect)(function () {
      setIsOn(status);
    }, [status]);
    (0, _react.useEffect)(function () {
      setIsDisabled(disabled);
    }, [disabled]);
    var cls = (0, _classnames["default"])('x-switch', {
      'x-switch-off': !isOn
    }, {
      'x-switch-disabled': isDisabled
    }, className);
    return (0, _core.jsx)("div", {
      style: style,
      className: cls,
      onClick: function onClick(e) {
        if (isDisabled) {
          return;
        }

        setIsOn(!isOn);
        onChange(e, !isOn);
      }
    }, (0, _core.jsx)("span", {
      className: "switch-btn"
    }));
  }

  Switch.propTypes = {
    className: _propTypes["default"].string,
    status: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    style: _propTypes["default"].object,
    onChange: _propTypes["default"].func
  };
  Switch.defaultProps = {
    className: '',
    status: false,
    style: null,
    disabled: false,
    onChange: function onChange() {}
  };
  var _default = Switch;
  _exports["default"] = _default;
  module.exports = exports.default;
});