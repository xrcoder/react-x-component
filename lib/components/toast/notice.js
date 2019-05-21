'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconMap = {
    'info': 'toast_info',
    'success': 'alarm',
    'error': 'close-b',
    'warning': 'alarm'
};

exports.default = function (_ref) {
    var type = _ref.type,
        msg = _ref.msg;

    return _react2.default.createElement(
        'div',
        { className: 'x-toast-notice' },
        _react2.default.createElement(
            'div',
            { className: 'x-toast-icon-box ' + type },
            _react2.default.createElement(_icon2.default, { type: iconMap['' + type] })
        ),
        _react2.default.createElement(
            'div',
            { className: 'x-toast-notice-content' },
            msg
        )
    );
};

module.exports = exports['default'];