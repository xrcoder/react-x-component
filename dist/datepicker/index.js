(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "element-react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("element-react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.elementReact);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _elementReact) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  var _default = {
    DatePicker: _elementReact.DatePicker,
    DateRangePicker: _elementReact.DateRangePicker
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});