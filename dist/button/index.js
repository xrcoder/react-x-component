(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _classnames) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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
  _react = _interopRequireWildcard(_react);
  _classnames = _interopRequireDefault(_classnames);

  var _default =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(_default, _Component);

    function _default() {
      (0, _classCallCheck2["default"])(this, _default);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
    }

    (0, _createClass2["default"])(_default, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            style = _this$props.style,
            _onClick = _this$props.onClick,
            disabled = _this$props.disabled;
        var btnClass = (0, _classnames["default"])({
          'x-btn': true,
          'x-btn-primary': this.props.type === 'primary',
          'x-btn-danger': this.props.type === 'danger',
          'x-btn-lg': this.props.size === 'lg',
          'x-btn-sm': this.props.size === 'sm',
          'x-btn-inverse': this.props.inverse
        }, className);
        return _react["default"].createElement("button", {
          style: style,
          className: btnClass,
          disabled: disabled,
          onClick: function onClick(e) {
            _onClick && _onClick(e);
          }
        }, this.props.children);
      }
    }]);
    return _default;
  }(_react.Component);

  _exports["default"] = _default;
  module.exports = exports.default;
});