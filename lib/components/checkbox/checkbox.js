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

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useCheckList(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];

    var updateData = function updateData(res) {
        setList(res);
    };
    return { list: list, updateData: updateData };
}

function useCheckData(initialValue) {
    var _useState3 = (0, _react.useState)(initialValue),
        _useState4 = _slicedToArray(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

    var onSelected = function onSelected(res, fn, e) {
        var selected = data.slice(0);
        var index = selected.indexOf(res.value);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(res.value);
        }
        setData(selected);
        fn(selected, e);
    };

    var updateData = function updateData(res) {
        setData(res);
    };

    return { data: data, onSelected: onSelected, updateData: updateData };
}

function CheckBox(props) {
    var className = props.className,
        style = props.style,
        data = props.data,
        selected = props.selected,
        _onChange = props.onChange;


    var oList = useCheckList(data.slice(0));
    var oData = useCheckData(selected.slice(0));

    (0, _react.useEffect)(function () {
        oList.updateData(data);
    }, [data]);

    (0, _react.useEffect)(function () {
        oData.updateData(selected);
    }, [selected]);

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-checkbox-group', className), style: style },
        oList.list.map(function (item) {
            var isSelected = oData.data.indexOf(item.value) > -1;
            return _react2.default.createElement(_item2.default, { key: item.value,
                label: item.label,
                disabled: item.disabled,
                value: isSelected,
                onChange: function onChange(e, res) {
                    oData.onSelected(item, _onChange, e);
                } });
        })
    );
}

CheckBox.propTypes = {
    className: _propTypes2.default.string,
    data: _propTypes2.default.array,
    selected: _propTypes2.default.array,
    style: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};

CheckBox.defaultProps = {
    className: '',
    data: [],
    selected: [],
    style: null,
    onChange: function onChange() {}
};

exports.default = CheckBox;
module.exports = exports['default'];