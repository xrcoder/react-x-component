(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "classnames", "../select"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("classnames"), require("../select"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.propTypes, global.classnames, global.select);
    global.size = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _propTypes, _classnames, _select) {
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
  _select = _interopRequireDefault(_select);

  var Size = function Size(props) {
    var pageSize = props.pageSize,
        count = props.count,
        className = props.className,
        pageSizeOpt = props.pageSizeOpt;

    var _useState = (0, _react.useState)(pageSize),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _pageSize = _useState2[0],
        setPageSize = _useState2[1];

    var _useState3 = (0, _react.useState)(count),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        _count = _useState4[0],
        setCount = _useState4[1];

    (0, _react.useEffect)(function () {
      if (count !== null && count !== 0) {
        var count1 = parseInt(count);
        setCount(count1);
      } else {
        setCount(0);
      }
    }, [count]);
    (0, _react.useEffect)(function () {
      setPageSize(pageSize);
    }, [pageSize]);

    var onPageSizeChange = function onPageSizeChange(pageSize) {
      setPageSize(pageSize);
      props.onPageSizeChange && props.onPageSizeChange(pageSize);
    };

    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-pagination-size', className)
    }, _react["default"].createElement("div", {
      className: "x-pagination-size-count"
    }, "\u5171 ", count, " \u6761"), _react["default"].createElement("div", {
      className: "x-pagination-size-select"
    }, _react["default"].createElement(_select["default"], {
      selectedValue: _pageSize,
      options: pageSizeOpt,
      size: "md",
      onChange: function onChange(res) {
        onPageSizeChange(res.value);
      }
    })), _react["default"].createElement("span", null, "\u6761/\u9875"));
  };

  var _default = Size;
  _exports["default"] = _default;
  Size.callerpropTypes = {
    pageSize: _propTypes["default"].number,
    className: _propTypes["default"].string,
    onPageSizeChange: _propTypes["default"].func,
    pageSizeOpt: _propTypes["default"].array
  };
  Size.defaultProps = {
    pageSize: 10,
    className: '',
    pageSizeOpt: [{
      value: 5,
      label: 5
    }, {
      value: 10,
      label: 10
    }, {
      value: 30,
      label: 30
    }, {
      value: 50,
      label: 50
    }]
  };
  module.exports = exports.default;
});