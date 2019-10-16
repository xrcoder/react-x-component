import React from 'react';
import RcTooltip from 'rc-tooltip';

function Popper(props) {
    const {
        placement,
        content,
        trigger,
        overlayClassName,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayStyle,
        onVisibleChange
    } = props;

    return (
        <RcTooltip
            overlayClassName={overlayClassName}
            placement={placement}
            trigger={trigger}
            overlay={content}
            mouseLeaveDelay={mouseLeaveDelay}
            mouseEnterDelay={mouseEnterDelay}
            overlayStyle={overlayStyle}
            onVisibleChange={onVisibleChange}
            prefixCls={'x-popper'}
        >{props.children}
        </RcTooltip>
    )
}

export default Popper;
