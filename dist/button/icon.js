(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "./button", "../icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("./button"), require("../icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.propTypes, global.button, global.icon);
    global.icon = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _propTypes, _button, _icon) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _button = _interopRequireDefault(_button);
  _icon = _interopRequireDefault(_icon);

  function ButtonIcon(props) {
    var icon = props.icon,
        children = props.children;

    var _useState = (0, _react.useState)(icon),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        name = _useState2[0],
        setName = _useState2[1];

    (0, _react.useEffect)(function () {
      setName(icon);
    }, [icon]);
    return _react["default"].createElement(_button["default"], props, _react["default"].createElement(_icon["default"], {
      className: 'x-btn-icon',
      name: name
    }), children);
  }

  ButtonIcon.propTypes = {
    icon: _propTypes["default"].string
  };
  ButtonIcon.defaultProps = {
    icon: ''
  };
  var _default = ButtonIcon;
  _exports["default"] = _default;
  module.exports = exports.default;
});