(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _classnames) {
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

    return _react["default"].createElement("i", {
      className: (0, _classnames["default"])('fa', _name, className),
      onClick: function onClick(e) {
        _onClick && _onClick(e);
      }
    });
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});