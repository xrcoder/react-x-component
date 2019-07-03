'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(props) {

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-pagination', props.className) },
        _react2.default.createElement(_page2.default, { count: props.count, currPage: props.currPage, pageSize: props.pageSize, onPageChange: function onPageChange(res) {
                props.onPageChange && props.onPageChange(res);
            } }),
        _react2.default.createElement(_size2.default, { pageSize: props.pageSize, count: props.count, onPageSizeChange: function onPageSizeChange(res) {
                props.onPageSizeChange && props.onPageSizeChange(res);
            } })
    );
};

exports.default = Pagination;
module.exports = exports['default'];