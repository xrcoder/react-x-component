(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.classnames, global.propTypes);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _classnames, _propTypes) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function Close(props) {
    var size = props.size,
        color = props.color,
        className = props.className;
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('x-close', className),
      style: {
        width: size
      }
    }), (0, _core.jsx)("div", {
      className: "x-close-a",
      style: {
        height: size,
        backgroundColor: color
      }
    }), (0, _core.jsx)("div", {
      className: "x-close-b",
      style: {
        height: size,
        backgroundColor: color
      }
    }));
  }

  Close.propTypes = {
    className: _propTypes["default"].string,
    size: _propTypes["default"].number,
    color: _propTypes["default"].string
  };
  Close.defaultProps = {
    className: '',
    size: 20,
    color: '#979797'
  };
  var _default = Close;
  _exports["default"] = _default;
  module.exports = exports.default;
});