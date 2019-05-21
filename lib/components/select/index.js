'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './index.scss';


var XSelect = function (_Component) {
    _inherits(XSelect, _Component);

    function XSelect(props) {
        _classCallCheck(this, XSelect);

        var _this = _possibleConstructorReturn(this, (XSelect.__proto__ || Object.getPrototypeOf(XSelect)).call(this, props));

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
            selected: {},
            options: props.options || [],
            mode: props.mode || 'single',
            selectedValueList: props.selectedValueList || [],
            selectedList: []
        };
        _this.xSelect = _react2.default.createRef();
        return _this;
    }

    _createClass(XSelect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this.handleDocClick);
            var arr = this.props.options;
            var value = this.state.selectedValue;
            if (value != -1 && value !== undefined) {
                this.setState({
                    options: this.filterData(arr),
                    selected: this.getSelected(value)
                });
            } else {
                this.setState({
                    options: this.filterData(arr),
                    selectedList: this.getSelectedList(this.state.selectedValueList)
                });
            }
        }

        // static getDerivedStateFromProps(props,state){
        //     console.log(this,7777);
        //     console.log(props,state,8888333)
        //     return{
        //         options:props.options,
        //         selectedValue:props.selectedValue,
        //         selectedValueList:props.selectedList,

        //     }
        // }

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                options: props.options,
                selectedValue: props.selectedValue,
                selectedValueList: props.selectedValueList,
                selected: this.getSelected(props.selectedValue),
                selectedList: this.getSelectedList(props.selectedValueList || [])
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.state.mode == 'multiple' ? _react2.default.createElement(
                'div',
                { className: 'x-select ' + (this.state.showOptions ? 'x-select-clicked' : null) + '  x-select-clicked-multiple', ref: this.xSelect, onClick: function onClick(e) {
                        if (_this2.props.disabled) {
                            return;
                        } else {
                            var showOptions = _this2.state.showOptions;
                            _this2.setState({
                                showOptions: !showOptions
                            });
                        }
                        // e.nativeEvent.stopImmediatePropagation();
                    } },
                _react2.default.createElement(
                    'div',
                    { placeholder: '\u8BF7\u9009\u62E9', disabled: true, value: this.state.selected.label, className: 'x-select-title x-select-title-multiple ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    this.state.selectedList.map(function (item, index) {
                        return _react2.default.createElement(
                            'span',
                            { className: 'x-select-item-multiple', key: '' + item.label + index },
                            item.label,
                            _react2.default.createElement(_icon2.default, { type: 'close-a', onClick: function onClick(e) {
                                    var arr = JSON.parse(JSON.stringify(_this2.state.selectedList));
                                    var arr_options = JSON.parse(JSON.stringify(_this2.state.options));
                                    var selected_index = void 0;
                                    arr_options.map(function (item_, index_) {
                                        if (item.label == item_.label) {
                                            selected_index = index_;
                                            arr.splice(index, 1);
                                            arr_options[selected_index].selected = false;
                                        }
                                    });

                                    _this2.setState({
                                        selectedList: arr,
                                        options: arr_options
                                    });
                                    _this2.props.onChange(arr);
                                    e.nativeEvent.stopImmediatePropagation();
                                } })
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.options.length ? _react2.default.createElement(
                        'ul',
                        { className: 'x-select-ul ' + (this.state.showOptions ? 'x-select-ul-show' : null) },
                        this.state.options.map(function (item, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: '' + index + item.value, className: 'x-select-li ' + (item.selected == true ? 'x-select-li-true' : null), onClick: function onClick(e) {

                                        var arr = JSON.parse(JSON.stringify(_this2.state.selectedList));
                                        var selected = false;
                                        var selected_index = void 0;
                                        arr.map(function (item_, index) {
                                            if (item.label == item_.label) {
                                                selected = true;
                                                selected_index = index;
                                            }
                                        });

                                        if (!selected) {
                                            item.selected = true;
                                            arr.push(item);
                                            _this2.setState({
                                                selectedList: arr,
                                                showOptions: false
                                            });
                                        } else {
                                            item.selected = false;
                                            arr.splice(selected_index, 1);

                                            _this2.setState({
                                                selectedList: arr
                                            });
                                        }
                                        _this2.props.onChange(arr);
                                        // e.nativeEvent.stopImmediatePropagation();
                                    } },
                                item.label
                            );
                        })
                    ) : null
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'x-select x-select-content-height ' + (this.state.showOptions ? 'x-select-clicked' : null), ref: this.xSelect, onClick: function onClick(e) {
                        if (_this2.props.disabled) {
                            return;
                        } else {
                            var showOptions = _this2.state.showOptions;
                            _this2.setState({
                                showOptions: !showOptions
                            });
                        }
                        // e.nativeEvent.stopImmediatePropagation();
                    } },
                this.state.selected.value !== undefined && this.state.selected.value != -1 ? _react2.default.createElement(
                    'div',
                    { placeholder: '\u8BF7\u9009\u62E9', readOnly: true, disabled: true, value: this.state.selected.label, className: 'x-select-title ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    this.state.selected.label
                ) : _react2.default.createElement(
                    'div',
                    { readOnly: true, disabled: true, value: this.state.selected.label, className: 'x-select-title ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    '\u8BF7\u9009\u62E9'
                ),
                _react2.default.createElement(_icon2.default, { type: 'angle-left' }),
                this.state.options.length ? _react2.default.createElement(
                    'ul',
                    { className: 'x-select-ul ' + (this.state.showOptions ? 'x-select-ul-show' : null) },
                    this.state.options.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: '' + index + item.value, className: 'x-select-li ' + (item.value == _this2.state.selectedValue ? 'x-select-li-true' : null), onClick: function onClick(e) {
                                    _this2.setState({
                                        selected: item,
                                        selectedValue: item.value,
                                        showOptions: false
                                    });
                                    _this2.props.onChange(item);
                                    e.nativeEvent.stopImmediatePropagation();
                                } },
                            item.label
                        );
                    })
                ) : null
            );
        }
    }]);

    return XSelect;
}(_react.Component);

XSelect.propTypes = {
    options: _propTypes2.default.array,
    selectedValueList: _propTypes2.default.array,
    selectedList: _propTypes2.default.array
};
exports.default = XSelect;
module.exports = exports['default'];