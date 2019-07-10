import getDirection from './direction';

export const minArrowPadding = 5;
const bodyPadding = 0;
const noArrowDistance = 3;

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function getTipMaxWidth() {
    return (typeof document !== 'undefined') ? document.documentElement.clientWidth - (bodyPadding * 2) : 1000;
}

function parseAlignMode(direction) {
    const directionArray = direction.split('-');
    if (directionArray.length > 1) {
        return directionArray[1];
    }
    return 'middle';
}

export function getArrowSpacing(props) {
    const defaultArrowSpacing = props.arrow ? props.arrowSize : noArrowDistance;
    return typeof props.distance === 'number' ? props.distance : defaultArrowSpacing;
}

function getUpDownPosition(tip, target, state, direction, alignMode, props) {
    let left = -10000000;
    let top;

    const transform = state.showTip ? undefined : 'translateX(-10000000px)';

    const arrowSpacing = getArrowSpacing(props);

    if (tip) {

        const scrollLeft = getScrollLeft();
        const targetRect = target.getBoundingClientRect();
        const targetLeft = targetRect.left + scrollLeft;

        const halfTargetWidth = Math.round(target.offsetWidth / 2);
        const tipWidth = Math.min(getTipMaxWidth(), tip.offsetWidth);
        const arrowCenter = targetLeft + halfTargetWidth;
        const arrowLeft = arrowCenter - props.arrowSize;
        const arrowRight = arrowCenter + props.arrowSize;

        if (alignMode === 'start') {
            left = props.arrow ? Math.min(arrowLeft, targetLeft) : targetLeft;
        } else if (alignMode === 'end') {
            const rightWithArrow = Math.max(arrowRight, (targetLeft + target.offsetWidth));
            const rightEdge = props.arrow ? rightWithArrow : (targetLeft + target.offsetWidth);
            left = Math.max(rightEdge - tipWidth, bodyPadding + scrollLeft);
        } else {
            const centeredLeft = (targetLeft + halfTargetWidth) - Math.round(tipWidth / 2);
            const availableSpaceOnLeft = bodyPadding + scrollLeft;
            left = Math.max(centeredLeft, availableSpaceOnLeft);
        }

        const rightOfTip = left + tipWidth;
        const rightOfScreen = (scrollLeft + document.documentElement.clientWidth) - bodyPadding;
        const rightOverhang = rightOfTip - rightOfScreen;
        if (rightOverhang > 0) {
            left -= rightOverhang;
        }

        if (direction === 'up') {
            top = (targetRect.top + getScrollTop()) - (tip.offsetHeight + arrowSpacing);
        } else {
            top = targetRect.bottom + getScrollTop() + arrowSpacing;
        }
    }

    return {
        left,
        top,
        transform,
    };
}

function getLeftRightPosition(tip, target, state, direction, alignMode, props) {
    let left = -10000000;
    let top = 0;

    const transform = state.showTip ? undefined : 'translateX(-10000000px)';

    const arrowSpacing = getArrowSpacing(props);
    const arrowPadding = props.arrow ? minArrowPadding : 0;

    if (tip) {
        const scrollTop = getScrollTop();
        const scrollLeft = getScrollLeft();
        const targetRect = target.getBoundingClientRect();
        const targetTop = targetRect.top + scrollTop;
        const halfTargetHeight = Math.round(target.offsetHeight / 2);
        const arrowTop = (targetTop + halfTargetHeight) - props.arrowSize;
        const arrowBottom = targetRect.top + scrollTop + halfTargetHeight + props.arrowSize;

        if (alignMode === 'start') {
            top = props.arrow ? Math.min(targetTop, arrowTop) : targetTop;
        } else if (alignMode === 'end') {
            const topForBottomAlign = (targetRect.bottom + scrollTop) - tip.offsetHeight;
            top = props.arrow ? Math.max(topForBottomAlign, arrowBottom - tip.offsetHeight) : topForBottomAlign;
        } else {
            const centeredTop = Math.max((targetTop + halfTargetHeight) - Math.round(tip.offsetHeight / 2), bodyPadding + scrollTop);
            top = Math.min(centeredTop, arrowTop - arrowPadding);
        }

        const bottomOverhang = ((top - scrollTop) + tip.offsetHeight + bodyPadding) - window.innerHeight;
        if (bottomOverhang > 0) {
            top = Math.max(top - bottomOverhang, (arrowBottom + arrowPadding) - tip.offsetHeight);
        }

        if (direction === 'right') {
            left = targetRect.right + arrowSpacing + scrollLeft;
        } else {
            left = (targetRect.left - arrowSpacing - tip.offsetWidth) + scrollLeft;
        }
    }

    return {
        left,
        top,
        transform,
    };
}

