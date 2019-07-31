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

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _loadlocales = require('../locales/loadlocales');

var _loadlocales2 = _interopRequireDefault(_loadlocales);

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
            var _this2 = this;

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
                    selectedList: this.getSelectedList(this.props.selectedValueList)
                });
            }
            if (window.localStorage.getItem('isStoragelocale')) {
                this.setState({ initDone: window.localStorage.getItem('initDone') });
            } else {
                (0, _loadlocales2.default)(this.props.locale).then(function () {
                    _this2.setState({ initDone: true });
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
            var _this3 = this;

            return this.state.initDone !== false && this.state.mode == 'multiple' ? _react2.default.createElement(
                'div',
                { className: (localStorage.getItem('direction') == 'right' ? 'x-select-i18n x-select-i18n-clicked-multiple' : 'x-select x-select-clicked-multiple') + ' ' + (this.state.showOptions ? '' + (localStorage.getItem('direction') == 'right' ? 'x-select-i18n-clicked' : 'x-select-clicked') : null), ref: this.xSelect, onClick: function onClick(e) {
                        if (_this3.props.disabled) {
                            return;
                        } else {
                            var showOptions = _this3.state.showOptions;
                            _this3.setState({
                                showOptions: !showOptions
                            });
                        }
                    } },
                _react2.default.createElement(
                    'div',
                    { placeholder: _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d('\u8BF7\u9009\u62E9'), disabled: true, value: this.state.selected.label, className: 'x-select-title x-select-title-multiple ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    this.state.selectedList.map(function (item, index) {
                        return _react2.default.createElement(
                            'span',
                            { className: 'x-select-item-multiple', key: '' + item.label + index },
                            item.label,
                            _react2.default.createElement(_icon2.default, { type: '' + (item.disable ? null : 'close-a'), onClick: function onClick(e) {
                                    var arr = JSON.parse(JSON.stringify(_this3.state.selectedList));
                                    var arr_options = JSON.parse(JSON.stringify(_this3.state.options));
                                    var selected_index = void 0;
                                    arr_options.map(function (item_, index_) {
                                        if (item.label == item_.label) {
                                            selected_index = index_;
                                            arr.splice(index, 1);
                                            arr_options[selected_index].selected = false;
                                        }
                                    });

                                    _this3.setState({
                                        selectedList: arr,
                                        options: arr_options
                                    });
                                    _this3.props.onChange(arr);
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
                                { key: '' + index + item.value, className: 'x-select-li ' + (item.selected == true ? 'x-select-li-true' : null) + ' ' + (item.disable ? 'x-select-li-disable' : null), onClick: function onClick(e) {

                                        var arr = JSON.parse(JSON.stringify(_this3.state.selectedList));
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
                                            _this3.setState({
                                                selectedList: arr,
                                                showOptions: false
                                            });
                                        } else {
                                            item.selected = false;
                                            arr.splice(selected_index, 1);

                                            _this3.setState({
                                                selectedList: arr
                                            });
                                        }
                                        _this3.props.onChange(arr);
                                        // e.nativeEvent.stopImmediatePropagation();
                                    } },
                                item.label
                            );
                        })
                    ) : null
                )
            ) : _react2.default.createElement(
                'div',
                { className: (localStorage.getItem('direction') == 'right' ? 'x-select-i18n' : 'x-select') + ' x-select-content-height ' + (this.state.showOptions ? 'x-select-clicked' : null) + ' x-select-' + this.props.size, ref: this.xSelect, onClick: function onClick(e) {
                        if (_this3.props.disabled) {
                            return;
                        } else {
                            var showOptions = _this3.state.showOptions;
                            _this3.setState({
                                showOptions: !showOptions
                            });
                        }
                        // e.nativeEvent.stopImmediatePropagation();
                    } },
                this.state.selected.value !== undefined && this.state.selected.value != -1 ? _react2.default.createElement(
                    'div',
                    { placeholder: _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d('\u8BF7\u9009\u62E9'), readOnly: true, disabled: true, value: this.state.selected.label, className: 'x-select-title ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    this.state.selected.label
                ) : _react2.default.createElement(
                    'div',
                    { readOnly: true, disabled: true, value: this.state.selected.label, className: 'x-select-title ' + (this.props.disabled ? 'x-select-disabled' : null) },
                    _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d('\u8BF7\u9009\u62E9')
                ),
                _react2.default.createElement(_icon2.default, { type: 'angle-left' }),
                this.state.options.length ? _react2.default.createElement(
                    'ul',
                    { className: 'x-select-ul ' + (this.state.showOptions ? 'x-select-ul-show' : null) + ' x-select-ul-' + this.props.size },
                    this.state.options.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: '' + index + item.value, className: 'x-select-li ' + (item.value == _this3.state.selectedValue ? 'x-select-li-true' : null), onClick: function onClick(e) {
                                    _this3.setState({
                                        selected: item,
                                        selectedValue: item.value,
                                        showOptions: false
                                    });
                                    _this3.props.onChange(item);
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
    selectedList: _propTypes2.default.array,
    size: _propTypes2.default.oneOf(['lg', 'md']),
    locale: _propTypes2.default.string
};
XSelect.defaultProps = {
    size: 'lg',
    locale: 'zh_CN'
};
exports.default = XSelect;
module.exports = exports['default'];