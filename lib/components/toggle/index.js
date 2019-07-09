'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './index.scss';


var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("x-toggle-header", this.props.className),
                    style: this.props.style },
                this.props.children
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var Body = function (_React$Component2) {
    _inherits(Body, _React$Component2);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)("x-toggle-body", this.props.className),
                    style: this.props.style },
                this.props.children
            );
        }
    }]);

    return Body;
}(_react2.default.Component);

var Toggle = function (_React$Component3) {
    _inherits(Toggle, _React$Component3);

    function Toggle() {
        _classCallCheck(this, Toggle);

        return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
    }

    _createClass(Toggle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-toggle-wrapper' },
                this.props.children
            );
        }
    }]);

    return Toggle;
}(_react2.default.Component);

Toggle.Header = Header;
Toggle.Body = Body;
;

exports.default = Toggle;

// const XToggle = (props, children) => {
//
//     const [isOpen, setIsOpen] = useState(false)
//     const toggleEl = useRef(null)
//
//     useEffect(() => {
//         document.addEventListener('click', handleDocClick, false)
//         return function cleanup() {
//             document.removeEventListener('click', handleDocClick, false)
//         }
//     }, isOpen)
//
//     useEffect(() => {
//         if (props.trigger === 'hover') {
//             document.addEventListener('mouseover', handleDocTrigger, false)
//             return function cleanup() {
//                 document.addEventListener('mouseover', handleDocTrigger, false)
//             }
//         }
//     }, isOpen)
//
//     const handleDocClick = (e) => {
//         let top = toggleEl.current.children[0]
//
//         if (top.contains(e.target)) {
//             setIsOpen(!isOpen)
//             if (!isOpen) {
//                 // toggle关闭的回掉函数
//                 props.onClose()
//             }
//         } else {
//             // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
//             setIsOpen(false)
//             props.onClose()
//         }
//     }
//
//     const handleDocTrigger = (e) => {
//
//         if (!(toggleEl.current && toggleEl.current.children.length > 0)) return
//
//         let top = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[0],
//             box = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[1]
//
//         if (top.contains(e.target) || box.contains(e.target)) {
//             setIsOpen(!isOpen)
//             if (!isOpen) {
//                 // toggle关闭的回掉函数
//                 props.onClose()
//             }
//         } else {
//             // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
//             setIsOpen(false)
//             props.onClose()
//         }
//     }
//
//     return (
//         <div ref={toggleEl} className={`x-toggle${isOpen ? ' open' : ''}`}>
//             <div className={`x-toggle-top`}>
//                 {props.children}
//             </div>
//             <div className={`x-toggle-box ${props.placement}`}>
//                 {props.overlay}
//             </div>
//         </div>
//     )
// }
//
// export default XToggle
//
// XToggle.propTypes = {
//     className: PropTypes.string,
//     onClose: PropTypes.func,
//     placement: PropTypes.string
// }
//
// XToggle.defaultProps = {
//     className: '',
//     placement: 'bottomLeft',
//     onClose: () => {
//     }
// }

module.exports = exports['default'];