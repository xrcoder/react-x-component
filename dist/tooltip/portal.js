(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "prop-types", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.propTypes, global.reactDom);
    global.portal = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _propTypes, _reactDom) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.isBrowser = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _reactDom = _interopRequireDefault(_reactDom);
  var useCreatePortal = typeof _reactDom["default"].createPortal === 'function';
  var isBrowser = typeof window !== 'undefined';
  _exports.isBrowser = isBrowser;

  var Portal =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Portal, _React$Component);

    function Portal(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Portal);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Portal).call(this, props));

      if (isBrowser) {
        _this.container = document.createElement('div');
        document.body.appendChild(_this.container);

        _this.renderLayer();
      }

      return _this;
    }

    (0, _createClass2["default"])(Portal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.renderLayer();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!useCreatePortal) {
          _reactDom["default"].unmountComponentAtNode(this.container);
        }

        document.body.removeChild(this.container);
      }
    }, {
      key: "renderLayer",
      value: function renderLayer() {
        if (!useCreatePortal) {
          _reactDom["default"].unstable_renderSubtreeIntoContainer(this, this.props.children, this.container);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (useCreatePortal) {
          return _reactDom["default"].createPortal(this.props.children, this.container);
        }

        return null;
      }
    }]);
    return Portal;
  }(_react["default"].Component);

  Portal.propTypes = {
    children: _propTypes["default"].node.isRequired
  };
  var _default = Portal;
  _exports["default"] = _default;
});