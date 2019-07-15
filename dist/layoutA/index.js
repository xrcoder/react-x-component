(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "classnames", "./header", "./sider", "./content", "./container", "./footer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("classnames"), require("./header"), require("./sider"), require("./content"), require("./container"), require("./footer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.classnames, global.header, global.sider, global.content, global.container, global.footer);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _classnames, _header, _sider, _content, _container, _footer) {
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
  _header = _interopRequireDefault(_header);
  _sider = _interopRequireDefault(_sider);
  _content = _interopRequireDefault(_content);
  _container = _interopRequireDefault(_container);
  _footer = _interopRequireDefault(_footer);

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
        return _react["default"].createElement("section", {
          className: (0, _classnames["default"])('x-a-layout', this.props.className)
        }, this.props.children);
      }
    }]);
    return _default;
  }(_react.Component);

  _exports["default"] = _default;
  _default.Header = _header["default"];
  _default.Sider = _sider["default"];
  _default.Content = _content["default"];
  _default.Container = _container["default"];
  _default.Footer = _footer["default"];
  module.exports = exports.default;
});