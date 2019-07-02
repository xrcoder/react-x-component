'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var name = _ref.name,
        _ref$onClick = _ref.onClick,
        _onClick = _ref$onClick === undefined ? null : _ref$onClick,
        className = _ref.className;

    var _name = name ? 'fa-' + name : null;

    return _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', _name, className), onClick: function onClick(e) {
            _onClick && _onClick(e);
        } });
};

module.exports = exports['default'];