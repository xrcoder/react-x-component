'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _loadlocales = require('../locales/loadlocales');

var _loadlocales2 = _interopRequireDefault(_loadlocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XInput = function (_React$Component) {
    _inherits(XInput, _React$Component);

    function XInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, XInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XInput.__proto__ || Object.getPrototypeOf(XInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            initDone: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(XInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (window.localStorage.getItem('isStoragelocale')) {
                this.setState({ initDone: window.localStorage.getItem('initDone') });
            } else {
                (0, _loadlocales2.default)(this.props.locale).then(function () {
                    _this2.setState({ initDone: true });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                isError = _props.isError,
                size = _props.size,
                placeholder = _props.placeholder,
                className = _props.className,
                _onChange = _props.onChange,
                onEnter = _props.onEnter,
                _onFocus = _props.onFocus,
                _onBlur = _props.onBlur,
                disabled = _props.disabled,
                icon = _props.icon,
                search = _props.search,
                searchBtn = _props.searchBtn,
                otherProps = _objectWithoutProperties(_props, ['isError', 'size', 'placeholder', 'className', 'onChange', 'onEnter', 'onFocus', 'onBlur', 'disabled', 'icon', 'search', 'searchBtn']);

            return this.state.initDone !== false && _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('x-input-container', className) },
                _react2.default.createElement('input', _extends({}, otherProps, {
                    className: (0, _classnames2.default)('x-input', '' + size, { disabled: disabled }, { danger: isError }),
                    disabled: disabled,
                    placeholder: placeholder || _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_GLOBAL_INPUTPLACEHOLDER').d('\u8BF7\u8F93\u5165'),
                    onChange: function onChange(e) {
                        _onChange(e.target.value, e);
                    },
                    onFocus: function onFocus() {
                        _onFocus();
                    },
                    onBlur: function onBlur() {
                        _onBlur();
                    },
                    onKeyDown: function onKeyDown(e) {
                        var keyCode = e.keyCode;
                        if (keyCode === 13) {
                            onEnter(e.target.value);
                        }
                    }
                })),
                search ? _react2.default.createElement(
                    'div',
                    { className: 'search-btn', onClick: function onClick() {
                            onEnter(_this3.value);
                        } },
                    searchBtn ? searchBtn : _react2.default.createElement(_icon2.default, { onClick: function onClick() {
                            onEnter(_this3.value);
                        }, type: 'search' })
                ) : icon && _react2.default.createElement(_icon2.default, { type: icon })
            );
        }
    }]);

    return XInput;
}(_react2.default.Component);

XInput.propTypes = {
    isError: _propTypes2.default.bool,
    size: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onEnter: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    locale: _propTypes2.default.string
};
XInput.defaultProps = {
    isError: false,
    size: 'md',
    placeholder: '',
    locale: 'zh_CN',
    onChange: function onChange() {},
    onEnter: function onEnter() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
};
exports.default = XInput;
module.exports = exports['default'];