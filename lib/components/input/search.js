'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addon = require('./addon');

var _addon2 = _interopRequireDefault(_addon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var children = props.children,
        onSearch = props.onSearch,
        btnType = props.btnType,
        disabled = props.disabled;

    return _react2.default.createElement(_addon2.default, _extends({}, props, { children: null, onSearch: null, btnType: null, render: function render() {
            return _react2.default.createElement(
                _button2.default,
                { type: btnType, disabled: disabled, onClick: onSearch },
                children
            );
        } }));
};

module.exports = exports['default'];