(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./checkbox", "./item", "./half"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./checkbox"), require("./item"), require("./half"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.checkbox, global.item, global.half);
    global.index = mod.exports;
  }
})(this, function (_exports, _checkbox, _item, _half) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _checkbox = _interopRequireDefault(_checkbox);
  _item = _interopRequireDefault(_item);
  _half = _interopRequireDefault(_half);
  _checkbox["default"].Item = _item["default"];
  _checkbox["default"].Half = _half["default"];
  var _default = _checkbox["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});