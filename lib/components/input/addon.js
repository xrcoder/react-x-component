'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inner(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_input2.default, props),
        _react2.default.createElement(
            'div',
            { className: 'group-addon-right' },
            props.render()
        )
    );
}

exports.default = function (props) {
    var className = props.className,
        style = props.style;

    return _react2.default.createElement(
        _group2.default,
        { className: (0, _classnames2.default)('x-input-group-addon', className), style: style },
        _react2.default.createElement(Inner, _extends({}, props, { className: null, style: null }))
    );
};

module.exports = exports['default'];