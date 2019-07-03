'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _select = require('../select');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Size = function Size(props) {
    var pageSize = props.pageSize,
        count = props.count,
        className = props.className,
        pageSizeOpt = props.pageSizeOpt;

    var _useState = (0, _react.useState)(pageSize),
        _useState2 = _slicedToArray(_useState, 2),
        _pageSize = _useState2[0],
        setPageSize = _useState2[1];

    var _useState3 = (0, _react.useState)(count),
        _useState4 = _slicedToArray(_useState3, 2),
        _count = _useState4[0],
        setCount = _useState4[1];

    _react2.default.useEffect(function () {
        if (count !== null && count !== 0) {
            var count1 = parseInt(count);
            setCount(count1);
        } else {
            setCount(0);
        }
        setPageSize(pageSize);
    }, [count, pageSize]);

    var onPageSizeChange = function onPageSizeChange(pageSize) {
        setPageSize(pageSize);
        props.onPageSizeChange && props.onPageSizeChange(pageSize);
    };

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-pagination-size', className) },
        _react2.default.createElement(
            'div',
            { className: 'x-pagination-size-count' },
            '\u5171 ',
            count,
            ' \u6761'
        ),
        _react2.default.createElement(
            'div',
            { className: "x-pagination-size-select" },
            _react2.default.createElement(_select.Select, {
                selectedValue: _pageSize,
                options: pageSizeOpt,
                size: "md",
                onChange: function onChange(res) {
                    onPageSizeChange(res.value);
                } })
        ),
        _react2.default.createElement(
            'span',
            null,
            '\u6761/\u9875'
        )
    );
};

exports.default = Size;


Size.callerpropTypes = {
    pageSize: _propTypes2.default.number,
    className: _propTypes2.default.string,
    onPageSizeChange: _propTypes2.default.func,
    pageSizeOpt: _propTypes2.default.array
};

Size.defaultProps = {
    pageSize: 10,
    className: '',
    pageSizeOpt: [{ value: 5, label: 5 }, { value: 10, label: 10 }, { value: 30, label: 30 }, { value: 50, label: 50 }]
};
module.exports = exports['default'];