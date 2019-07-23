(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.propTypes);
    global.button_box = mod.exports;
  }
})(this, function (_exports, _react, _classnames, _propTypes) {
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
    return _react["default"].createElement("div", {
      style: props.style,
      className: (0, _classnames["default"])('x-btn-box', "x-btn-box-".concat(props.align), props.className)
    }, props.children);
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