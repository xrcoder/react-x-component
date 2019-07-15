(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./upload", "./avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./upload"), require("./avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.upload, global.avatar);
    global.index = mod.exports;
  }
})(this, function (_exports, _upload, _avatar) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _upload = _interopRequireDefault(_upload);
  _avatar = _interopRequireDefault(_avatar);
  _upload["default"].Avatar = _avatar["default"];
  var _default = _upload["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});