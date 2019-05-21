'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XIcon = function XIcon(props) {
    return _react2.default.createElement('i', { className: (0, _classnames2.default)('xicon', 'xicon-' + props.type, props.className), onClick: function onClick(e) {
            props.onClick && props.onClick(e);
        } });
};

exports.default = XIcon;
module.exports = exports['default'];