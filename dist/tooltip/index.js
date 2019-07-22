(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "react", "prop-types", "./Portal", "./position"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/defineProperty"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/assertThisInitialized"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/inherits"), require("react"), require("prop-types"), require("./Portal"), require("./position"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.defineProperty, global.classCallCheck, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.createClass, global.inherits, global.react, global.propTypes, global.Portal, global.position);
    global.index = mod.exports;
  }
})(this, function (_exports, _extends2, _defineProperty2, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _createClass2, _inherits2, _react, _propTypes, _Portal, _position) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _Portal = _interopRequireWildcard(_Portal);
  _position = _interopRequireDefault(_position);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var resizeThrottle = 100;
  var resizeThreshold = 5;

  var stopProp = function stopProp(e) {
    return e.stopPropagation();
  };

  var Tooltip =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Tooltip, _React$Component);
    (0, _createClass2["default"])(Tooltip, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        return _Portal.isBrowser && nextProps.isOpen ? {
          hasBeenShown: true
        } : null;
      }
    }]);

    function Tooltip() {
      var _this;

      (0, _classCallCheck2["default"])(this, Tooltip);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tooltip).call(this));
      _this.debounceTimeout = false;
      _this.hoverTimeout = false;
      _this.state = {
        showTip: false,
        hasHover: false,
        ignoreShow: false,
        hasBeenShown: false
      };
      _this.showTip = _this.showTip.bind((0, _assertThisInitialized2["default"])(_this));
      _this.hideTip = _this.hideTip.bind((0, _assertThisInitialized2["default"])(_this));
      _this.checkHover = _this.checkHover.bind((0, _assertThisInitialized2["default"])(_this));
      _this.toggleTip = _this.toggleTip.bind((0, _assertThisInitialized2["default"])(_this));
      _this.startHover = _this.startHover.bind((0, _assertThisInitialized2["default"])(_this));
      _this.endHover = _this.endHover.bind((0, _assertThisInitialized2["default"])(_this));
      _this.listenResizeScroll = _this.listenResizeScroll.bind((0, _assertThisInitialized2["default"])(_this));
      _this.handleResizeScroll = _this.handleResizeScroll.bind((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(Tooltip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isOpen) {
          this.setState({
            isOpen: true
          });
        }

        window.addEventListener('resize', this.listenResizeScroll);
        window.addEventListener('scroll', this.listenResizeScroll);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(_, prevState) {
        if (!this.state.hasBeenShown && this.props.isOpen) {
          this.setState({
            hasBeenShown: true
          });
          return setTimeout(this.showTip, 0);
        }

        if (!prevState.hasBeenShown && this.state.hasBeenShown) {
          this.showTip();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.listenResizeScroll);
        window.removeEventListener('scroll', this.listenResizeScroll);
        clearTimeout(this.debounceTimeout);
        clearTimeout(this.hoverTimeout);
      }
    }, {
      key: "listenResizeScroll",
      value: function listenResizeScroll() {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(this.handleResizeScroll, resizeThrottle);
      }
    }, {
      key: "handleResizeScroll",
      value: function handleResizeScroll() {
        if (this.state.showTip) {
          var clientWidth = Math.round(document.documentElement.clientWidth / resizeThreshold) * resizeThreshold;
          this.setState({
            clientWidth: clientWidth
          });
        }
      }
    }, {
      key: "toggleTip",
      value: function toggleTip() {
        this.state.showTip ? this.hideTip() : this.showTip();
      }
    }, {
      key: "showTip",
      value: function showTip() {
        if (!this.state.hasBeenShown) {
          return this.setState({
            hasBeenShown: true
          });
        }

        this.setState({
          showTip: true
        });
      }
    }, {
      key: "hideTip",
      value: function hideTip() {
        this.setState({
          hasHover: false
        });
        this.setState({
          showTip: false
        });
      }
    }, {
      key: "startHover",
      value: function startHover() {
        if (!this.state.ignoreShow) {
          this.setState({
            hasHover: true
          });
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
        }
      }
    }, {
      key: "endHover",
      value: function endHover() {
        this.setState({
          hasHover: false
        });
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
      }
    }, {
      key: "checkHover",
      value: function checkHover() {
        this.state.hasHover ? this.showTip() : this.hideTip();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            arrow = _this$props.arrow,
            arrowSize = _this$props.arrowSize,
            className = _this$props.className,
            children = _this$props.children,
            content = _this$props.content,
            direction = _this$props.direction,
            eventOff = _this$props.eventOff,
            eventOn = _this$props.eventOn,
            eventToggle = _this$props.eventToggle,
            forceDirection = _this$props.forceDirection,
            isOpen = _this$props.isOpen,
            TagName = _this$props.tagName,
            tipContentHover = _this$props.tipContentHover,
            tipContentClassName = _this$props.tipContentClassName,
            useHover = _this$props.useHover,
            useStyle = _this$props.useStyle;
        var isControlledByProps = typeof isOpen !== 'undefined' && isOpen !== null;
        var showTip = isControlledByProps ? isOpen : this.state.showTip;
        var props = {
          ref: function ref(target) {
            _this2.target = target;
          },
          className: className,
          style: useStyle
        };
        var portalProps = {
          onClick: stopProp
        };

        if (eventOff) {
          props[eventOff] = this.hideTip;
        }

        if (eventOn) {
          props[eventOn] = this.showTip;
        }

        if (eventToggle) {
          props[eventToggle] = this.toggleTip;
        } else if (useHover && !isControlledByProps) {
          props.onMouseEnter = this.startHover;
          props.onMouseLeave = tipContentHover ? this.endHover : this.hideTip;
          props.onTouchStart = this.toggleTip;

          if (tipContentHover) {
            portalProps.onMouseEnter = this.startHover;
            portalProps.onMouseLeave = this.endHover;
            portalProps.onTouchStart = stopProp;
          }
        }

        var tipPortal;

        if (this.state.hasBeenShown) {
          var currentPositions = (0, _position["default"])(direction, forceDirection, this.tip, this.target, _objectSpread({}, this.state, {
            showTip: showTip
          }), {
            arrow: arrow,
            arrowSize: arrowSize
          });

          var tipStyles = _objectSpread({}, currentPositions.tip);

          var arrowStyles = _objectSpread({}, currentPositions.arrow);

          tipPortal = _react["default"].createElement(_Portal["default"], null, _react["default"].createElement("div", (0, _extends2["default"])({}, portalProps, {
            className: typeof tipContentClassName !== 'undefined' ? tipContentClassName : className
          }), _react["default"].createElement("div", {
            className: "x-tooltip",
            style: tipStyles,
            ref: function ref(tip) {
              _this2.tip = tip;
            }
          }, content), _react["default"].createElement("span", {
            className: "x-tooltip-arrow x-tooltip-".concat(currentPositions.realDirection, "-arrow"),
            style: arrowStyles
          })));
        }

        return _react["default"].createElement(TagName, props, children, tipPortal);
      }
    }]);
    return Tooltip;
  }(_react["default"].Component);

  Tooltip.propTypes = {
    arrow: _propTypes["default"].bool,
    arrowSize: _propTypes["default"].number,
    children: _propTypes["default"].node.isRequired,
    className: _propTypes["default"].string,
    content: _propTypes["default"].node.isRequired,
    direction: _propTypes["default"].string,
    eventOff: _propTypes["default"].string,
    eventOn: _propTypes["default"].string,
    eventToggle: _propTypes["default"].string,
    forceDirection: _propTypes["default"].bool,
    hoverDelay: _propTypes["default"].number,
    isOpen: _propTypes["default"].bool,
    tagName: _propTypes["default"].string,
    tipContentHover: _propTypes["default"].bool,
    tipContentClassName: _propTypes["default"].string,
    useHover: _propTypes["default"].bool
  };
  Tooltip.defaultProps = {
    arrow: true,
    arrowSize: 5,
    className: '',
    direction: 'up',
    eventOff: undefined,
    eventOn: undefined,
    eventToggle: undefined,
    forceDirection: false,
    hoverDelay: 200,
    isOpen: undefined,
    tagName: 'div',
    tipContentHover: false,
    tipContentClassName: undefined,
    useHover: true
  };
  var _default = Tooltip;
  _exports["default"] = _default;
  module.exports = exports.default;
});