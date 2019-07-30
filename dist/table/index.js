(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./table", "./head", "./body", "./tr", "./td", "./th", "./label"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./table"), require("./head"), require("./body"), require("./tr"), require("./td"), require("./th"), require("./label"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.table, global.head, global.body, global.tr, global.td, global.th, global.label);
    global.index = mod.exports;
  }
})(this, function (_exports, _table, _head, _body, _tr, _td, _th, _label) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _table = _interopRequireDefault(_table);
  _head = _interopRequireDefault(_head);
  _body = _interopRequireDefault(_body);
  _tr = _interopRequireDefault(_tr);
  _td = _interopRequireDefault(_td);
  _th = _interopRequireDefault(_th);
  _label = _interopRequireDefault(_label);
  _table["default"].Head = _head["default"];
  _table["default"].Body = _body["default"];
  _table["default"].Tr = _tr["default"];
  _table["default"].Td = _td["default"];
  _table["default"].Th = _th["default"];
  _table["default"].Label = _label["default"];
  var _default = _table["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});