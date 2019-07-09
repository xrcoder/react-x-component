'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegInput = function RegInput(props) {
    var value = props.value,
        className = props.className,
        reg = props.reg,
        _onChange = props.onChange;

    var _useState = (0, _react.useState)(value),
        _useState2 = _slicedToArray(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];

    var _useState3 = (0, _react.useState)(true),
        _useState4 = _slicedToArray(_useState3, 2),
        _isValid = _useState4[0],
        setValid = _useState4[1]; //默认合法

    (0, _react.useEffect)(function () {
        setValue(value);
        setValid(reg.test(value));
    });

    return _react2.default.createElement(_input2.default, _extends({}, props, {
        value: _value,
        className: (0, _classnames2.default)(className, { 'x-input-error': !_isValid && _value }),
        onChange: function onChange(res, e) {
            setValue(res);
            _onChange(res, _isValid, e);
        }
    }));
};

RegInput.defaultProps = {
    reg: /[\s\S]*/
};

exports.default = RegInput;
module.exports = exports['default'];