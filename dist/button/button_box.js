(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.classnames, global.propTypes);
    global.button_box = mod.exports;
  }
})(this, function (_exports, _core, _react, _classnames, _propTypes) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function ButtonBox(props) {
    var style = props.style,
        align = props.align,
        className = props.className,
        children = props.children;
    var typeArr = ['Button', 'ButtonGroup', 'ButtonIcon', 'ButtonLink', 'ButtonUpload'];
    return (0, _core.jsx)("div", {
      style: style,
      className: (0, _classnames["default"])('x-btn-box', "x-btn-box-".concat(align), className)
    }, children);
  }

  ButtonBox.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    align: _propTypes["default"].oneOf(['left', 'center', 'right'])
  };
  ButtonBox.defaultProps = {
    className: '',
    style: null,
    align: 'right'
  };
  var _default = ButtonBox;
  _exports["default"] = _default;
  module.exports = exports.default;
});