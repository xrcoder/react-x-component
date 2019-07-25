(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./radio", "./item"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./radio"), require("./item"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.radio, global.item);
    global.index = mod.exports;
  }
})(this, function (_exports, _radio, _item) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _radio = _interopRequireDefault(_radio);
  _item = _interopRequireDefault(_item);
  _radio["default"].Item = _item["default"];
  var _default = _radio["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});