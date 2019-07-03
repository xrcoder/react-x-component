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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './index.scss';


var XButton = function (_Component) {
    _inherits(XButton, _Component);

    function XButton() {
        _classCallCheck(this, XButton);

        return _possibleConstructorReturn(this, (XButton.__proto__ || Object.getPrototypeOf(XButton)).apply(this, arguments));
    }

    _createClass(XButton, [{
        key: 'getIcon',
        value: function getIcon() {
            return this.props.icon ? _react2.default.createElement(_icon2.default, { type: '' + this.props.icon }) : null;
        }
    }, {
        key: 'getLoadingIcon',
        value: function getLoadingIcon() {
            return _react2.default.createElement(_icon2.default, { type: 'refresh' });
        }
    }, {
        key: 'render',
        value: function render() {
            var btnClass = (0, _classnames2.default)({
                'x-btn': true,
                'x-btn-primary': this.props.type === 'primary',
                'x-btn-warning': this.props.type === 'warning',
                'x-btn-lg': this.props.size === 'lg',
                'x-btn-sm': this.props.size === 'sm',
                'x-btn-disable': this.props.disabled,
                'x-btn-loading': this.props.loading
            });

            return this.props.loading == true ? _react2.default.createElement(
                'button',
                _extends({}, this.props, { className: btnClass }),
                this.getLoadingIcon(),
                this.props.children
            ) : _react2.default.createElement(
                'button',
                _extends({}, this.props, { className: btnClass }),
                this.getIcon(),
                this.props.children
            );
        }
    }]);

    return XButton;
}(_react.Component);

XButton.propTypes = {
    type: _propTypes2.default.oneOf(['primary', 'default', 'warning']),
    size: _propTypes2.default.oneOf(['lg', 'md', 'sm'])
};
XButton.defaultProps = {
    type: 'default',
    size: 'md'
};
exports.default = XButton;
module.exports = exports['default'];