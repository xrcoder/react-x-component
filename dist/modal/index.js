(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "./confirm", "./dialog", "./alert", "./header", "./body", "./footer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("./confirm"), require("./dialog"), require("./alert"), require("./header"), require("./body"), require("./footer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.confirm, global.dialog, global.alert, global.header, global.body, global.footer);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _confirm, _dialog, _alert, _header, _body, _footer) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _confirm = _interopRequireDefault(_confirm);
  _dialog = _interopRequireDefault(_dialog);
  _alert = _interopRequireDefault(_alert);
  _header = _interopRequireDefault(_header);
  _body = _interopRequireDefault(_body);
  _footer = _interopRequireDefault(_footer);

  var _default = function _default() {
    (0, _classCallCheck2["default"])(this, _default);
  };

  _exports["default"] = _default;
  _default.Dialog = _dialog["default"];
  _default.Confirm = _confirm["default"];
  _default.Alert = _alert["default"];
  _default.Header = _header["default"];
  _default.Body = _body["default"];
  _default.Footer = _footer["default"];
  module.exports = exports.default;
});