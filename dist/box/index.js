(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.propTypes, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _propTypes, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  var Header =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Header, _React$Component);

    function Header() {
      (0, _classCallCheck2["default"])(this, Header);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Header).apply(this, arguments));
    }

    (0, _createClass2["default"])(Header, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])('x-box-header', this.props.className),
          style: this.props.style
        }, this.props.children);
      }
    }]);
    return Header;
  }(_react["default"].Component);

  var Body =
  /*#__PURE__*/
  function (_React$Component2) {
    (0, _inherits2["default"])(Body, _React$Component2);

    function Body() {
      (0, _classCallCheck2["default"])(this, Body);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Body).apply(this, arguments));
    }

    (0, _createClass2["default"])(Body, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])('x-box-body', this.props.className),
          style: this.props.style
        }, this.props.children);
      }
    }]);
    return Body;
  }(_react["default"].Component);

  var Footer =
  /*#__PURE__*/
  function (_React$Component3) {
    (0, _inherits2["default"])(Footer, _React$Component3);

    function Footer() {
      (0, _classCallCheck2["default"])(this, Footer);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Footer).apply(this, arguments));
    }

    (0, _createClass2["default"])(Footer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            align = _this$props.align,
            style = _this$props.style,
            className = _this$props.className,
            children = _this$props.children;
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])('x-box-footer', "x-box-footer-".concat(align), className),
          style: style
        }, children);
      }
    }]);
    return Footer;
  }(_react["default"].Component);

  Footer.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    align: _propTypes["default"].oneOf(['left', 'center', 'right'])
  };
  Footer.defaultProps = {
    className: '',
    style: null,
    align: 'right'
  };

  var _default =
  /*#__PURE__*/
  function (_React$Component4) {
    (0, _inherits2["default"])(_default, _React$Component4);

    function _default() {
      (0, _classCallCheck2["default"])(this, _default);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
    }

    (0, _createClass2["default"])(_default, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])('x-box', this.props.className)
        }, this.props.children);
      }
    }]);
    return _default;
  }(_react["default"].Component);

  _exports["default"] = _default;
  _default.propTypes = {
    className: _propTypes["default"].string,
    type: _propTypes["default"].oneOf(['default', 'primary', 'danger', 'info', 'warning'])
  };
  _default.defaultProps = {
    className: '',
    type: 'default'
  };
  _default.Header = Header;
  _default.Body = Body;
  _default.Footer = Footer;
  module.exports = exports.default;
});