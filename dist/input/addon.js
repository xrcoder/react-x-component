(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "classnames", "./input", "./group", "./clear"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("classnames"), require("./input"), require("./group"), require("./clear"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.classnames, global.input, global.group, global.clear);
    global.addon = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _classnames, _input, _group, _clear) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _input = _interopRequireDefault(_input);
  _group = _interopRequireDefault(_group);
  _clear = _interopRequireDefault(_clear);

  function Inner(props) {
    return (0, _core.jsx)(_react["default"].Fragment, null, props.clear ? (0, _core.jsx)(_clear["default"], props) : (0, _core.jsx)(_input["default"], props), (0, _core.jsx)("div", {
      className: "group-addon-right"
    }, props.render()));
  }

  var _default = function _default(props) {
    var className = props.className,
        style = props.style;
    return (0, _core.jsx)(_group["default"], {
      className: (0, _classnames["default"])('x-input-group-addon', className),
      style: style
    }, (0, _core.jsx)(Inner, (0, _extends2["default"])({}, props, {
      className: null,
      style: null
    })));
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});