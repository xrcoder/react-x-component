'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Column;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Column(_ref) {
    var children = _ref.children,
        sm = _ref.sm,
        md = _ref.md,
        lg = _ref.lg,
        className = _ref.className;


    var _sm = sm ? 'col-sm-' + sm : '',
        _md = md ? 'col-md-' + md : '',
        _lg = lg ? 'col-lg-' + lg : '';

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_sm, _md, _lg, className) },
        children
    );
}

Column.defauleProps = {
    className: '',
    sm: '',
    md: '',
    lg: ''
};

Column.propTypes = {
    col: _propTypes2.default.number,
    className: _propTypes2.default.string,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number
};
module.exports = exports['default'];