(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.classnames, global.propTypes);
    global.item = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _classnames, _propTypes) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function useValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var updateValue = function updateValue(res) {
      setValue(res);
    };

    return {
      value: value,
      updateValue: updateValue
    };
  }

  function useDisabled(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var updateValue = function updateValue(res) {
      setValue(res);
    };

    return {
      value: value,
      updateValue: updateValue
    };
  }

  function Item(props) {
    var className = props.className,
        style = props.style,
        label = props.label,
        value = props.value,
        disabled = props.disabled,
        onChange = props.onChange;
    var oValue = useValue(value);
    var oDisabled = useDisabled(disabled);
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