'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (C) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var _opt = {
        backDrop: opt.backDrop || false,
        size: opt.size || 'md',
        className: (0, _classnames2.default)(opt.className),
        data: opt.data
    };

    return (0, _modal2.default)(C, _opt);
};

module.exports = exports['default'];