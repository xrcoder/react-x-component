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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props, state) {
    var count = props.count,
        currPage = props.currPage,
        pageSize = props.pageSize,
        showPage = props.showPage,
        className = props.className;

    var _useState = (0, _react.useState)(count),
        _useState2 = _slicedToArray(_useState, 2),
        _count = _useState2[0],
        setCount = _useState2[1];

    var _useState3 = (0, _react.useState)(currPage),
        _useState4 = _slicedToArray(_useState3, 2),
        _currPage = _useState4[0],
        setCurrPage = _useState4[1];

    var _useState5 = (0, _react.useState)(pageSize),
        _useState6 = _slicedToArray(_useState5, 2),
        _pageSize = _useState6[0],
        setPageSize = _useState6[1];

    var _useState7 = (0, _react.useState)(showPage),
        _useState8 = _slicedToArray(_useState7, 2),
        _showPage = _useState8[0],
        setShowPage = _useState8[1];

    (0, _react.useEffect)(function () {
        if (count !== null && count !== 0) {
            var _currPage2 = parseInt(_currPage2);
            var count1 = parseInt(count);
            setCount(count1);
            setCurrPage(_currPage2);
        } else {
            setCount(0);
        }
        setPageSize(pageSize);
    }, [count, currPage, pageSize]);

    var getTotalPage = function getTotalPage(pageSize, total) {
        // 获取分页数
        return Math.ceil(total / pageSize);
    };

    var getPageList = function getPageList(len) {
        var pageList = [];
        if (len > showPage + 2) {
            pageList.push(1);
            if (currPage === 1) {
                // 当前页是首页
                for (var i = currPage + 1; i <= currPage + showPage; i++) {
                    pageList.push(i);
                }
                pageList.push('...');
            } else if (currPage === len) {
                // 当前页是最后一页
                pageList.push('...');
                for (var _i = currPage - showPage; _i < currPage; _i++) {
                    pageList.push(_i);
                }
            } else {
                // 当前页在中间的情况
                var offset = Math.floor(showPage / 2);
                if (currPage - offset > 2) {
                    pageList.push('...');
                }
                var first = currPage - offset > 2 ? currPage - offset : 2;
                var length = first + showPage > len ? len : first + showPage;
                var curr = first + showPage > len ? len - showPage : first;
                for (var _i2 = curr; _i2 < length; _i2++) {
                    pageList.push(_i2);
                }
                if (len - (length - 1) >= 2) {
                    pageList.push('...');
                }
            }
            pageList.push(len);
        } else {
            for (var _i3 = 1; _i3 <= len; _i3++) {
                pageList.push(_i3);
            }
        }
        return pageList;
    };

    var onCurrPageChange = function onCurrPageChange(pageIndex) {
        var index = parseInt(pageIndex);
        var total = getTotalPage(pageSize, count);
        index = index > total ? total : index;
        setCurrPage(index);
        props.onPageChange && props.onPageChange(index);
    };

    var renderPagination = function renderPagination() {

        var totalPage = getTotalPage(pageSize, count);
        var pageList = getPageList(totalPage);

        if (count === 0 || count === null) {
            return null;
        } else {
            return _react2.default.createElement(
                'ul',
                { className: (0, _classnames2.default)('x-pagination-page', className) },
                _react2.default.createElement(
                    'li',
                    { className: (0, _classnames2.default)('prev', { disabled: currPage == 1 }),
                        onClick: function onClick() {
                            if (currPage == 1) {
                                return;
                            }
                            onCurrPageChange(currPage - 1);
                        } },
                    '\u4E0A\u4E00\u9875'
                ),
                pageList.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: 'page_index_' + index,
                            className: (0, _classnames2.default)('page-item', { active: currPage == item }, { more: item == '...' }),
                            onClick: function onClick() {
                                if (item !== '...') {
                                    onCurrPageChange(item);
                                }
                            }
                        },
                        item
                    );
                }),
                _react2.default.createElement(
                    'li',
                    { className: (0, _classnames2.default)('next', { disabled: currPage == totalPage }),
                        onClick: function onClick() {
                            if (currPage == totalPage) {
                                return;
                            }
                            onCurrPageChange(currPage + 1);
                        } },
                    '\u4E0B\u4E00\u9875'
                )
            );
        }
    };

    return renderPagination();
};

exports.default = Page;


Page.propTypes = {
    count: _propTypes2.default.number.isRequired,
    currPage: _propTypes2.default.number,
    pageSize: _propTypes2.default.number,
    showPage: _propTypes2.default.number,
    className: _propTypes2.default.string,
    onPageChange: _propTypes2.default.func
};

Page.defaultProps = {
    count: 0,
    currPage: 1,
    pageSize: 10,
    showPage: 3, //默认显示五个页码，多出来的...显示
    className: ''
};
module.exports = exports['default'];