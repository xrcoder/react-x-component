'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var title = _ref.title,
        className = _ref.className,
        children = _ref.children;

    var _class = className || '';

    return _react2.default.createElement(
        'div',
        { className: (localStorage.getItem('direction') == 'right' ? 'x-box-i18n' : 'x-box') + '  ' + _class },
        title && _react2.default.createElement(
            'div',
            { className: 'x-box-header' },
            _react2.default.createElement(
                'span',
                { className: 'x-box-title' },
                title
            )
        ),
        children
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
// import './index.scss';