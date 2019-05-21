'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTransitionGroup = require('react-transition-group');

var _notice = require('./notice');

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_React$Component) {
    _inherits(Notification, _React$Component);

    function Notification() {
        _classCallCheck(this, Notification);

        var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

        _this.transitionTime = 500;
        _this.state = {
            notices: []
        };
        _this.removeNotice = _this.removeNotice.bind(_this);
        return _this;
    }

    _createClass(Notification, [{
        key: 'getNoticeKey',
        value: function getNoticeKey() {
            var notices = this.state.notices;

            return 'notice-key-' + new Date().getTime() + '-' + notices.length;
        }
    }, {
        key: 'addNotice',
        value: function addNotice(notice) {
            var _this2 = this;

            var notices = this.state.notices;

            notice.key = this.getNoticeKey();
            if (notices.every(function (item) {
                return item.key !== notice.key;
            })) {
                if (notice.length > 0 && notices[notice.length - 1].type === 'loading') {
                    notices.push(notice);
                    setTimeout(function () {
                        _this2.setState({ notices: notices });
                    }, this.transitionTime);
                } else {
                    notices.push(notice);
                    this.setState({ notices: notices });
                }
                if (notice.duration > 0) {
                    setTimeout(function () {
                        _this2.removeNotice(notice.key);
                    }, notice.duration);
                }
            }
            return function () {
                _this2.removeNotice(notice.key);
            };
        }
    }, {
        key: 'removeNotice',
        value: function removeNotice(key) {
            var _this3 = this;

            var notices = this.state.notices;

            this.setState({
                notices: notices.filter(function (notice) {
                    // 筛选
                    if (notice.key === key) {
                        if (notice.onClose) {
                            setTimeout(notice.onClose, _this3.transitionTime);
                        }
                        return false;
                    }
                    return true;
                })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var notices = this.state.notices;

            return _react2.default.createElement(
                _reactTransitionGroup.TransitionGroup,
                { className: "x-toast-notification" },
                notices.map(function (data, index) {
                    return _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            key: data.key,
                            classNames: "toast-notice",
                            timeout: _this4.transitionTime
                        },
                        _react2.default.createElement(_notice2.default, { type: data.type, msg: data.msg })
                    );
                })
            );
        }
    }]);

    return Notification;
}(_react2.default.Component);

function createNotification() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var ref = _react2.default.createRef();
    _reactDom2.default.render(_react2.default.createElement(Notification, { ref: ref }), div);
    return {
        addNotice: function addNotice(notice) {
            return ref.current.addNotice(notice);
        },
        destroy: function destroy() {
            _reactDom2.default.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
}

exports.default = createNotification();
module.exports = exports['default'];