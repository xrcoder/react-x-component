'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.scss';

var Tooltip = function Tooltip(_ref) {
    var children = _ref.children,
        className = _ref.className,
        position = _ref.position,
        content = _ref.content,
        style = _ref.style;


    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('x-tooltip', className), style: style },
        _react2.default.createElement(
            'span',
            { className: 'top' },
            children
        ),
        _react2.default.createElement(
            'span',
            { className: (0, _classnames2.default)('box', 'box-' + position) },
            content
        )
    );
};

exports.default = Tooltip;


Tooltip.propTypes = {
    position: _propTypes2.default.oneOf(['top', 'left', 'right', 'bottom']),
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

Tooltip.defaultProps = {
    position: 'top',
    className: '',
    style: null
};
module.exports = exports['default'];