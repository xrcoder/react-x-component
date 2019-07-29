(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./radio", "./item", "./btn", "./radio_btn"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./radio"), require("./item"), require("./btn"), require("./radio_btn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.radio, global.item, global.btn, global.radio_btn);
    global.index = mod.exports;
  }
})(this, function (_exports, _radio, _item, _btn, _radio_btn) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _radio = _interopRequireDefault(_radio);
  _item = _interopRequireDefault(_item);
  _btn = _interopRequireDefault(_btn);
  _radio_btn = _interopRequireDefault(_radio_btn);
  _radio["default"].Item = _item["default"];
  _radio["default"].Btn = _btn["default"];
  _radio["default"].BtnGroup = _radio_btn["default"];
  var _default = _radio["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});