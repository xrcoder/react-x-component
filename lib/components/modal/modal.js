'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        var Modal = function (_React$Component) {
            _inherits(Modal, _React$Component);

            function Modal(props) {
                _classCallCheck(this, Modal);

                var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

                _this.state = {
                    className: ''
                };
                _this.timer = null;
                return _this;
            }

            _createClass(Modal, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    this.timer = window.setTimeout(function () {
                        _this2.setState({
                            className: 'x-modal-fade'
                        });
                    }, 50);
                }
            }, {
                key: 'confirm',
                value: function confirm() {
                    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

                    this.close();
                    resolve(res);
                }
            }, {
                key: 'cancel',
                value: function cancel() {
                    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cancel';

                    this.close();
                    reject(res);
                }
            }, {
                key: 'close',
                value: function close() {
                    _reactDom2.default.unmountComponentAtNode(_Modal);
                    CONTAINER.removeChild(_Modal);
                    clearTimeout(this.timer);
                    this.timer = null;
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this3 = this;

                    var className = this.state.className;
                    var data = _opt.data,
                        size = _opt.size,
                        backDrop = _opt.backDrop;

                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('x-modal', _opt.className, className) },
                        _react2.default.createElement('div', { className: 'x-modal-bg', onClick: function onClick() {
                                backDrop && _this3.cancel();
                            } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'x-modal-content x-modal-' + size },
                            _react2.default.createElement(C, { confirm: this.confirm.bind(this), cancel: this.cancel.bind(this), data: _opt.data })
                        )
                    );
                }
            }]);

            return Modal;
        }(_react2.default.Component);

        return _reactDom2.default.createPortal(_reactDom2.default.render(_react2.default.createElement(Modal, null), _Modal), _Modal);
    });
};

exports.default = Modal;
module.exports = exports['default'];