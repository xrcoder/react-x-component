'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import './index.scss';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Switch(props) {
    var style = props.style,
        className = props.className,
        status = props.status,
        onChange = props.onChange,
        disabled = props.disabled;

    var _useState = (0, _react.useState)(status),
        _useState2 = _slicedToArray(_useState, 2),
        isOn = _useState2[0],
        setIsOn = _useState2[1];

    var _useState3 = (0, _react.useState)(disabled),
        _useState4 = _slicedToArray(_useState3, 2),
        isDisabled = _useState4[0],
        setIsDisabled = _useState4[1];

    (0, _react.useEffect)(function () {
        setIsOn(status);
    }, [status]);

    (0, _react.useEffect)(function () {
        console.log(1);
        setIsDisabled(disabled);
    }, [disabled]);

    var cls = (0, _classnames2.default)('x-switch', { 'x-switch-off': !isOn }, { 'x-switch-disabled': isDisabled }, className);

    return _react2.default.createElement(
        'div',
        { style: style, className: cls, onClick: function onClick(e) {
                if (isDisabled) {
                    return;
                }
                setIsOn(!isOn);
                onChange(e, !isOn);
            } },
        _react2.default.createElement('span', { className: 'switch-btn' })
    );
}

Switch.propTypes = {
    classnames: _propTypes2.default.string,
    value: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};

Switch.defaultProps = {
    classnames: '',
    value: false,
    style: null,
    disabled: false,
    onChange: function onChange() {}
};

exports.default = Switch;
module.exports = exports['default'];