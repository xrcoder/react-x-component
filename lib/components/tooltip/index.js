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

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import './index.scss';


var resizeThrottle = 100;
var resizeThreshold = 5;

var stopProp = function stopProp(e) {
    return e.stopPropagation();
};

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    _createClass(Tooltip, null, [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            return _Portal.isBrowser && nextProps.isOpen ? { hasBeenShown: true } : null;
        }
    }]);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this));

        _this.debounceTimeout = false;
        _this.hoverTimeout = false;


        _this.state = {
            showTip: false,
            hasHover: false,
            ignoreShow: false,
            hasBeenShown: false
        };

        _this.showTip = _this.showTip.bind(_this);
        _this.hideTip = _this.hideTip.bind(_this);
        _this.checkHover = _this.checkHover.bind(_this);
        _this.toggleTip = _this.toggleTip.bind(_this);
        _this.startHover = _this.startHover.bind(_this);
        _this.endHover = _this.endHover.bind(_this);
        _this.listenResizeScroll = _this.listenResizeScroll.bind(_this);
        _this.handleResizeScroll = _this.handleResizeScroll.bind(_this);
        return _this;
    }

    _createClass(Tooltip, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.isOpen) {
                this.setState({ isOpen: true });
            }

            window.addEventListener('resize', this.listenResizeScroll);
            window.addEventListener('scroll', this.listenResizeScroll);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(_, prevState) {
            if (!this.state.hasBeenShown && this.props.isOpen) {
                this.setState({ hasBeenShown: true });

                return setTimeout(this.showTip, 0);
            }
            if (!prevState.hasBeenShown && this.state.hasBeenShown) {
                this.showTip();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.listenResizeScroll);
            window.removeEventListener('scroll', this.listenResizeScroll);
            clearTimeout(this.debounceTimeout);
            clearTimeout(this.hoverTimeout);
        }
    }, {
        key: 'listenResizeScroll',
        value: function listenResizeScroll() {
            clearTimeout(this.debounceTimeout);

            this.debounceTimeout = setTimeout(this.handleResizeScroll, resizeThrottle);
        }
    }, {
        key: 'handleResizeScroll',
        value: function handleResizeScroll() {
            if (this.state.showTip) {
                var clientWidth = Math.round(document.documentElement.clientWidth / resizeThreshold) * resizeThreshold;
                this.setState({ clientWidth: clientWidth });
            }
        }
    }, {
        key: 'toggleTip',
        value: function toggleTip() {
            this.state.showTip ? this.hideTip() : this.showTip();
        }
    }, {
        key: 'showTip',
        value: function showTip() {
            if (!this.state.hasBeenShown) {
                return this.setState({ hasBeenShown: true });
            }

            this.setState({ showTip: true });
        }
    }, {
        key: 'hideTip',
        value: function hideTip() {
            this.setState({ hasHover: false });
            this.setState({ showTip: false });
        }
    }, {
        key: 'startHover',
        value: function startHover() {
            if (!this.state.ignoreShow) {
                this.setState({ hasHover: true });

                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
            }
        }
    }, {
        key: 'endHover',
        value: function endHover() {
            this.setState({ hasHover: false });
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
        }
    }, {
        key: 'checkHover',
        value: function checkHover() {
            this.state.hasHover ? this.showTip() : this.hideTip();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                arrow = _props.arrow,
                arrowSize = _props.arrowSize,
                className = _props.className,
                children = _props.children,
                content = _props.content,
                direction = _props.direction,
                eventOff = _props.eventOff,
                eventOn = _props.eventOn,
                eventToggle = _props.eventToggle,
                forceDirection = _props.forceDirection,
                isOpen = _props.isOpen,
                TagName = _props.tagName,
                tipContentHover = _props.tipContentHover,
                tipContentClassName = _props.tipContentClassName,
                useHover = _props.useHover,
                useStyle = _props.useStyle;


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
            var tipPortal = void 0;

            if (this.state.hasBeenShown) {
                var currentPositions = (0, _position2.default)(direction, forceDirection, this.tip, this.target, _extends({}, this.state, {
                    showTip: showTip
                }), {
                    arrow: arrow,
                    arrowSize: arrowSize
                });

                var tipStyles = _extends({}, currentPositions.tip);

                var arrowStyles = _extends({}, currentPositions.arrow);

                tipPortal = _react2.default.createElement(
                    _Portal2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        _extends({}, portalProps, {
                            className: typeof tipContentClassName !== 'undefined' ? tipContentClassName : className }),
                        _react2.default.createElement(
                            'div',
                            { className: 'x-tooltip', style: tipStyles, ref: function ref(tip) {
                                    _this2.tip = tip;
                                } },
                            content
                        ),
                        _react2.default.createElement('span', {
                            className: 'x-tooltip-arrow x-tooltip-' + currentPositions.realDirection + '-arrow',
                            style: arrowStyles })
                    )
                );
            }

            return _react2.default.createElement(
                TagName,
                props,
                children,
                tipPortal
            );
        }
    }]);

    return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
    arrow: _propTypes2.default.bool,
    arrowSize: _propTypes2.default.number,
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    content: _propTypes2.default.node.isRequired,
    direction: _propTypes2.default.string,
    eventOff: _propTypes2.default.string,
    eventOn: _propTypes2.default.string,
    eventToggle: _propTypes2.default.string,
    forceDirection: _propTypes2.default.bool,
    hoverDelay: _propTypes2.default.number,
    isOpen: _propTypes2.default.bool,
    tagName: _propTypes2.default.string,
    tipContentHover: _propTypes2.default.bool,
    tipContentClassName: _propTypes2.default.string,
    useHover: _propTypes2.default.bool
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
exports.default = Tooltip;
module.exports = exports['default'];