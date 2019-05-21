'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * name:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * date: 2018/12/29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author: kelvin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
// import './index.scss';


var XImageView = function (_React$Component) {
    _inherits(XImageView, _React$Component);

    function XImageView() {
        _classCallCheck(this, XImageView);

        return _possibleConstructorReturn(this, (XImageView.__proto__ || Object.getPrototypeOf(XImageView)).apply(this, arguments));
    }

    _createClass(XImageView, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                src = _props.src,
                size = _props.size,
                domRef = _props.domRef,
                otherProps = _objectWithoutProperties(_props, ['className', 'src', 'size', 'domRef']);

            return _react2.default.createElement('img', _extends({}, otherProps, { src: src, alt: '', className: (0, _classnames2.default)('x-image-view', className, size),
                ref: domRef ? domRef : '',
                onClick: function onClick() {
                    (0, _view2.default)(src).then(function () {}, function () {});
                }
            }));
        }
    }]);

    return XImageView;
}(_react2.default.Component);

XImageView.propTypes = {
    className: _propTypes2.default.string,
    src: _propTypes2.default.string,
    size: _propTypes2.default.string
};
XImageView.defaultProps = {
    className: '',
    src: '',
    size: 'md'
};
exports.default = XImageView;
module.exports = exports['default'];