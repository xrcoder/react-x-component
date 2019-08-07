(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "prop-types", "classnames", "../util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("classnames"), require("../util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._typeof, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.propTypes, global.classnames, global.util);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _react, _propTypes, _classnames, _util) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
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
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(Header).apply(this, arguments));
    }

    (0, _createClass2["default"])(Header, [{
      key: "render",
      value: function render() {
        return (0, _core.jsx)("div", {
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
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(Body).apply(this, arguments));
    }

    (0, _createClass2["default"])(Body, [{
      key: "render",
      value: function render() {
        return (0, _core.jsx)("div", {
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
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(Footer).apply(this, arguments));
    }

    (0, _createClass2["default"])(Footer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            align = _this$props.align,
            style = _this$props.style,
            className = _this$props.className,
            children = _this$props.children;
        return (0, _core.jsx)("div", {
          className: (0, _classnames["default"])('x-box-footer', className),
          style: style
        }, children);
      }
    }]);
    return Footer;
  }(_react["default"].Component);

  Footer.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object
  };
  Footer.defaultProps = {
    className: '',
    style: null
  };

  var _default =
  /*#__PURE__*/
  function (_React$Component4) {
    (0, _inherits2["default"])(_default, _React$Component4);

    function _default() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, _default);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.childType = ['Header', 'Body', 'Footer'];
      return _this;
    }

    (0, _createClass2["default"])(_default, [{
      key: "render",
      value: function render() {
        var t = this;
        var _t$props = t.props,
            children = _t$props.children,
            className = _t$props.className;
        return (0, _core.jsx)("div", {
          className: (0, _classnames["default"])('x-box', className)
        }, _react["default"].Children.map(children, function (child) {
          if ((0, _typeof2["default"])(child) !== 'object' || !t.childType.includes((0, _util.getFuncName)(child.type))) {
            console.warn("Box\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662F".concat(t.childType.toString(), "\u7EC4\u4EF6\u7C7B\u578B"));
            return null;
          } else {
            return (0, _core.jsx)(child.type, child.props);
          }
        }));
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