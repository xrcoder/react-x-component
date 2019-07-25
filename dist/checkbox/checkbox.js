(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "classnames", "./item"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("classnames"), require("./item"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.propTypes, global.classnames, global.item);
    global.checkbox = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _propTypes, _classnames, _item) {
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
  _classnames = _interopRequireDefault(_classnames);
  _item = _interopRequireDefault(_item);

  function useCheckList(initialValue) {
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

  function useCheckData(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

    var onSelected = function onSelected(res, fn, e) {
      var selected = data.slice(0);
      var index = selected.indexOf(res.value);

      if (index > -1) {
        selected.splice(index, 1);
      } else {
        selected.push(res.value);
      }

      setData(selected);
      fn(selected, e);
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

  function CheckBox(props) {
    var className = props.className,
        style = props.style,
        options = props.options,
        value = props.value,
        _onChange = props.onChange;
    var oList = useCheckList(options);
    var oData = useCheckData(value);
    (0, _react.useEffect)(function () {
      oList.updateData(options);
    }, [options]);
    (0, _react.useEffect)(function () {
      console.log(value);

      if (value === null) {
        oData.updateData([]);
      } else {
        oData.updateData(value);
      }
    }, [value]);
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-checkbox-group', className),
      style: style
    }, oList.list.map(function (item) {
      var isSelected = oData.data.indexOf(item.value) > -1;
      return _react["default"].createElement(_item["default"], {
        key: item.value,
        label: item.label,
        disabled: item.disabled,
        value: isSelected,
        onChange: function onChange(e, res) {
          oData.onSelected(item, _onChange, e);
        }
      });
    }));
  }

  CheckBox.propTypes = {
    className: _propTypes["default"].string,
    options: _propTypes["default"].array,
    value: _propTypes["default"].array,
    style: _propTypes["default"].object,
    onChange: _propTypes["default"].func
  };
  CheckBox.defaultProps = {
    className: '',
    options: [],
    value: [],
    style: null,
    onChange: function onChange() {}
  };
  var _default = CheckBox;
  _exports["default"] = _default;
  module.exports = exports.default;
});