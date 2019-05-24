'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XRadio = function (_Component) {
    _inherits(XRadio, _Component);

    function XRadio(props) {
        _classCallCheck(this, XRadio);

        var _this = _possibleConstructorReturn(this, (XRadio.__proto__ || Object.getPrototypeOf(XRadio)).call(this, props));

        _this.state = {
            activeRadioValue: props.activeRadioValue || props.radioList[0].value
        };
        return _this;
    }

    _createClass(XRadio, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-radio' },
                this.props.radioList.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: item.label + index, className: 'x-radio-li ' + (item.value == _this2.state.activeRadioValue ? 'active-radio' : null) + ' ' + (item.disable == true ? 'radio-disable' : null), onClick: function onClick() {
                                if (item.disable == true) {
                                    return;
                                }
                                if (_this2.props.cancel == true) {
                                    if (item.value == _this2.state.activeRadioValue) {
                                        _this2.setState({
                                            activeRadioValue: -1
                                        });
                                    } else {
                                        _this2.setState({
                                            activeRadioValue: item.value
                                        });
                                    }
                                } else {
                                    _this2.setState({
                                        activeRadioValue: item.value
                                    });
                                }

                                _this2.props.onChange(item);
                            } },
                        _this2.state.activeRadioValue == item.value ? _react2.default.createElement(_icon2.default, { type: 'radio-selected' }) : _react2.default.createElement(_icon2.default, { type: 'radio' }),
                        item.label
                    );
                })
            );
        }
    }]);

    return XRadio;
}(_react.Component);

XRadio.propTypes = {
    radioList: _propTypes2.default.array
};
exports.default = XRadio;
module.exports = exports['default'];