'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.scss';

var XToggle = function XToggle(props, children) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    var toggleEl = (0, _react.useRef)(null);

    (0, _react.useEffect)(function () {
        document.addEventListener('click', handleDocClick, false);
        return function cleanup() {
            document.removeEventListener('click', handleDocClick, false);
        };
    }, isOpen);

    (0, _react.useEffect)(function () {
        if (props.trigger === 'hover') {
            document.addEventListener('mouseover', handleDocTrigger, false);
            return function cleanup() {
                document.addEventListener('mouseover', handleDocTrigger, false);
            };
        }
    }, isOpen);

    var handleDocClick = function handleDocClick(e) {
        var top = toggleEl.current.children[0];

        if (top.contains(e.target)) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                // toggle关闭的回掉函数
                props.onClose();
            }
        } else {
            // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
            setIsOpen(false);
            props.onClose();
        }
    };

    var handleDocTrigger = function handleDocTrigger(e) {

        if (!(toggleEl.current && toggleEl.current.children.length > 0)) return;

        var top = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[0],
            box = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[1];

        if (top.contains(e.target) || box.contains(e.target)) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                // toggle关闭的回掉函数
                props.onClose();
            }
        } else {
            // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
            setIsOpen(false);
            props.onClose();
        }
    };

    return _react2.default.createElement(
        'div',
        { ref: toggleEl, className: 'x-toggle' + (isOpen ? ' open' : '') },
        _react2.default.createElement(
            'div',
            { className: 'x-toggle-top' },
            props.children
        ),
        _react2.default.createElement(
            'div',
            { className: 'x-toggle-box ' + props.placement },
            props.overlay
        )
    );
};

exports.default = XToggle;


XToggle.propTypes = {
    className: _propTypes2.default.string,
    onClose: _propTypes2.default.func,
    placement: _propTypes2.default.string
};

XToggle.defaultProps = {
    className: '',
    placement: 'bottomLeft',
    onClose: function onClose() {}
};
module.exports = exports['default'];