'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XTooltip = function (_React$Component) {
    _inherits(XTooltip, _React$Component);

    function XTooltip(props) {
        _classCallCheck(this, XTooltip);

        var _this = _possibleConstructorReturn(this, (XTooltip.__proto__ || Object.getPrototypeOf(XTooltip)).call(this, props));

        _this.state = {
            position: _this.props.position || 'right',
            content: _this.props.content
        };
        return _this;
    }

    _createClass(XTooltip, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'x-tooltip ' + this.props.className },
                _react2.default.createElement(
                    'span',
                    { className: 'top' },
                    this.props.children
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'box box-' + this.props.position },
                    this.state.content
                )
            );
        }
    }]);

    return XTooltip;
}(_react2.default.Component);

XTooltip.propTypes = {
    position: _propTypes2.default.oneOf(['top', 'left', 'right', 'bottom'])
};
XTooltip.defaultProps = {
    position: 'right'
};
exports.default = XTooltip;
module.exports = exports['default'];