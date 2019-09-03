(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "../select", "../input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("../select"), require("../input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.select, global.input);
    global.week = mod.exports;
  }
})(this, function (_exports, _core, _react, _select, _input) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _react = _interopRequireDefault(_react);
  _select = _interopRequireDefault(_select);
  _input = _interopRequireDefault(_input);

  function _default(props) {
    var value = props.value,
        options = props.options,
        onChange = props.onChange;
    return (0, _core.jsx)(_input["default"].Group, null, (0, _core.jsx)(_select["default"].Single, {
      value: value,
      options: options,
      onChange: onChange
    }));
  }

  module.exports = exports.default;
});