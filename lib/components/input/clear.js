'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useClearBtn(value) {
    var _useState = (0, _react.useState)(value),
        _useState2 = _slicedToArray(_useState, 2),
        status = _useState2[0],
        setStatus = _useState2[1];

    var changeStatus = function changeStatus(res) {
        setStatus(res);
    };
    var updateStatus = function updateStatus(v) {
        if (v.length === 0) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };
    return { status: status, changeStatus: changeStatus, updateStatus: updateStatus };
}

function useInputValue(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = _slicedToArray(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var onChange = (0, _react.useCallback)(function (e) {
        setValue(e.currentTarget.value);
    }, []);

    var updateValue = function updateValue(value) {
        setValue(value);
    };

    return { value: value, onChange: onChange, updateValue: updateValue };
}

function Clear(props) {
    var style = props.style,
        className = props.className,
        _props$value = props.value,
        value = _props$value === undefined ? '' : _props$value,
        placeholder = props.placeholder,
        type = props.type,
        maxLength = props.maxLength,
        minLength = props.minLength,
        disabled = props.disabled,
        _onChange = props.onChange,
        onEnter = props.onEnter,
        _onFocus = props.onFocus,
        _onBlur = props.onBlur,
        onClear = props.onClear;

    var _useClearBtn = useClearBtn(false),
        status = _useClearBtn.status,
        changeStatus = _useClearBtn.changeStatus,
        updateStatus = _useClearBtn.updateStatus;

    var oInput = useInputValue(value);

    (0, _react.useEffect)(function () {
        oInput.updateValue(value);
    }, [value]);

    return _react2.default.createElement(
        _group2.default,
        { className: (0, _classnames2.default)(className), style: style },
        _react2.default.createElement(_input2.default, {
            placeholder: placeholder,
            type: type,
            maxLength: maxLength,
            minLength: minLength,
            disabled: disabled,
            value: oInput.value,
            onChange: function onChange(res, e) {
                updateStatus(res);
                oInput.onChange(e);
                _onChange && _onChange(res, e);
            },
            onFocus: function onFocus(e) {
                _onFocus && _onFocus(e);
                updateStatus(value || oInput.value);
            },
            onBlur: function onBlur(e) {
                changeStatus(false);
                _onBlur && _onBlur(e);
            },
            onEnter: onEnter
        }),
        _react2.default.createElement(_icon2.default, { className: (0, _classnames2.default)('clear-btn', { 'show': status }),
            name: 'times-circle',
            onClick: function onClick(e) {
                oInput.updateValue('');
                _onChange && _onChange('', e);
                onClear && onClear(e);
            }
        })
    );
}

exports.default = Clear;
module.exports = exports['default'];