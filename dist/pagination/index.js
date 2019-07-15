(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./pagination", "./page", "./size"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./pagination"), require("./page"), require("./size"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.pagination, global.page, global.size);
    global.index = mod.exports;
  }
})(this, function (_exports, _pagination, _page, _size) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _pagination = _interopRequireDefault(_pagination);
  _page = _interopRequireDefault(_page);
  _size = _interopRequireDefault(_size);
  _pagination["default"].Page = _page["default"];
  _pagination["default"].Size = _size["default"];
  var _default = _pagination["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});