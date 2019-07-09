'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useCheckValue(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var updateValue = function updateValue(res) {
        setValue(res);
    };
    return { value: value, updateValue: updateValue };
}

function useCheckDisabled(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = _slicedToArray(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var updateValue = function updateValue(res) {
        setValue(res);
    };
    return { value: value, updateValue: updateValue };
}

function Item(_ref) {
    var className = _ref.className,
        style = _ref.style,
        disabled = _ref.disabled,
        label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange;


    var oValue = useCheckValue(value);
    var oDisabled = useCheckValue(disabled);
    var cls = (0, _classnames2.default)('x-checkbox-item', className, {
        'x-checkbox-selected': oValue.value
    }, {
        'x-checkbox-disabled': oDisabled.value
    });

    (0, _react.useEffect)(function () {
        oValue.updateValue(value);
    }, [value]);

    (0, _react.useEffect)(function () {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    return _react2.default.createElement(
        'div',
        { className: cls,
            style: style,
            onClick: function onClick(e) {
                if (disabled) {
                    return;
                }
                var v = !oValue.value;
                oValue.updateValue(v);
                onChange(e, v);
            } },
        _react2.default.createElement('span', { className: 'icon' }),
        _react2.default.createElement(
            'span',
            { className: 'name' },
            label
        )
    );
}

Item.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    label: _propTypes2.default.string,
    value: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

Item.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function onChange() {}
};

exports.default = Item;
module.exports = exports['default'];