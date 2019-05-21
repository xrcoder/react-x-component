'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function grid(_ref) {
    var children = _ref.children;


    return _react2.default.createElement(
        'div',
        { className: 'x-grid-row x-row' },
        children
    );
}
module.exports = exports['default'];