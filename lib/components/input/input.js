'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useInputValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var onChange = (0, _react.useCallback)(function (e) {
        setValue(e.currentTarget.value);
    }, []);
    return { value: value, onChange: onChange };
}

function _default(_ref) {
    var placeholder = _ref.placeholder,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        className = _ref.className,
        style = _ref.style,
        _onChange = _ref.onChange,
        onEnter = _ref.onEnter,
        _onFocus = _ref.onFocus,
        _onBlur = _ref.onBlur,
        disabled = _ref.disabled,
        maxLength = _ref.maxLength;


    var oInput = useInputValue(value);

    return _react2.default.createElement('input', {
        value: oInput.value,
        style: style,
        className: (0, _classnames2.default)('x-input', className),
        disabled: disabled,
        placeholder: placeholder,
        maxLength: maxLength,
        onChange: function onChange(e) {
            oInput.onChange(e);
            _onChange && _onChange(e.target.value, e);
        },
        onFocus: function onFocus(e) {
            _onFocus && _onFocus(e);
        },
        onBlur: function onBlur(e) {
            _onBlur && _onBlur(e);
        },
        onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13 && onEnter) {
                onEnter(e.target.value, e);
            }
        }
    });
}
exports.default = _default;
module.exports = exports['default'];