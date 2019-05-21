'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.scss';

var XMenu = function XMenu(props) {
    var type = props.type,
        menuList = props.menuList;

    return _react2.default.createElement(
        'div',
        { className: 'x-menu' },
        type === 'horizontal' ? _react2.default.createElement(
            'ul',
            { className: 'x-menu-horizontal' },
            menuList.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: item.id,
                        className: location.pathname.indexOf(item.codeName) > -1 ? 'active' : null,
                        onClick: function onClick() {
                            props.onClick(item);
                        } },
                    item.name
                );
            })
        ) : null
    );
};
exports.default = XMenu;


XMenu.propTypes = {
    menuList: _propTypes2.default.array,
    type: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    onClick: _propTypes2.default.func
};

XMenu.defaultProps = {
    menuList: [],
    type: 'vertical',
    onClick: function onClick() {}
};
module.exports = exports['default'];