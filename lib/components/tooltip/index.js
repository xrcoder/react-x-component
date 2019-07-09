'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import './index.scss';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _portal = require('./portal');

var _portal2 = _interopRequireDefault(_portal);

var _position = require('./position');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultColor = '#fff';
var defaultBg = '#333';

var resizeThrottle = 100; //节流
var resizeThreshold = 5; //防抖

function useTipsPos() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        pos = _useState2[0],
        setPos = _useState2[1];

    var updateFn = function updateFn(res) {
        setPos(res);
    };

    return { pos: pos, updateFn: updateFn };
}

function Tooltip(props) {
    var children = props.children,
        TagName = props.tagName,
        tipClassName = props.tipClassName,
        content = props.content;

    var oTipsBox = (0, _react.useRef)();
    var oTipsTxt = (0, _react.useRef)();
    var tipStyle = useTipsPos({ left: 0, top: 0 });

    var oTipsTarget = null;

    (0, _react.useEffect)(function () {
        oTipsTarget = oTipsBox.current.childNodes[0];

        var _getTipsPos = (0, _position.getTipsPos)(oTipsTarget, oTipsTxt.current),
            tipLeft = _getTipsPos.tipLeft,
            tipTop = _getTipsPos.tipTop;

        tipStyle.updateFn({ left: tipLeft, top: tipTop });

        window.addEventListener('scroll', function () {
            console.log(1);
        });
    }, []);

    return _react2.default.createElement(
        TagName,
        { ref: oTipsBox },
        children,
        _react2.default.createElement(
            _portal2.default,
            null,
            _react2.default.createElement(
                'div',
                { ref: oTipsTxt, style: tipStyle.pos, className: (0, _classnames2.default)('x-tooltip', tipClassName) },
                content,
                _react2.default.createElement('span', { className: 'x-tooltip-arrow' })
            )
        )
    );
}

Tooltip.propTypes = {
    className: _propTypes2.default.string,
    tipClassName: _propTypes2.default.string,
    style: _propTypes2.default.object,
    tagName: _propTypes2.default.string
};

Tooltip.defaultProps = {
    className: '',
    tipClassName: '',
    style: null,
    tagName: 'div'
};

exports.default = Tooltip;
module.exports = exports['default'];