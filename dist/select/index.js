(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "classnames", "./single", "./search"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("./single"), require("./search"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.classnames, global.single, global.search);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _classnames, _single, _search) {
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
  _search = _interopRequireDefault(_search);

  function Select() {
    return null;
  }

  Select.Single = function (props) {
    return (0, _core.jsx)(_single["default"], (0, _extends2["default"])({}, props, {
      isSearchable: false
    }));
  };

  Select.Search = _search["default"];

  Select.Multi = function (props) {
    return (0, _core.jsx)(_single["default"], (0, _extends2["default"])({}, props, {
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