'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useInputValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var onChange = (0, _react.useCallback)(function (e) {
        setValue(e.currentTarget.value);
    }, []);

    var updateValue = function updateValue(value) {
        setValue(value);
    };

    return { value: value, onChange: onChange, updateValue: updateValue };
}

function Input(_ref) {
    var placeholder = _ref.placeholder,
        error = _ref.error,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        className = _ref.className,
        style = _ref.style,
        _onChange = _ref.onChange,
        onEnter = _ref.onEnter,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        disabled = _ref.disabled,
        maxLength = _ref.maxLength,
        minLength = _ref.minLength,
        type = _ref.type;


    var oInput = useInputValue(value);

    var _useState3 = (0, _react.useState)(disabled),
        _useState4 = _slicedToArray(_useState3, 2),
        isBan = _useState4[0],
        setIsBan = _useState4[1];

    var _useState5 = (0, _react.useState)(error),
        _useState6 = _slicedToArray(_useState5, 2),
        isError = _useState6[0],
        setIsError = _useState6[1];

    (0, _react.useEffect)(function () {
        oInput.updateValue(value);
    }, [value]);

    (0, _react.useEffect)(function () {
        setIsBan(disabled);
    }, [disabled]);

    (0, _react.useEffect)(function () {
        setIsError(error);
    }, [isError]);

    return _react2.default.createElement('textarea', {
        value: oInput.value,
        style: style,
        type: type,
        className: (0, _classnames2.default)('x-input x-textarea', className, { 'x-input-error': isError }),
        disabled: isBan,
        placeholder: placeholder,
        minLength: minLength,
        maxLength: maxLength,
        onChange: function onChange(e) {
            oInput.onChange(e);
            _onChange && _onChange(e.target.value, e);
        },
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 13 && onEnter) {
                onEnter(e.target.value, e);
            }
        }
    });
}

Input.propTypes = {
    className: _propTypes2.default.string,
    propTypes: _propTypes2.default.string,
    style: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.bool,
    maxLength: _propTypes2.default.number,
    minLength: _propTypes2.default.number,
    type: _propTypes2.default.string,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onEnter: _propTypes2.default.func
};

Input.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    style: null,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onEnter: function onEnter() {}
};

exports.default = Input;
module.exports = exports['default'];