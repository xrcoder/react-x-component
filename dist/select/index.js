(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "react", "classnames", "./single"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("./single"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react, global.classnames, global.single);
    global.index = mod.exports;
  }
})(this, function (_exports, _extends2, _react, _classnames, _single) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _single = _interopRequireDefault(_single);

  function Select() {
    return null;
  }

  Select.Single = function (props) {
    return _react["default"].createElement(_single["default"], (0, _extends2["default"])({}, props, {
      isSearchable: false
    }));
  };

  Select.Multi = function (props) {
    return _react["default"].createElement(_single["default"], (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('x-select-multi', props.className),
      isMulti: true,
      isSearchable: true,
      isClearable: false
    }));
  };

  var _default = Select;
  _exports["default"] = _default;
  module.exports = exports.default;
});