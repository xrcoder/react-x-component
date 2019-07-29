(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames", "prop-types", "./use"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"), require("prop-types"), require("./use"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.propTypes, global.use);
    global.item = mod.exports;
  }
})(this, function (_exports, _react, _classnames, _propTypes, _use) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function Item(props) {
    var className = props.className,
        style = props.style,
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
    var cls = (0, _classnames["default"])('x-radio-item', className, {
      'x-radio-item-selected': oValue.value,
      'x-radio-item-disabled': oDisabled.value
    });
    return _react["default"].createElement("div", {
      style: style,
      className: cls,
      onClick: function onClick(e) {
        if (disabled || oValue.value) {
          return;
        }

        var v = !oValue.value;
        oValue.updateValue(v);
        onChange(e, v);
      }
    }, _react["default"].createElement("span", {
      className: "icon"
    }), _react["default"].createElement("span", {
      className: "name"
    }, label));
  }

  Item.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    label: _propTypes["default"].string,
    value: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  };
  Item.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function onChange() {}
  };
  var _default = Item;
  _exports["default"] = _default;
  module.exports = exports.default;
});