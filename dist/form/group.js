(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toArray", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/toArray"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.toArray, global.slicedToArray, global.react, global.classnames, global.propTypes);
    global.group = mod.exports;
  }
})(this, function (_exports, _extends2, _toArray2, _slicedToArray2, _react, _classnames, _propTypes) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _toArray2 = _interopRequireDefault(_toArray2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function useErrorMsg(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        msg = _useState2[0],
        setMsg = _useState2[1];

    var updateMsg = function updateMsg(value) {
      setMsg(value);
    };

    return {
      msg: msg,
      updateMsg: updateMsg
    };
  }

  function Group(props) {
    var horizontal = props.horizontal,
        className = props.className,
        errorMsg = props.errorMsg,
        children = props.children,
        required = props.required;

    var _React$Children$map = _react["default"].Children.map(children, function (child) {
      return child;
    }),
        _React$Children$map2 = (0, _toArray2["default"])(_React$Children$map),
        Name = _React$Children$map2[0],
        Input = _React$Children$map2[1],
        Child = _React$Children$map2.slice(2);

    var oMsg = useErrorMsg(errorMsg);
    (0, _react.useEffect)(function () {
      oMsg.updateMsg(errorMsg);
    }, [errorMsg]);
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-form-group', {
        'x-form-group-horizontal': horizontal
      }, className)
    }, Name && _react["default"].createElement(Name.type, (0, _extends2["default"])({}, Name.props, {
      required: required
    })), Input && _react["default"].createElement(Input.type, (0, _extends2["default"])({}, Input.props, {
      error: Boolean(oMsg.msg)
    })), Child, oMsg.msg && _react["default"].createElement("span", {
      className: "x-form-group-tips"
    }, oMsg.msg));
  }

  Group.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    errorMsg: _propTypes["default"].string
  };
  Group.defaultProps = {
    className: '',
    style: null,
    errorMsg: ''
  };
  var _default = Group;
  _exports["default"] = _default;
  module.exports = exports.default;
});