function getArrowStyles(target, tip, direction, state, props) {
    if (!target || !props.arrow) {
        return {
            top: '0',
            left: '-10000000px',
        };
    }

    const targetRect = target.getBoundingClientRect();
    const halfTargetHeight = Math.round(target.offsetHeight / 2);
    const halfTargetWidth = Math.round(target.offsetWidth / 2);
    const scrollTop = getScrollTop();
    const scrollLeft = getScrollLeft();
    const arrowSpacing = getArrowSpacing(props);
    const borderStyles = {};

    switch (direction) {
        case 'right':
            borderStyles.borderTop = `${props.arrowSize}px solid transparent`;
            borderStyles.borderBottom = `${props.arrowSize}px solid transparent`;

            borderStyles.borderRightWidth = `${props.arrowSize}px`;
            borderStyles.borderRightStyle = 'solid';

            return {
                ...borderStyles,
                top: (state.showTip && tip) ? (targetRect.top + scrollTop + halfTargetHeight) - props.arrowSize : '-10000000px',
                left: (targetRect.right + scrollLeft + arrowSpacing) - props.arrowSize,
            };

        case 'left':
            borderStyles.borderTop = `${props.arrowSize}px solid transparent`;
            borderStyles.borderBottom = `${props.arrowSize}px solid transparent`;

            borderStyles.borderLeftWidth = `${props.arrowSize}px`;
            borderStyles.borderLeftStyle = 'solid';

            return {
                ...borderStyles,
                top: (state.showTip && tip) ? (targetRect.top + scrollTop + halfTargetHeight) - props.arrowSize : '-10000000px',
                left: (targetRect.left + scrollLeft) - arrowSpacing - 1,
            };

        case 'up':
            borderStyles.borderLeft = `${props.arrowSize}px solid transparent`;
            borderStyles.borderRight = `${props.arrowSize}px solid transparent`;

            borderStyles.borderTopWidth = `${props.arrowSize}px`;
            borderStyles.borderTopStyle = 'solid';

            return {
                ...borderStyles,
                left: (state.showTip && tip) ? (targetRect.left + scrollLeft + halfTargetWidth) - props.arrowSize : '-10000000px',
                top: (targetRect.top + scrollTop) - arrowSpacing,
            };

        case 'down':
        default:
            borderStyles.borderLeft = `${props.arrowSize}px solid transparent`;
            borderStyles.borderRight = `${props.arrowSize}px solid transparent`;

            borderStyles.borderBottomWidth = `${props.arrowSize}px`;
            borderStyles.borderBottomStyle = 'solid';

            return {
                ...borderStyles,
                left: (state.showTip && tip) ? (targetRect.left + scrollLeft + halfTargetWidth) - props.arrowSize : '-10000000px',
                top: (targetRect.bottom + scrollTop + arrowSpacing) - props.arrowSize,
            };
    }
}

export default function positions(direction, forceDirection, tip, target, state, props) {
    const alignMode = parseAlignMode(direction);
    const trimmedDirection = direction.split('-')[0];

    let realDirection = trimmedDirection;
    if (!forceDirection && tip) {
        const testArrowStyles = props.arrow && getArrowStyles(target, tip, trimmedDirection, state, props);
        realDirection = getDirection(trimmedDirection, tip, target, props, bodyPadding, testArrowStyles);
    }

    const tipPosition = (realDirection === 'up' || realDirection === 'down')
        ? getUpDownPosition(tip, target, state, realDirection, alignMode, props)
        : getLeftRightPosition(tip, target, state, realDirection, alignMode, props);

    return {
        tip: {
            ...tipPosition
        },
        arrow: getArrowStyles(target, tip, realDirection, state, props),
        realDirection,
    };
}
