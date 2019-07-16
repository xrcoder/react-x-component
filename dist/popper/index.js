(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "rc-tooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("rc-tooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.rcTooltip);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _rcTooltip) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _rcTooltip = _interopRequireDefault(_rcTooltip);

  function Popper(props) {
    var placement = props.placement,
        content = props.content,
        trigger = props.trigger,
        overlayClassName = props.overlayClassName,
        mouseEnterDelay = props.mouseEnterDelay,
        mouseLeaveDelay = props.mouseLeaveDelay,
        overlayStyle = props.overlayStyle,
        onVisibleChange = props.onVisibleChange;
    return _react["default"].createElement(_rcTooltip["default"], {
      overlayClassName: overlayClassName,
      placement: placement,
      trigger: trigger,
      overlay: content,
      mouseLeaveDelay: mouseLeaveDelay,
      mouseEnterDelay: mouseEnterDelay,
      overlayStyle: overlayStyle,
      onVisibleChange: onVisibleChange,
      prefixCls: 'x-popper'
    }, props.children);
  }

  var _default = Popper;
  _exports["default"] = _default;
  module.exports = exports.default;
});