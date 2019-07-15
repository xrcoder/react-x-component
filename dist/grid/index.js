(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Row = Row;
  _exports.Col = Col;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  function Row(_ref) {
    var children = _ref.children,
        className = _ref.className,
        style = _ref.style;
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-row', className),
      style: style
    }, children);
  }

  function Col(_ref2) {
    var children = _ref2.children,
        sm = _ref2.sm,
        md = _ref2.md,
        lg = _ref2.lg,
        className = _ref2.className,
        style = _ref2.style;

    var _sm = sm ? "col-sm-".concat(sm) : '',
        _md = md ? "col-md-".concat(md) : '',
        _lg = lg ? "col-lg-".concat(lg) : '';

    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])(_sm, _md, _lg, className),
      style: style
    }, children);
  }

  Row.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object
  };
  Row.defaultProps = {
    className: '',
    style: null
  };
  Col.propTypes = {
    className: _propTypes["default"].string,
    sm: _propTypes["default"].number,
    md: _propTypes["default"].number,
    lg: _propTypes["default"].number,
    style: _propTypes["default"].object
  };
  Col.defauleProps = {
    className: '',
    sm: null,
    md: null,
    lg: null,
    style: null
  };
});