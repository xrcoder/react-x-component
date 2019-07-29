(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "react-router-dom", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("react-router-dom"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.react, global.classnames, global.reactRouterDom, global.propTypes);
    global.button_link = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _react, _classnames, _reactRouterDom, _propTypes) {
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
  _propTypes = _interopRequireDefault(_propTypes);

  function ButtonLink(props) {
    var className = props.className,
        size = props.size,
        type = props.type,
        inverse = props.inverse,
        children = props.children;

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
    return _react["default"].createElement(_reactRouterDom.Link, (0, _extends2["default"])({}, props, {
      className: btnClass,
      inverse: null,
      type: null,
      size: null
    }), children);
  }

  ButtonLink.propTypes = {
    className: _propTypes["default"].string,
    type: _propTypes["default"].oneOf(['primary', 'danger', 'text', null]),
    size: _propTypes["default"].oneOf(['lg', 'sm', null]),
    inverse: _propTypes["default"].bool
  };
  ButtonLink.defaultProps = {
    className: '',
    type: null,
    size: null,
    inverse: false
  };
  var _default = ButtonLink;
  _exports["default"] = _default;
  module.exports = exports.default;
});