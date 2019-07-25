(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types", "./item"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"), require("./item"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.classnames, global.propTypes, global.item);
    global.radio = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _classnames, _propTypes, _item) {
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
  _item = _interopRequireDefault(_item);

  function useRadioList(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];

    var updateData = function updateData(res) {
      setList(res);
    };

    return {
      list: list,
      updateData: updateData
    };
  }

  function useRadioData() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

    var onSelected = function onSelected(item, fn, e) {
      setData(item);
      fn(item, e);
    };

    var updateData = function updateData(res) {
      setData(res);
    };

    return {
      data: data,
      onSelected: onSelected,
      updateData: updateData
    };
  }

  function Radio(props) {
    var className = props.className,
        style = props.style,
        options = props.options,
        value = props.value,
        _onChange = props.onChange;
    var oList = useRadioList(options.slice(0));
    var oValue = useRadioData(value);
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
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-radio', className),
      style: style
    }, oList.list.map(function (item) {
      return _react["default"].createElement(_item["default"], {
        key: item.value,
        label: item.label,
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