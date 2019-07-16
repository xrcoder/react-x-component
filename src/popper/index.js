import React from 'react';
import RcTooltip from 'rc-tooltip';

function Popper(props) {
    const {
        children,
        placement,
        content,
        trigger,
        overlayClassName,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayStyle
    } = props;
    return (
        <RcTooltip
            overlayClassName={overlayClassName}
            placement={placement}
            trigger={trigger}
            prefixCls={'x-popper'}
            mouseLeaveDelay={mouseLeaveDelay}
            mouseEnterDelay={mouseEnterDelay}
            overlayStyle={overlayStyle}
            overlay={content}>
            {children}
        </RcTooltip>
    )
}

export default Popper;
