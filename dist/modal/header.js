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
    global.header = mod.exports;
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

  var _default =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(_default, _React$Component);

    function _default() {
      (0, _classCallCheck2["default"])(this, _default);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
    }

    (0, _createClass2["default"])(_default, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])('x-modal-header', this.props.className),
          style: this.props.style
        }, _react["default"].createElement("div", {
          className: "title"
        }, this.props.children), _react["default"].createElement("div", {
          className: "close",
          onClick: this.props.cancel
        }));
      }
    }]);
    return _default;
  }(_react["default"].Component);

  _exports["default"] = _default;
  _default.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object
  };
  _default.defaultProps = {
    className: '',
    style: null
  };
  module.exports = exports.default;
});