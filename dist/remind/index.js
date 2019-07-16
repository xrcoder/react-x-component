(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./loading"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./loading"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.loading);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _loading) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _loading = _interopRequireDefault(_loading);

  function Remind() {
    return null;
  }

  Remind.Loading = _loading["default"];
  var _default = Remind;
  _exports["default"] = _default;
  module.exports = exports.default;
});