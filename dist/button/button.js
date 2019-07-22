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
    global.button = mod.exports;
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

  function Button(props) {
    var className = props.className,
        style = props.style,
        disabled = props.disabled,
        size = props.size,
        type = props.type,
        inverse = props.inverse,
        children = props.children,
        _onClick = props.onClick;

    var _useState = (0, _react.useState)(inverse),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        btnInverse = _useState2[0],
        setBtnInverse = _useState2[1];

    (0, _react.useEffect)(function () {
      setBtnInverse(inverse);
    }, [inverse]);
    var btnClass = (0, _classnames["default"])('x-btn', {
      'x-btn-primary': type === 'primary',
      'x-btn-danger': type === 'danger',
      'x-btn-text': type === 'text',
      'x-btn-lg': size === 'lg',
      'x-btn-sm': size === 'sm',
      'x-btn-inverse': btnInverse
    }, className);
    return _react["default"].createElement("button", {
      style: style,
      className: btnClass,
      disabled: disabled,
      onClick: function onClick(e) {
        _onClick && _onClick(e);
      }
    }, children);
  }

  Button.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    type: _propTypes["default"].oneOf(['primary', 'danger', 'text', '']),
    size: _propTypes["default"].oneOf(['lg', 'sm', '']),
    inverse: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    onClick: _propTypes["default"].func
  };
  Button.defaultProps = {
    className: '',
    style: null,
    type: '',
    size: '',
    inverse: false,
    disabled: false,
    onClick: function onClick() {}
  };
  var _default = Button;
  _exports["default"] = _default;
  module.exports = exports.default;
});