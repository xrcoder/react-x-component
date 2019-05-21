'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.scss';

var XLayout = function XLayout(props) {
    return _react2.default.createElement(
        'div',
        { className: 'x-layout ' + props.className },
        props.children
    );
};
exports.default = XLayout;
module.exports = exports['default'];