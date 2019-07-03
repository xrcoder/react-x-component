'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var type = props.type,
        height = props.height;

    return _react2.default.createElement(
        'div',
        { className: type + '-loading ' + (localStorage.getItem('direction') == 'right' ? 'x-loading-i18n' : 'x-loading'), style: { height: '' + height } },
        _react2.default.createElement(
            'div',
            { className: 'loading-box' },
            _react2.default.createElement('span', { className: 'dot dot-1' }),
            _react2.default.createElement('span', { className: 'dot dot-2' }),
            _react2.default.createElement('span', { className: 'dot dot-3' }),
            _react2.default.createElement('span', { className: 'dot dot-4' })
        )
    );
};

module.exports = exports['default'];