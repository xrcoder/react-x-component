'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reg = require('./reg');

var _reg2 = _interopRequireDefault(_reg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function Phone(props) {

    return _react2.default.createElement(_reg2.default, _extends({}, props, { type: 'text', reg: /^[1]([3-9])[0-9]{9}$/ }));
};

exports.default = Phone;
module.exports = exports['default'];