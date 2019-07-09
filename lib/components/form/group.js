'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Rayr Lee on 2019/7/5.
 */

function Group(props) {
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-form-group', props.className) },
        props.children
    );
}

exports.default = Group;
module.exports = exports['default'];