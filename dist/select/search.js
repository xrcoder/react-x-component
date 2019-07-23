(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "./single"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/objectWithoutProperties"), require("react"), require("classnames"), require("./single"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.objectWithoutProperties, global.react, global.classnames, global.single);
    global.search = mod.exports;
  }
})(this, function (_exports, _extends2, _objectWithoutProperties2, _react, _classnames, _single) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _objectWithoutProperties2 = _interopRequireDefault(_objectWithoutProperties2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _single = _interopRequireDefault(_single);

  function ClearIndicator(props) {
    var getStyles = props.getStyles,
        _props$innerProps = props.innerProps,
        ref = _props$innerProps.ref,
        restInnerProps = (0, _objectWithoutProperties2["default"])(_props$innerProps, ["ref"]);
    return _react["default"].createElement("div", (0, _extends2["default"])({}, restInnerProps, {
      ref: ref,
      style: getStyles('clearIndicator', props)
    }), _react["default"].createElement("div", null, "clear"));
  }

  function SelectSearch(props) {
    return _react["default"].createElement(_single["default"], (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('x-select-search', props.className),
      isSearchable: true,
      isClearable: true
    }));
  }

  var _default = SelectSearch;
  _exports["default"] = _default;
  module.exports = exports.default;
});