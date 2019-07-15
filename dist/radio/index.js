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
    global.index = mod.exports;
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

    var onSelected = function onSelected(res, fn) {
      setData(res.value);
      fn(res);
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

  function Item(_ref) {
    var data = _ref.data,
        selected = _ref.selected,
        onSelected = _ref.onSelected;
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('item', {
        selected: selected === data.value
      }, {
        disabled: data.disabled
      }),
      onClick: function onClick() {
        !data.disabled && onSelected(data);
      }
    }, _react["default"].createElement("span", {
      className: "icon"
    }), _react["default"].createElement("span", {
      className: "name"
    }, data.label));
  }

  function Radio(props) {
    var className = props.className,
        style = props.style,
        data = props.data,
        selected = props.selected,
        onChange = props.onChange;
    var oList = useRadioList(data.slice(0));
    var oData = useRadioData(selected);
    (0, _react.useEffect)(function () {
      oList.updateData(data);
    }, [data]);
    (0, _react.useEffect)(function () {
      oData.updateData(selected);
    }, [selected]);
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-radio', className),
      style: style
    }, oList.list.map(function (item) {
      return _react["default"].createElement(Item, {
        key: item.value,
        data: item,
        selected: oData.data,
        onSelected: function onSelected(res) {
          oData.onSelected(res, onChange);
        }
      });
    }));
  }

  Radio.propTypes = {
    className: _propTypes["default"].string,
    data: _propTypes["default"].array,
    style: _propTypes["default"].object,
    onChange: _propTypes["default"].func
  };
  Radio.defaultProps = {
    className: '',
    data: [],
    style: null,
    onChange: function onChange() {}
  };
  var _default = Radio;
  _exports["default"] = _default;
  module.exports = exports.default;
});