// import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Portal, {isBrowser} from './Portal';
import positions from './position';

const resizeThrottle = 100;
const resizeThreshold = 5;

const stopProp = e => e.stopPropagation();

class Tooltip extends React.Component {
    static propTypes = {
        arrow: PropTypes.bool,
        arrowSize: PropTypes.number,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        content: PropTypes.node.isRequired,
        direction: PropTypes.string,
        eventOff: PropTypes.string,
        eventOn: PropTypes.string,
        eventToggle: PropTypes.string,
        forceDirection: PropTypes.bool,
        hoverDelay: PropTypes.number,
        isOpen: PropTypes.bool,
        tagName: PropTypes.string,
        tipContentHover: PropTypes.bool,
        tipContentClassName: PropTypes.string,
        useHover: PropTypes.bool,
    }

    static defaultProps = {
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
        useHover: true,
    }

    static getDerivedStateFromProps(nextProps) {
        return isBrowser && nextProps.isOpen ? {hasBeenShown: true} : null;
    }

    debounceTimeout = false;

    hoverTimeout = false;

    constructor() {
        super();

        this.state = {
            showTip: false,
            hasHover: false,
            ignoreShow: false,
            hasBeenShown: false,
        };

        this.showTip = this.showTip.bind(this);
        this.hideTip = this.hideTip.bind(this);
        this.checkHover = this.checkHover.bind(this);
        this.toggleTip = this.toggleTip.bind(this);
        this.startHover = this.startHover.bind(this);
        this.endHover = this.endHover.bind(this);
        this.listenResizeScroll = this.listenResizeScroll.bind(this);
        this.handleResizeScroll = this.handleResizeScroll.bind(this);
    }

    componentDidMount() {
        if (this.props.isOpen) {
            this.setState({isOpen: true});
        }

        window.addEventListener('resize', this.listenResizeScroll);
        window.addEventListener('scroll', this.listenResizeScroll);
    }

    componentDidUpdate(_, prevState) {
        if (!this.state.hasBeenShown && this.props.isOpen) {
            this.setState({hasBeenShown: true});

            return setTimeout(this.showTip, 0);
        }
        if (!prevState.hasBeenShown && this.state.hasBeenShown) {
            this.showTip();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listenResizeScroll);
        window.removeEventListener('scroll', this.listenResizeScroll);
        clearTimeout(this.debounceTimeout);
        clearTimeout(this.hoverTimeout);
    }

    listenResizeScroll() {
        clearTimeout(this.debounceTimeout);

        this.debounceTimeout = setTimeout(this.handleResizeScroll, resizeThrottle);
    }

    handleResizeScroll() {
        if (this.state.showTip) {
            const clientWidth = Math.round(document.documentElement.clientWidth / resizeThreshold) * resizeThreshold;
            this.setState({clientWidth});
        }
    }

    toggleTip() {
        this.state.showTip ? this.hideTip() : this.showTip();
    }

    showTip() {
        if (!this.state.hasBeenShown) {
            return this.setState({hasBeenShown: true});
        }

        this.setState({showTip: true});
    }

    hideTip() {
        this.setState({hasHover: false});
        this.setState({showTip: false});
    }

    startHover() {
        if (!this.state.ignoreShow) {
            this.setState({hasHover: true});

            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
        }
    }

    endHover() {
        this.setState({hasHover: false});
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = setTimeout(this.checkHover, this.props.hoverDelay);
    }

    checkHover() {
        this.state.hasHover ? this.showTip() : this.hideTip();
    }

    render() {
        const {
            arrow,
            arrowSize,
            className,
            children,
            content,
            direction,
            eventOff,
            eventOn,
            eventToggle,
            forceDirection,
            isOpen,
            tagName: TagName,
            tipContentHover,
            tipContentClassName,
            useHover,
            useStyle
        } = this.props;

        const isControlledByProps = typeof isOpen !== 'undefined' && isOpen !== null;
        const showTip = isControlledByProps ? isOpen : this.state.showTip;

        const props = {
            ref: (target) => {
                this.target = target;
            },
            className,
            style: useStyle
        };

        const portalProps = {
            onClick: stopProp,
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
        let tipPortal;

        if (this.state.hasBeenShown) {
            const currentPositions = positions(direction, forceDirection, this.tip, this.target, {
                ...this.state,
                showTip
            }, {
                arrow,
                arrowSize,
            });

            const tipStyles = {
                ...currentPositions.tip
            };

            const arrowStyles = {
                ...currentPositions.arrow
            };

            tipPortal = (
                <Portal>
                    <div {...portalProps}
                         className={typeof tipContentClassName !== 'undefined' ? tipContentClassName : className}>
                        <div className="x-tooltip" style={tipStyles} ref={(tip) => {
                            this.tip = tip;
                        }}>
                            {content}
                        </div>
                        <span
                            className={`x-tooltip-arrow x-tooltip-${currentPositions.realDirection}-arrow`}
                            style={arrowStyles}/>
                    </div>
                </Portal>
            );
        }

        return (
            <TagName {...props}>
                {children}
                {tipPortal}
            </TagName>
        );
    }
}

export default Tooltip;