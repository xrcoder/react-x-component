(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "react", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/assertThisInitialized"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.inherits, global.react, global.propTypes, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, _react, _propTypes, _classnames) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  var _default =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(_default, _Component);

    function _default(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, _default);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).call(this, props));

      _this.handleDocClick = function (e) {
        var that = (0, _assertThisInitialized2["default"])(_this);
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
      _this.xSelect = _react["default"].createRef();
      return _this;
    }

    (0, _createClass2["default"])(_default, [{
      key: "componentDidMount",
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
      key: "componentWillReceiveProps",
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
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleDocClick);
      }
    }, {
      key: "filterData",
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
      key: "getSelected",
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
      key: "getSelectedList",
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
      key: "SelectFn",
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
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$state = this.state,
            showOptions = _this$state.showOptions,
            placeholder = _this$state.placeholder,
            mode = _this$state.mode,
            selected = _this$state.selected,
            selectedList = _this$state.selectedList,
            options = _this$state.options,
            selectedValue = _this$state.selectedValue;
        var _this$props = this.props,
            disabled = _this$props.disabled,
            onMultiShow = _this$props.onMultiShow,
            onChange = _this$props.onChange;
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])({
            'x-select': true,
            'x-select-clicked': showOptions,
            'x-select-single': mode === 'single',
            'x-select-multiple': mode === 'multiple',
            'x-select-disabled': disabled,
            'x-select-hasvalue': !!selected.label || selectedList.length > 0
          }),
          ref: this.xSelect,
          onClick: function onClick(e) {
            if (disabled) {
              return;
            } else {
              _this3.setState({
                showOptions: !showOptions
              });

              onMultiShow && onMultiShow(e, showOptions);
            }
          }
        }, _react["default"].createElement("div", {
          disabled: true,
          value: selected.label,
          className: (0, _classnames["default"])({
            'x-select-title': true,
            'x-select-disabled': disabled
          })
        }, _react["default"].createElement("span", {
          className: "arrow"
        }), !!selected.label ? _react["default"].createElement("span", {
          className: "value"
        }, selected.label) : _react["default"].createElement("span", {
          className: "placeholder"
        }, placeholder), mode !== 'single' && selectedList.length ? _react["default"].createElement("ul", {
          className: "x-select-ul-value"
        }, selectedList.map(function (item, index) {
          return _react["default"].createElement("li", {
            key: '' + index + item.value,
            className: (0, _classnames["default"])('x-select-li'),
            onClick: function onClick(e) {
              _this3.SelectFn(item);

              e.stopPropagation();
            }
          }, item.label, _react["default"].createElement("span", {
            className: "cls-icon"
          }));
        })) : null), options.length ? _react["default"].createElement("ul", {
          className: "x-select-ul-list",
          style: {
            top: "".concat(mode === 'multiple' ? this.state.multipleHeight : '', "px")
          }
        }, options.map(function (item, index) {
          return _react["default"].createElement("li", {
            key: '' + index + item.value,
            className: (0, _classnames["default"])('x-select-li', {
              'x-select-li-true': item.value === selectedValue || item.selected
            }),
            onClick: function onClick(e) {
              _this3.SelectFn(item);

              e.stopPropagation();
            }
          }, item.label);
        })) : null);
      }
    }]);
    return _default;
  }(_react.Component);

  _exports["default"] = _default;
  _default.propTypes = {
    options: _propTypes["default"].array,
    //选项列表
    selectedValueList: _propTypes["default"].array,
    //默认已选择列表
    selectedList: _propTypes["default"].array,
    //已勾选列表
    size: _propTypes["default"].oneOf(['lg', 'md']),
    //尺寸
    locale: _propTypes["default"].string,
    //本地化
    placeholder: _propTypes["default"].string,
    //placeholder
    mode: _propTypes["default"].string,
    //类型
    selectedValue: _propTypes["default"].number //已选项

  };
  _default.defaultProps = {
    size: 'lg',
    locale: 'zh_CN'
  };
  module.exports = exports.default;
});