(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./input", "./addon", "./clear", "./group", "./reg", "./passwd", "./phone", "./textarea", "./search"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./input"), require("./addon"), require("./clear"), require("./group"), require("./reg"), require("./passwd"), require("./phone"), require("./textarea"), require("./search"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.input, global.addon, global.clear, global.group, global.reg, global.passwd, global.phone, global.textarea, global.search);
    global.index = mod.exports;
  }
})(this, function (_exports, _input, _addon, _clear, _group, _reg, _passwd, _phone, _textarea, _search) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _input = _interopRequireDefault(_input);
  _addon = _interopRequireDefault(_addon);
  _clear = _interopRequireDefault(_clear);
  _group = _interopRequireDefault(_group);
  _reg = _interopRequireDefault(_reg);
  _passwd = _interopRequireDefault(_passwd);
  _phone = _interopRequireDefault(_phone);
  _textarea = _interopRequireDefault(_textarea);
  _search = _interopRequireDefault(_search);
  _input["default"].Addon = _addon["default"];
  _input["default"].Group = _group["default"];
  _input["default"].Clear = _clear["default"];
  _input["default"].Reg = _reg["default"];
  _input["default"].Passwd = _passwd["default"];
  _input["default"].Phone = _phone["default"];
  _input["default"].Textarea = _textarea["default"];
  _input["default"].Search = _search["default"];
  var _default = _input["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});