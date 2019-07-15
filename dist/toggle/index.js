(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "react", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.propTypes, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _propTypes, _classnames) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  var Header =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Header, _React$Component);

    function Header() {
      (0, _classCallCheck2["default"])(this, Header);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Header).apply(this, arguments));
    }

    (0, _createClass2["default"])(Header, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])("x-toggle-header", this.props.className),
          style: this.props.style
        }, this.props.children);
      }
    }]);
    return Header;
  }(_react["default"].Component);

  var Body =
  /*#__PURE__*/
  function (_React$Component2) {
    (0, _inherits2["default"])(Body, _React$Component2);

    function Body() {
      (0, _classCallCheck2["default"])(this, Body);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Body).apply(this, arguments));
    }

    (0, _createClass2["default"])(Body, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])("x-toggle-body", this.props.className),
          style: this.props.style
        }, this.props.children);
      }
    }]);
    return Body;
  }(_react["default"].Component);

  var Toggle =
  /*#__PURE__*/
  function (_React$Component3) {
    (0, _inherits2["default"])(Toggle, _React$Component3);

    function Toggle() {
      (0, _classCallCheck2["default"])(this, Toggle);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Toggle).apply(this, arguments));
    }

    (0, _createClass2["default"])(Toggle, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          className: "x-toggle-wrapper"
        }, this.props.children);
      }
    }]);
    return Toggle;
  }(_react["default"].Component);

  Toggle.Header = Header;
  Toggle.Body = Body;
  ;
  var _default = Toggle; // const XToggle = (props, children) => {
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

  _exports["default"] = _default;
  module.exports = exports.default;
});