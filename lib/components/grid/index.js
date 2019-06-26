'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = Row;
exports.Col = Col;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Row(_ref) {
    var children = _ref.children,
        className = _ref.className,
        style = _ref.style;


    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('x-row', className), style: style },
        children
    );
}

function Col(_ref2) {
    var children = _ref2.children,
        sm = _ref2.sm,
        md = _ref2.md,
        lg = _ref2.lg,
        className = _ref2.className,
        style = _ref2.style;


    var _sm = sm ? 'col-sm-' + sm : '',
        _md = md ? 'col-md-' + md : '',
        _lg = lg ? 'col-lg-' + lg : '';

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_sm, _md, _lg, className), style: style },
        children
    );
}

Row.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

Row.defaultProps = {
    className: '',
    style: null
};

Col.propTypes = {
    className: _propTypes2.default.string,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    style: _propTypes2.default.object
};

Col.defauleProps = {
    className: '',
    sm: null,
    md: null,
    lg: null,
    style: null
};