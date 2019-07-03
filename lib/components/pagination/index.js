'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _loadlocales = require('../locales/loadlocales');

var _loadlocales2 = _interopRequireDefault(_loadlocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XPagination = function (_Component) {
    _inherits(XPagination, _Component);

    function XPagination(props) {
        _classCallCheck(this, XPagination);

        var _this = _possibleConstructorReturn(this, (XPagination.__proto__ || Object.getPrototypeOf(XPagination)).call(this));

        _this.state = {
            count: props.count,
            currPage: props.currPage,
            pageSize: props.pageSize,
            size: props.size,
            showPage: props.showPage,
            className: props.className,
            showJumpPage: props.showJumpPage,
            jumpPage: '',
            initDone: false
        };
        return _this;
    }

    _createClass(XPagination, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window.localStorage.getItem('isStoragelocale')) {
                this.setState({ initDone: window.localStorage.getItem('initDone') });
            } else {
                (0, _loadlocales2.default)(this.props.locale).then(function () {
                    _this2.setState({ initDone: true });
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.count !== null && nextProps.count !== 0) {
                var currPage = parseInt(nextProps.currPage);
                var count = parseInt(nextProps.count);
                this.setState({
                    count: count,
                    currPage: currPage
                }, function () {
                    // this.onCurrPageChange(this.state.currPage);
                });
            } else {
                // count为0，即请求的数据为空的情况
                this.setState({
                    count: 0
                });
            }
        }
    }, {
        key: 'getTotalPage',
        value: function getTotalPage(pageSize, total) {
            // 获取分页数
            return Math.ceil(total / pageSize);
        }
    }, {
        key: 'getPageList',
        value: function getPageList(len) {
            var _state = this.state,
                currPage = _state.currPage,
                showPage = _state.showPage;

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
        }
    }, {
        key: 'onCurrPageChange',
        value: function onCurrPageChange(pageIndex) {
            var _this3 = this;

            var index = parseInt(pageIndex);
            var total = this.getTotalPage(this.state.pageSize, this.state.count);
            index = index > total ? total : index;
            this.setState({
                currPage: index,
                jumpPage: ''
            }, function () {
                _this3.props.onPageChange(index);
            });
        }
    }, {
        key: 'onPageSizeChange',
        value: function onPageSizeChange(pageSize) {
            var _this4 = this;

            this.setState({
                pageSize: pageSize,
                currPage: 1,
                jumpPage: ''
            }, function () {
                _this4.props.onPageSizeChange(pageSize);
            });
        }
    }, {
        key: 'onPageJump',
        value: function onPageJump(pageIndex) {
            var _this5 = this;

            var index = parseInt(pageIndex);
            var total = this.getTotalPage(this.state.pageSize, this.state.count);
            index = index > total ? total : index;
            if (pageIndex !== "") {
                this.setState({
                    currPage: index
                }, function () {
                    _this5.props.onPageChange(index);
                });
            }
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _this6 = this;

            var _state2 = this.state,
                count = _state2.count,
                currPage = _state2.currPage,
                pageSize = _state2.pageSize,
                size = _state2.size,
                showPage = _state2.showPage,
                className = _state2.className,
                showJumpPage = _state2.showJumpPage,
                jumpPage = _state2.jumpPage;

            var pageSizeOpts = [{ value: 5, label: 5 }, { value: 10, label: 10 }, { value: 20, label: 20 }, { value: 50, label: 50 }];
            var totalPage = this.getTotalPage(pageSize, count);
            var pageList = this.getPageList(totalPage);
            if (count === 0 || count === null) {
                return null;
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: (localStorage.getItem('direction') == 'right' ? 'x-pagination-i18n' : 'x-pagination') + ' ' + size + ' ' + className },
                    _react2.default.createElement(
                        'ul',
                        { className: 'x-pagination-list' },
                        _react2.default.createElement(
                            'li',
                            { className: (0, _classnames2.default)('prev', { disabled: this.state.currPage == 1 }),
                                onClick: function onClick() {
                                    if (_this6.state.currPage == 1) {
                                        return;
                                    }
                                    _this6.onCurrPageChange(_this6.state.currPage - 1);
                                } },
                            _react2.default.createElement(_icon2.default, { type: 'angle-left' }),
                            _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_PAGINATION_PREVPAGE').d('\u4E0A\u4E00\u9875')
                        ),
                        pageList.map(function (item, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: 'page_index_' + index,
                                    className: (0, _classnames2.default)('page-item', { active: currPage == item }, { more: item == '...' }),
                                    onClick: function onClick() {
                                        if (item !== '...') {
                                            _this6.onCurrPageChange(item);
                                        }
                                    }
                                },
                                item
                            );
                        }),
                        _react2.default.createElement(
                            'li',
                            { className: (0, _classnames2.default)('next', { disabled: this.state.currPage == totalPage }),
                                onClick: function onClick() {
                                    if (_this6.state.currPage == totalPage) {
                                        return;
                                    }
                                    _this6.onCurrPageChange(_this6.state.currPage + 1);
                                } },
                            _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_PAGINATION_NEXTPAGE').d('\u4E0B\u4E00\u9875'),
                            _react2.default.createElement(_icon2.default, { type: 'angle-right' })
                        )
                    ),
                    this.state.showJumpPage && _react2.default.createElement(
                        'div',
                        { className: 'goto-page' },
                        _react2.default.createElement(
                            'span',
                            null,
                            _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_PAGINATION_JUMPTO').d('\u8DF3\u81F3')
                        ),
                        _react2.default.createElement(_input2.default, {
                            placeholder: '1',
                            value: jumpPage,
                            onChange: function onChange(res) {
                                // 检测不允许输入非数字
                                var reg = /^[0-9]+$/g;
                                if (res !== "") {
                                    // 输入不为空
                                    if (reg.test(res)) {
                                        reg.lastIndex = 0;
                                        var page = res > totalPage ? totalPage : res <= 0 ? 1 : res; //两端范围都要限制
                                        _this6.setState({
                                            jumpPage: page
                                        });
                                    }
                                } else {
                                    _this6.setState({
                                        jumpPage: ""
                                    });
                                }
                            },
                            onEnter: this.onPageJump.bind(this),
                            className: 'goto-input' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_PAGINATION_PAGE').d('\u9875')
                        )
                    ),
                    this.props.showPageSize ? _react2.default.createElement(
                        'div',
                        { className: 'pagesize-change' },
                        _react2.default.createElement(
                            'div',
                            { className: "pagination-select" },
                            _react2.default.createElement(_select2.default, {
                                selectedValue: this.state.pageSize,
                                options: pageSizeOpts,
                                size: "md",
                                onChange: function onChange(res) {
                                    var pageSize = res.value;
                                    _this6.onPageSizeChange(pageSize);
                                } })
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_PAGINATION_ITEMSPERPAGE').d('\u6761/\u9875')
                        )
                    ) : ''
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.initDone !== false && this.renderPagination();
        }
    }]);

    return XPagination;
}(_react.Component);

XPagination.propTypes = {
    count: _propTypes2.default.number.isRequired,
    currPage: _propTypes2.default.number,
    pageSize: _propTypes2.default.number,
    size: _propTypes2.default.oneOf(['lg', 'md', 'sm']),
    showPage: _propTypes2.default.number,
    className: _propTypes2.default.string,
    onPageChange: _propTypes2.default.func,
    onPageSizeChange: _propTypes2.default.func,
    showJumpPage: _propTypes2.default.bool,
    showPageSize: _propTypes2.default.bool,
    locale: _propTypes2.default.string
};
XPagination.defaultProps = {
    count: 0,
    currPage: 1,
    pageSize: 10,
    size: 'md',
    showPage: 3, //默认显示五个页码，多出来的...显示
    className: '',
    onPageChange: function onPageChange() {},
    onPageSizeChange: function onPageSizeChange() {},
    showJumpPage: false,
    showPageSize: false,
    locale: 'zh_CN'
};
exports.default = XPagination;
module.exports = exports['default'];