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
    global.loading = mod.exports;
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

  function Loading(_ref) {
    var className = _ref.className,
        status = _ref.status;

    var _useState = (0, _react.useState)(status),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    (0, _react.useEffect)(function () {
      setValue(status);
    }, [status]);
    return value ? (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('remind-loading', className)
    }) : null;
  }

  Loading.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    status: _propTypes["default"].bool
  };
  Loading.defaultProps = {
    className: '',
    status: true,
    style: {}
  };
  var _default = Loading;
  _exports["default"] = _default;
  module.exports = exports.default;
});