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


var XCheckbox = function (_Component) {
    _inherits(XCheckbox, _Component);

    function XCheckbox(props) {
        _classCallCheck(this, XCheckbox);

        var _this = _possibleConstructorReturn(this, (XCheckbox.__proto__ || Object.getPrototypeOf(XCheckbox)).call(this, props));

        _this.state = {
            selectedValueList: props.selectedValueList || [],
            selectedList: [],
            checkboxList: props.checkboxList
        };
        return _this;
    }

    _createClass(XCheckbox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var arr = [];
            var checkboxList = JSON.parse(JSON.stringify(this.state.checkboxList));
            var selectedValueList = JSON.parse(JSON.stringify(this.state.selectedValueList));
            checkboxList.map(function (item) {
                if (selectedValueList.indexOf(item.value) != -1) {
                    item.selected = true;
                    arr.push(item);
                } else {
                    item.selected = false;
                }
            });

            this.setState({
                selectedList: arr,
                checkboxList: checkboxList
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var arr = [];
            var checkboxList = JSON.parse(JSON.stringify(props.checkboxList));
            var selectedValueList = JSON.parse(JSON.stringify(props.selectedValueList));
            checkboxList.map(function (item) {
                if (selectedValueList.indexOf(item.value) != -1) {
                    item.selected = true;
                    arr.push(item);
                } else {
                    item.selected = false;
                }
            });

            this.setState({
                selectedList: arr,
                checkboxList: checkboxList
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-checkbox' },
                this.state.checkboxList.map(function (item, index) {
                    if (_this2.props.checked === false || _this2.props.checked === true) {
                        return _react2.default.createElement(
                            'div',
                            { key: item.label + index, className: 'x-checkbox-li ' + (_this2.props.checked ? 'active-checkbox' : null) + ' ' + (item.disable == true ? 'checkbox-disable' : null), onClick: function onClick() {

                                    if (item.disable) {
                                        return;
                                    }
                                    if (_this2.props.checked === false) {
                                        item.selected = true;
                                        _this2.props.onChange([item]);
                                    } else {
                                        item.selected = false;
                                        _this2.props.onChange([item]);
                                    }
                                } },
                            _this2.props.checked == true ? _react2.default.createElement(_icon2.default, { type: 'checkbox-selected' }) : _react2.default.createElement(_icon2.default, { type: 'checkbox' }),
                            item.label
                        );
                    } else {
                        return _react2.default.createElement(
                            'div',
                            { key: item.label + index, className: 'x-checkbox-li ' + (item.selected ? 'active-checkbox' : null) + ' ' + (item.disable == true ? 'checkbox-disable' : null), onClick: function onClick() {

                                    if (item.disable) {
                                        return;
                                    }

                                    var arr = JSON.parse(JSON.stringify(_this2.state.selectedList));
                                    var selected = false;
                                    var selected_index = void 0;
                                    arr.length && arr.map(function (item_, index) {
                                        if (item_.value == item.value && item_.label == item.label) {
                                            selected = true;
                                            selected_index = index;
                                        }
                                    });

                                    // let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                    if (selected) {
                                        item.selected = false;
                                        arr.splice(selected_index, 1);
                                        _this2.setState({
                                            selectedList: arr
                                        });
                                    } else {
                                        item.selected = true;
                                        arr.push(item);
                                        _this2.setState({
                                            selectedList: arr
                                        });
                                    }

                                    _this2.props.onChange(arr);
                                } },
                            item.selected == true ? _react2.default.createElement(_icon2.default, { type: 'checkbox-selected' }) : _react2.default.createElement(_icon2.default, { type: 'checkbox' }),
                            item.label
                        );
                    }
                })
            );
        }
    }]);

    return XCheckbox;
}(_react.Component);

XCheckbox.propTypes = {
    selectedValueList: _propTypes2.default.array,
    checkboxList: _propTypes2.default.array
};
exports.default = XCheckbox;
module.exports = exports['default'];