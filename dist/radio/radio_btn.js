(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "prop-types", "./btn", "../button", "./use"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("prop-types"), require("./btn"), require("../button"), require("./use"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.propTypes, global.btn, global.button, global.use);
    global.radio_btn = mod.exports;
  }
})(this, function (_exports, _core, _react, _propTypes, _btn, _button, _use) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _btn = _interopRequireDefault(_btn);

  function Radio(props) {
    var className = props.className,
        style = props.style,
        options = props.options,
        inverse = props.inverse,
        size = props.size,
        type = props.type,
        value = props.value,
        _onChange = props.onChange;
    var oList = (0, _use.useRadioList)(options.slice(0));
    var oValue = (0, _use.useRadioData)(value);
    (0, _react.useEffect)(function () {
      oList.updateData(options.slice(0));
    }, [options]);
    (0, _react.useEffect)(function () {
      if (!value) {
        oValue.updateData({});
      } else {
        oValue.updateData(value);
      }
    }, [value]);
    return (0, _core.jsx)(_button.ButtonGroup, {
      className: className,
      style: style
    }, oList.list.map(function (item) {
      return (0, _core.jsx)(_btn["default"], {
        key: item.value,
        label: item.label,
        inverse: inverse,
        size: size,
        type: type,
        disabled: item.disabled,
        value: item.value === oValue.data.value,
        onChange: function onChange(e) {
          oValue.onSelected(item, _onChange, e);
        }
      });
    }));
  }

  Radio.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    options: _propTypes["default"].array,
    value: _propTypes["default"].object,
    onChange: _propTypes["default"].func
  };
  Radio.defaultProps = {
    className: '',
    style: null,
    options: [],
    value: null,
    onChange: function onChange() {}
  };
  var _default = Radio;
  _exports["default"] = _default;
  module.exports = exports.default;
});