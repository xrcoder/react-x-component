(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./upload"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./upload"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.upload);
    global.index = mod.exports;
  }
})(this, function (_exports, _upload) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _upload = _interopRequireDefault(_upload);
  var _default = _upload["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});