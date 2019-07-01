(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "element-react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("element-react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.elementReact);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _elementReact) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);

  var DateRangePicker =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(DateRangePicker, _React$Component);

    function DateRangePicker(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, DateRangePicker);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DateRangePicker).call(this, props));
      _this.elInputTime1 = null;
      _this.elInputTime2 = null;
      _this.daterangepicker = null;
      return _this;
    }

    (0, _createClass2["default"])(DateRangePicker, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.isShowTime) {
          this.elInputTime1 && this.elInputTime1.removeEventListener('keydown', this.stopDefaultEvents, false);
          this.elInputTime2 && this.elInputTime2.removeEventListener('keydown', this.stopDefaultEvents, false);
        }
      }
    }, {
      key: "stopDefaultEvents",
      value: function stopDefaultEvents(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;
        return (0, _core.jsx)(_elementReact.DateRangePicker, (0, _extends2["default"])({}, props, {
          shortcuts: props.shortcuts || [{
            text: '今日',
            onClick: function onClick() {
              var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
              var start = new Date(end.getFullYear(), end.getMonth(), end.getDate());

              _this2.setState({
                value: [start, end]
              });

              _this2.daterangepicker.togglePickerVisible();

              _this2.props.onChange && _this2.props.onChange([start, end]);
            }
          }, {
            text: '本周',
            onClick: function onClick() {
              var NowDate = new Date();
              var WeekFirstDay = new Date(NowDate.getTime() - (NowDate.getDay() - 1) * 86400000);
              var WeekLastDay = new Date((WeekFirstDay.getTime() / 1000 + 6 * 86400) * 1000);
              var M = Number(WeekLastDay.getMonth()) + 1;
              var tmpTime = new Date(WeekLastDay.getFullYear() + "-" + M + "-" + WeekLastDay.getDate());
              var end = new Date(tmpTime.getTime() + 24 * 60 * 60 * 1000 - 1);
              NowDate.setDate(NowDate.getDate() - NowDate.getDay() + 1);
              var begin = NowDate.getFullYear() + "-" + (NowDate.getMonth() + 1) + "-" + NowDate.getDate() + " 00:00:00";
              var start = new Date(begin);
              start.setTime(start.getTime());

              _this2.setState({
                value: [start, end]
              });

              _this2.daterangepicker.togglePickerVisible();

              _this2.props.onChange && _this2.props.onChange([start, end]);
            }
          }, {
            text: '本月',
            onClick: function onClick() {
              var NowDate = new Date();
              var MonthNextFirstDay = new Date(NowDate.getFullYear(), NowDate.getMonth() + 1, 1);
              var MonthLastDay = new Date(MonthNextFirstDay.getTime() - 86400000);
              var M = Number(MonthLastDay.getMonth()) + 1;
              var tmpDate = new Date(MonthLastDay.getFullYear() + "-" + M + "-" + MonthLastDay.getDate());
              var end = new Date(tmpDate.getTime() + 24 * 60 * 60 * 1000 - 1);
              var start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
              start.setTime(start.getTime() - 3600 * 1000 * 24 * (end.getDate() - 1));

              _this2.setState({
                value: [start, end]
              });

              _this2.daterangepicker.togglePickerVisible();

              _this2.props.onChange && _this2.props.onChange([start, end]);
            }
          }],
          ref: function ref(e) {
            return _this2.daterangepicker = e;
          },
          onFocus: function onFocus(e) {
            props.onFocus && props.onFocus(e); // 源码中时间选择器两个input中的一个keydown事件绑定的事件名字写错了...
            // 导致js报错，并引起两个input在处理keydown时不相同
            // 索性阻止了keydown事件

            setTimeout(function () {
              if (props.isShowTime) {
                _this2.elInputTime1 = document.querySelectorAll('.el-date-range-picker input')[0];
                _this2.elInputTime2 = document.querySelectorAll('.el-date-range-picker input')[2];
                _this2.elInputTime1 && _this2.elInputTime1.addEventListener('keydown', _this2.stopDefaultEvents, false);
                _this2.elInputTime2 && _this2.elInputTime2.addEventListener('keydown', _this2.stopDefaultEvents, false);
              }
            }, 500);
          }
        }));
      }
    }]);
    return DateRangePicker;
  }(_react["default"].Component);

  var _default = {
    DatePicker: _elementReact.DatePicker,
    DateRangePicker: DateRangePicker
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});