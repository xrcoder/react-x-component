(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _react, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);

  var _default = function _default(_ref) {
    var name = _ref.name,
        _ref$onClick = _ref.onClick,
        _onClick = _ref$onClick === void 0 ? null : _ref$onClick,
        className = _ref.className;

    var _name = name ? "fa-".concat(name) : null;

    return (0, _core.jsx)("i", {
      className: (0, _classnames["default"])('fa', _name, className),
      onClick: function onClick(e) {
        _onClick && _onClick(e);
      }
    });
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});