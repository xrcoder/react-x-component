'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './index.scss';


var _default = function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.handleDocClick = function (e) {
            var that = _this;
            var currentNode = that.xSelect.current;
            if (!currentNode.contains(e.target)) {
                that.setState({
                    showOptions: false
                });
            }
        };

        _this.state = {
            showOptions: false,
            selectedValue: props.selectedValue,
            selectedValueList: props.selectedValueList || [],
            selected: {},
            options: props.options || [],
            mode: props.mode ? props.mode : 'single',
            selectedList: props.selectedValueList || [],
            placeholder: props.placeholder || '请选择',
            multipleHeight: 36
        };
        _this.xSelect = _react2.default.createRef();
        return _this;
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this.handleDocClick);
            var arr = this.props.options;

            if (this.state.mode === 'single') {
                var value = this.state.selectedValue;
                this.setState({
                    selectedValue: value ? value : {},
                    selected: this.getSelected(value)
                });
            } else {
                var _value = this.state.selectedValueList;
                this.setState({
                    selectedList: this.getSelectedList(_value)
                });
            }

            this.setState({
                options: this.filterData(arr)
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                options: props.options,
                selectedValue: props.selectedValue,
                selectedValueList: props.selectedValueList,
                selected: this.getSelected(props.selectedValue),
                selectedList: this.getSelectedList(props.selectedList || [])
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleDocClick);
        }
    }, {
        key: 'filterData',
        value: function filterData(arr) {
            var arr_new = [];
            arr.map(function (item) {
                if (item.value && item.label || item.value === 0 || item.label === 0) {
                    arr_new.push(item);
                }
            });
            return arr_new;
        }
    }, {
        key: 'getSelected',
        value: function getSelected(selectedValue) {
            var obj = {};
            this.filterData(this.props.options).map(function (item) {
                if (item.value == selectedValue) {
                    obj = item;
                }
            });
            return obj;
        }
    }, {
        key: 'getSelectedList',
        value: function getSelectedList(selectedValueList) {
            var selectedList = [];
            this.filterData(this.props.options).map(function (item) {
                selectedValueList.map(function (item_) {
                    if (item.value == item_) {
                        item.selected = true;
                        selectedList.push(item);
                    }
                });
            });
            return selectedList;
        }
    }, {
        key: 'SelectFn',
        value: function SelectFn(item) {
            var _this2 = this;

            switch (this.state.mode) {
                case 'single':
                    this.setState({
                        selected: item,
                        selectedValue: item.value,
                        showOptions: false
                    });
                    this.props.onChange && this.props.onChange(item);
                    break;
                case 'multiple':
                    var result = this.state.selectedList;
                    if (item.selected) {
                        result = result.filter(function (subItem) {
                            if (subItem.value === item.value) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        item.selected = false;
                    } else {
                        item.selected = true;
                        result.push(item);
                    }
                    this.setState({
                        selectedList: result
                    });
                    this.props.onChange && this.props.onChange(result);
                    setTimeout(function () {
                        _this2.setState({
                            multipleHeight: _this2.xSelect.current && _this2.xSelect.current.clientHeight
                        });
                    }, 0);
                    break;
                default:
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                showOptions = _state.showOptions,
                placeholder = _state.placeholder,
                mode = _state.mode,
                selected = _state.selected,
                selectedList = _state.selectedList,
                options = _state.options,
                selectedValue = _state.selectedValue;
            var _props = this.props,
                disabled = _props.disabled,
                onMultiShow = _props.onMultiShow,
                onChange = _props.onChange;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)({
                        'x-select': true,
                        'x-select-clicked': showOptions,
                        'x-select-single': mode === 'single',
                        'x-select-multiple': mode === 'multiple',
                        'x-select-disabled': disabled,
                        'x-select-hasvalue': !!selected.label || selectedList.length > 0
                    }), ref: this.xSelect, onClick: function onClick(e) {
                        if (disabled) {
                            return;
                        } else {
                            _this3.setState({
                                showOptions: !showOptions
                            });
                            onMultiShow && onMultiShow(e, showOptions);
                        }
                    } },
                _react2.default.createElement(
                    'div',
                    { disabled: true, value: selected.label, className: (0, _classnames2.default)({
                            'x-select-title': true,
                            'x-select-disabled': disabled
                        }) },
                    _react2.default.createElement('span', { className: 'arrow' }),
                    !!selected.label ? _react2.default.createElement(
                        'span',
                        { className: 'value' },
                        selected.label
                    ) : _react2.default.createElement(
                        'span',
                        { className: 'placeholder' },
                        placeholder
                    ),
                    mode !== 'single' && selectedList.length ? _react2.default.createElement(
                        'ul',
                        { className: 'x-select-ul-value' },
                        selectedList.map(function (item, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: '' + index + item.value, className: (0, _classnames2.default)('x-select-li'), onClick: function onClick(e) {
                                        _this3.SelectFn(item);
                                        e.stopPropagation();
                                    } },
                                item.label,
                                _react2.default.createElement('span', { className: 'cls-icon' })
                            );
                        })
                    ) : null
                ),
                options.length ? _react2.default.createElement(
                    'ul',
                    { className: 'x-select-ul-list', style: { top: (mode === 'multiple' ? this.state.multipleHeight : '') + 'px' } },
                    options.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: '' + index + item.value, className: (0, _classnames2.default)('x-select-li', { 'x-select-li-true': item.value === selectedValue || item.selected }), onClick: function onClick(e) {
                                    _this3.SelectFn(item);
                                    e.stopPropagation();
                                } },
                            item.label
                        );
                    })
                ) : null
            );
        }
    }]);

    return _default;
}(_react.Component);

_default.propTypes = {
    options: _propTypes2.default.array, //选项列表
    selectedValueList: _propTypes2.default.array, //默认已选择列表
    selectedList: _propTypes2.default.array, //已勾选列表
    size: _propTypes2.default.oneOf(['lg', 'md']), //尺寸
    locale: _propTypes2.default.string, //本地化
    placeholder: _propTypes2.default.string, //placeholder
    mode: _propTypes2.default.string, //类型
    selectedValue: _propTypes2.default.number //已选项
};
_default.defaultProps = {
    size: 'lg',
    locale: 'zh_CN'
};
exports.default = _default;
module.exports = exports['default'];