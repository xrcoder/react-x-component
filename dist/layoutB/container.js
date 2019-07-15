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
    global.container = mod.exports;
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

  var XContainer = function XContainer(props) {
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-b-container', props.className)
    }, props.children);
  };

  var _default = XContainer;
  _exports["default"] = _default;
  module.exports = exports.default;
});