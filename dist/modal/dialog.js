(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames", "./modal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"), require("./modal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.modal);
    global.dialog = mod.exports;
  }
})(this, function (_exports, _react, _classnames, _modal) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _modal = _interopRequireDefault(_modal);

  var _default = function _default(C) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _opt = {
      backDrop: opt.backDrop || false,
      size: opt.size || 'md',
      className: (0, _classnames["default"])(opt.className),
      data: opt.data
    };
    return (0, _modal["default"])(C, _opt);
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});