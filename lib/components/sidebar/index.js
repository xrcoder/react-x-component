'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menuItem = require('./menu-item');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuTree = require('./menu-tree');

var _menuTree2 = _interopRequireDefault(_menuTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import './index.scss'


var _default = function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                menuList = _props.menuList,
                defaultId = _props.defaultId;

            return _react2.default.createElement(
                'aside',
                { className: 'x-sidebar' },
                _react2.default.createElement(
                    'ul',
                    { className: 'x-sidebar-menu' },
                    menuList.map(function (item) {
                        return item.children && item.children.length === 0 ? _react2.default.createElement(_menuItem2.default, { defaultId: defaultId, data: item, key: item.id, onClick: function onClick(data) {
                                _this2.props.onClick(data);
                            } }) : _react2.default.createElement(_menuTree2.default, { data: item, key: item.id, onClick: function onClick(data) {
                                _this2.props.onClick(data);
                            } });
                    })
                )
            );
        }
    }]);

    return _default;
}(_react2.default.Component);

_default.propTypes = {
    menuList: _propTypes2.default.array,
    onClick: _propTypes2.default.func
};
_default.defaultProps = {
    menuList: [],
    onClick: function onClick() {}
};
exports.default = _default;
module.exports = exports['default'];