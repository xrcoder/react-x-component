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

var XTabs = function (_Component) {
    _inherits(XTabs, _Component);

    function XTabs() {
        _classCallCheck(this, XTabs);

        return _possibleConstructorReturn(this, (XTabs.__proto__ || Object.getPrototypeOf(XTabs)).apply(this, arguments));
    }

    _createClass(XTabs, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var len = this.props.tabList.length;
            return _react2.default.createElement(
                'div',
                { className: 'x-tabs-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'x-tabs' },
                    this.props.tabList.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: item.label + index, className: 'x-tab-li ' + (item.value == _this2.props.activeTabValue ? 'active-tab' : null) + ' ' + (item.disable == true ? 'tab-disable' : null), onClick: function onClick(e) {
                                    if (item.disable == true) {
                                        return;
                                    }
                                    if (len > 5) {
                                        if (index > 2 && index < len - 2) {
                                            e.target.parentNode.style.left = -1.2 * (index - 2) + 'rem';
                                        } else if (index <= 2) {
                                            e.target.parentNode.style.left = 0;
                                        } else if (index >= len - 2) {
                                            e.target.parentNode.style.right = 0;
                                        }
                                    }
                                    _this2.setState({
                                        activeTabValue: item.value
                                    });
                                    _this2.props.onChange(item);
                                } },
                            item.label
                        );
                    })
                )
            );
        }
    }]);

    return XTabs;
}(_react.Component);

XTabs.propTypes = {
    tabList: _propTypes2.default.array
};
exports.default = XTabs;
module.exports = exports['default'];