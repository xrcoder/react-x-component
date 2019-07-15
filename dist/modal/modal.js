(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "react-dom", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("react-dom"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.reactDom, global.propTypes, global.classnames);
    global.modal = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _reactDom, _propTypes, _classnames) {
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
  _reactDom = _interopRequireDefault(_reactDom);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  var Modal = function Modal(C, opt) {
    var CONTAINER = document.querySelector('body');

    var _Modal = document.createElement('div');

    var _opt = {
      backDrop: false,
      size: 'md',
      className: '',
      data: null
    };
    Object.assign(_opt, opt);
    CONTAINER.appendChild(_Modal);
    return new Promise(function (resolve, reject) {
      var Modal =
      /*#__PURE__*/
      function (_React$Component) {
        (0, _inherits2["default"])(Modal, _React$Component);

        function Modal(props) {
          var _this;

          (0, _classCallCheck2["default"])(this, Modal);
          _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Modal).call(this, props));
          _this.state = {
            className: ''
          };
          _this.timer = null;
          return _this;
        }

        (0, _createClass2["default"])(Modal, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            this.timer = window.setTimeout(function () {
              _this2.setState({
                className: 'x-modal-fade'
              });
            }, 50);
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sucess';
            this.close();
            resolve(res);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cancel';
            this.close();
            reject(res);
          }
        }, {
          key: "close",
          value: function close() {
            _reactDom["default"].unmountComponentAtNode(_Modal);

            CONTAINER.removeChild(_Modal);
            clearTimeout(this.timer);
            this.timer = null;
          }
        }, {
          key: "render",
          value: function render() {
            var _this3 = this;

            var className = this.state.className;
            var data = _opt.data,
                size = _opt.size,
                backDrop = _opt.backDrop;
            return _react["default"].createElement("div", {
              className: (0, _classnames["default"])('x-modal', _opt.className, className)
            }, _react["default"].createElement("div", {
              className: "x-modal-bg",
              onClick: function onClick() {
                backDrop && _this3.cancel();
              }
            }), _react["default"].createElement("div", {
              className: "x-modal-content x-modal-".concat(size)
            }, _react["default"].createElement(C, {
              confirm: this.confirm.bind(this),
              cancel: this.cancel.bind(this),
              data: data
            })));
          }
        }]);
        return Modal;
      }(_react["default"].Component);

      return _reactDom["default"].createPortal(_reactDom["default"].render(_react["default"].createElement(Modal, null), _Modal), _Modal);
    });
  };

  var _default = Modal;
  _exports["default"] = _default;
  module.exports = exports.default;
});