(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../button", "./use"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../button"), require("./use"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.button, global.use);
    global.btn = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _button, _use) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function Btn(props) {
    var className = props.className,
        style = props.style,
        _props$type = props.type,
        type = _props$type === void 0 ? 'primary' : _props$type,
        inverse = props.inverse,
        size = props.size,
        label = props.label,
        value = props.value,
        disabled = props.disabled,
        onChange = props.onChange;
    var oValue = (0, _use.useValue)(value);
    var oDisabled = (0, _use.useDisabled)(disabled);
    (0, _react.useEffect)(function () {
      oValue.updateValue(value);
    }, [value]);
    (0, _react.useEffect)(function () {
      oDisabled.updateValue(disabled);
    }, [disabled]);
    return _react["default"].createElement(_button.Button, {
      style: style,
      type: type,
      disabled: oDisabled.value,
      inverse: inverse ? oValue.value : !oValue.value,
      size: size,
      className: className,
      onClick: function onClick(e) {
        if (disabled || oValue.value) {
          return;
        }

        var v = !oValue.value;
        oValue.updateValue(v);
        onChange(e, v);
      }
    }, label);
  }

  Btn.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    label: _propTypes["default"].string,
    inverse: _propTypes["default"].bool,
    value: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  };
  Btn.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    inverse: true,
    disabled: false,
    onChange: function onChange() {}
  };
  var _default = Btn;
  _exports["default"] = _default;
  module.exports = exports.default;
});