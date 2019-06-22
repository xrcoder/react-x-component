'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './index.scss';


var XButtonGroup = function (_Component) {
    _inherits(XButtonGroup, _Component);

    function XButtonGroup(props) {
        var _this;

        _classCallCheck(this, XButtonGroup);

        (_this = _possibleConstructorReturn(this, (XButtonGroup.__proto__ || Object.getPrototypeOf(XButtonGroup)).call(this, props)), _this), _this.state = {
            selectedValue: props.selectedValue
        };
        return _this;
    }

    _createClass(XButtonGroup, [{
        key: 'getIcon',
        value: function getIcon() {
            return this.props.icon ? _react2.default.createElement(_icon.XIcon, { type: '' + this.props.icon }) : null;
        }
    }, {
        key: 'getLoadingIcon',
        value: function getLoadingIcon() {
            return _react2.default.createElement(_icon.XIcon, { type: 'refresh' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var btnClass = (0, _classnames2.default)({
                'x-btn': true,
                'x-btn-primary': this.props.type === 'primary',
                'x-btn-warning': this.props.type === 'warning',
                'x-btn-lg': this.props.size === 'lg',
                'x-btn-sm': this.props.size === 'sm',
                'x-btn-disable': this.props.disabled,
                'x-btn-loading': this.props.loading
            });
            return _react2.default.createElement(
                'ul',
                { className: 'x-buttonGroup' },
                this.props.data.map(function (item) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'x-buttonGroup-li ' + (item.value == _this2.state.selectedValue ? 'x-buttonGroup-li-active' : null), onClick: function onClick() {
                                _this2.setState({
                                    selectedValue: item.value
                                });
                                _this2.props.onChange(item);
                            } },
                        item.label
                    );
                })
            );
        }
    }]);

    return XButtonGroup;
}(_react.Component);

XButtonGroup.propTypes = {
    type: _propTypes2.default.oneOf(['primary', 'default', 'warning']),
    size: _propTypes2.default.oneOf(['lg', 'md', 'sm'])
};
XButtonGroup.defaultProps = {
    type: 'default',
    size: 'md'
};
exports.default = XButtonGroup;
module.exports = exports['default'];