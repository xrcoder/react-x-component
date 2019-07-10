'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reg2 = require('./reg');

var _reg3 = _interopRequireDefault(_reg2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterValue = function filterValue(val) {

    var _reg = /^[0-9]*$/,
        _val = '';
    if (_reg.test(val)) {
        _val = val;
    } else {
        _val = val.replace(/[^\d]/g, '');
    }
    return _val;
};

var Phone = function Phone(props) {
    var value = props.value;

    var _useState = (0, _react.useState)(props.value),
        _useState2 = _slicedToArray(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];

    (0, _react.useEffect)(function () {
        setValue(filterValue(value));
    }, [value]);

    return _react2.default.createElement(_reg3.default, _extends({}, props, { type: 'text', reg: /^[1]([3-9])[0-9]{9}$/, value: _value
    }));
};

exports.default = Phone;
module.exports = exports['default'];