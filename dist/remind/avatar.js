(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.slicedToArray, global.react, global.classnames, global.propTypes);
    global.avatar = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _slicedToArray2, _react, _classnames, _propTypes) {
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

  function Avatar(props) {
    var className = props.className,
        source = props.source,
        size = props.size,
        alt = props.alt;

    var _useState = (0, _react.useState)(source),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    (0, _react.useEffect)(function () {
      setValue(source);
    }, [source]);
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, props, {
      style: {
        width: size,
        height: size
      },
      className: (0, _classnames["default"])('x-remind-avatar', {
        'x-remind-avatar-bg': !Boolean(value)
      }, className)
    }), value && (0, _core.jsx)("img", {
      src: source,
      alt: alt
    }));
  }

  Avatar.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    source: _propTypes["default"].string,
    size: _propTypes["default"].number
  };
  Avatar.defaultProps = {
    className: '',
    status: true,
    source: '',
    size: 70
  };
  var _default = Avatar;
  _exports["default"] = _default;
  module.exports = exports.default;
});