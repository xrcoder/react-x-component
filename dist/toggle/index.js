(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./menu_container", "./menu_target", "./menu_dropdown"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./menu_container"), require("./menu_target"), require("./menu_dropdown"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.menu_container, global.menu_target, global.menu_dropdown);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _menu_container, _menu_target, _menu_dropdown) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _menu_container = _interopRequireDefault(_menu_container);
  _menu_target = _interopRequireDefault(_menu_target);
  _menu_dropdown = _interopRequireDefault(_menu_dropdown);
  var _default = {
    Container: _menu_container["default"],
    Target: _menu_target["default"],
    Box: _menu_dropdown["default"]
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});