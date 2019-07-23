(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./button", "./group"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./button"), require("./group"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button, global.group);
    global.index = mod.exports;
  }
})(this, function (_exports, _button, _group) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Button", {
    enumerable: true,
    get: function get() {
      return _button["default"];
    }
  });
  Object.defineProperty(_exports, "ButtonGroup", {
    enumerable: true,
    get: function get() {
      return _group["default"];
    }
  });
  _button = _interopRequireDefault(_button);
  _group = _interopRequireDefault(_group);
});