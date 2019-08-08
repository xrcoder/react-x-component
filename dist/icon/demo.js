(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck);
    global.demo = mod.exports;
  }
})(this, function (_exports, _classCallCheck2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.C = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);

  var C = function C() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, C);
    this.x = 10;

    this.getX = function () {
      return _this.x;
    };

    this.setX = function (newVal) {
      _this.x = newVal;
    };
  };

  _exports.C = C;
});