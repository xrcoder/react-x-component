'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var placeholder = props.placeholder,
        value = props.value,
        className = props.className,
        size = props.size;

    return _react2.default.createElement(
        _group2.default,
        { className: (0, _classnames2.default)(className) },
        _react2.default.createElement(_input2.default, { size: size, placeholder: placeholder, value: value }),
        _react2.default.createElement(
            'div',
            { className: 'group-addon-right' },
            props.render()
        )
    );
};

module.exports = exports['default'];