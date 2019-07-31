(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./loading", "./avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./loading"), require("./avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.loading, global.avatar);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _loading, _avatar) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _loading = _interopRequireDefault(_loading);
  _avatar = _interopRequireDefault(_avatar);

  function Remind() {
    return null;
  }

  Remind.Loading = _loading["default"];
  Remind.Avatar = _avatar["default"];
  var _default = Remind;
  _exports["default"] = _default;
  module.exports = exports.default;
});