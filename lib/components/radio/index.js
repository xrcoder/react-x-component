'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import './index.scss'


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRadioList(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];

    var updateData = function updateData(res) {
        setList(res);
    };
    return { list: list, updateData: updateData };
}

function useRadioData() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = _slicedToArray(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

    var onSelected = function onSelected(res, fn) {
        setData(res.value);
        fn(res);
    };

    var updateData = function updateData(res) {
        setData(res);
    };

    return { data: data, onSelected: onSelected, updateData: updateData };
}

function Item(_ref) {
    var data = _ref.data,
        selected = _ref.selected,
        onSelected = _ref.onSelected;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('item', { selected: selected === data.value }, { disabled: data.disabled }), onClick: function onClick() {
                !data.disabled && onSelected(data);
            } },
        _react2.default.createElement('span', { className: 'icon' }),
        _react2.default.createElement(
            'span',
            { className: 'name' },
            data.label
        )
    );
}

function Radio(props) {
    var className = props.className,
        style = props.style,
        data = props.data,
        selected = props.selected,
        onChange = props.onChange;


    var oList = useRadioList(data.slice(0));
    var oData = useRadioData(selected);

    (0, _react.useEffect)(function () {
        oList.updateData(data);
    }, [data]);

    (0, _react.useEffect)(function () {
        oData.updateData(selected);
    }, [selected]);

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-radio', className), style: style },
        oList.list.map(function (item) {
            return _react2.default.createElement(Item, { key: item.value, data: item, selected: oData.data, onSelected: function onSelected(res) {
                    oData.onSelected(res, onChange);
                } });
        })
    );
}

Radio.propTypes = {
    classnames: _propTypes2.default.string,
    data: _propTypes2.default.array,
    style: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};

Radio.defaultProps = {
    classnames: '',
    data: [],
    style: null,
    onChange: function onChange() {}
};

exports.default = Radio;
module.exports = exports['default'];