'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderArea = function OrderArea(props) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isUp = _useState2[0],
        setIsUp = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isDown = _useState4[0],
        setIsDown = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isSelected = _useState6[0],
        setIsSelected = _useState6[1];

    var upClick = function upClick() {
        setIsUp(function () {
            props.onOrderChange({
                type: !isUp ? 'up' : null,
                key: props.keyCode
            });
            return !isUp;
        });
        setIsDown(false);
    };

    var downClick = function downClick() {
        setIsUp(false);
        setIsDown(function () {
            props.onOrderChange({
                type: !isDown ? 'down' : null,
                key: props.keyCode
            });
            return !isDown;
        });
    };

    return _react2.default.createElement(
        'div',
        { className: 'order-box' },
        _react2.default.createElement('div', { className: isUp ? 'order-up selected' : 'order-up',
            onClick: upClick.bind(undefined) }),
        _react2.default.createElement('div', { className: isDown ? 'order-down selected' : 'order-down',
            onClick: downClick.bind(undefined) })
    );
};

var XTable = function XTable(props) {
    var tableConf = props.tableConf,
        dataList = props.dataList,
        noBorder = props.noBorder,
        pageSize = props.pageSize,
        currPage = props.currPage,
        count = props.count,
        size = props.size,
        noPagination = props.noPagination,
        isLoading = props.isLoading,
        _onOrderChange = props.onOrderChange,
        onPageChange = props.onPageChange;

    var _useState7 = (0, _react.useState)(''),
        _useState8 = _slicedToArray(_useState7, 2),
        orderName = _useState8[0],
        setOrderName = _useState8[1];

    var _useState9 = (0, _react.useState)(''),
        _useState10 = _slicedToArray(_useState9, 2),
        orderType = _useState10[0],
        setOrderType = _useState10[1];

    return _react2.default.createElement(
        'div',
        { className: 'x-table' },
        isLoading ? _react2.default.createElement(_loading2.default, { type: 'table' }) : null,
        _react2.default.createElement(
            'div',
            { className: 'x-table-wrapper' + (noBorder ? ' no-border' : '') + (size === 'small' ? ' xs' : '') },
            _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        tableConf.map(function (item, index) {
                            return _react2.default.createElement(
                                'th',
                                { key: index, style: { textAlign: item.align || 'left' } },
                                item.name,
                                item.isOrder && _react2.default.createElement(OrderArea, {
                                    keyCode: item.key,
                                    orderName: orderName,
                                    orderType: orderType,
                                    onOrderChange: function onOrderChange(res) {
                                        setOrderName(res.key);
                                        setOrderType(res.type);
                                        _onOrderChange(res);
                                    } })
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    dataList.length > 0 ? dataList.map(function (itemRow, indexRow) {
                        return _react2.default.createElement(
                            'tr',
                            { key: indexRow },
                            tableConf.map(function (itemCol, indexCol) {
                                return _react2.default.createElement(
                                    'td',
                                    { key: indexRow + indexCol, style: { textAlign: itemCol.align || 'left' } },
                                    itemCol.render ? itemCol.render(itemRow) : itemRow[itemCol['key']]
                                );
                            })
                        );
                    }) : _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { colSpan: props.tableConf.length, className: 'table-no-data' },
                            _react2.default.createElement(
                                'div',
                                { className: 'no-data' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'no-data-msg' },
                                    '\u6682\u65E0\u6570\u636E'
                                )
                            )
                        )
                    )
                )
            )
        ),
        !noPagination && _react2.default.createElement(
            'div',
            { className: 'x-pagination-wrapper' },
            _react2.default.createElement(
                'span',
                { className: 'total-info' },
                '\u5171 ',
                count,
                ' \u6761'
            ),
            _react2.default.createElement(_pagination2.default, {
                count: count,
                pageSize: pageSize,
                currPage: currPage,
                onPageChange: function onPageChange(res) {
                    props.onPageChange(res);
                }
            })
        )
    );
};

exports.default = XTable;


XTable.propTypes = {
    noPagination: _propTypes2.default.bool,
    onPageChange: _propTypes2.default.func,
    onOrderChange: _propTypes2.default.func,
    size: _propTypes2.default.string,
    pageSize: _propTypes2.default.number,
    dataList: _propTypes2.default.array
};

XTable.defaultProps = {
    noPagination: false,
    onPageChange: function onPageChange() {},
    onOrderChange: function onOrderChange() {},
    pageSize: 10,
    dataList: []
};
module.exports = exports['default'];