(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types", "./button_box", "./button_link"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"), require("./button_box"), require("./button_link"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.slicedToArray, global.react, global.classnames, global.propTypes, global.button_box, global.button_link);
    global.button = mod.exports;
  }
})(this, function (_exports, _core, _slicedToArray2, _react, _classnames, _propTypes, _button_box, _button_link) {
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
  _button_box = _interopRequireDefault(_button_box);
  _button_link = _interopRequireDefault(_button_link);

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

    var _useState3 = (0, _react.useState)(type),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        btnType = _useState4[0],
        setBtnType = _useState4[1];

    (0, _react.useEffect)(function () {
      setBtnInverse(inverse);
    }, [inverse]);
    (0, _react.useEffect)(function () {
      setBtnType(type);
    }, [type]);
    var btnClass = (0, _classnames["default"])('x-btn', {
      'x-btn-primary': btnType === 'primary',
      'x-btn-danger': btnType === 'danger',
      'x-btn-text': btnType === 'text',
      'x-btn-lg': size === 'lg',
      'x-btn-sm': size === 'sm',
      'x-btn-inverse': btnInverse
    }, className);
    return (0, _core.jsx)("button", {
      style: style,
      className: btnClass,
      disabled: disabled,
      onClick: function onClick(e) {
        _onClick && _onClick(e);
      }
    }, children);
  }

  Button.Box = _button_box["default"];
  Button.Link = _button_link["default"];
  Button.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    type: _propTypes["default"].oneOf(['primary', 'danger', 'text', null]),
    size: _propTypes["default"].oneOf(['lg', 'sm', null]),
    inverse: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    onClick: _propTypes["default"].func
  };
  Button.defaultProps = {
    className: '',
    style: null,
    type: null,
    size: null,
    inverse: false,
    disabled: false,
    onClick: function onClick() {}
  };
  var _default = Button;
  _exports["default"] = _default;
  module.exports = exports.default;
});