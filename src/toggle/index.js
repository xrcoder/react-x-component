import React from 'react';
import classnames from 'classnames';

function MenuContainer(props) {
    const {children, show, parentProps, className} = props;
    return (
        <div {...parentProps} className={classnames('x-toggle-menu', className)}
             style={{display: show ? 'flex' : 'none'}}>
            {children}
        </div>
    )
}

function MenuTarget(props) {
    return (
        <div {...props} className={classnames('x-toggle', props.className)}>{props.children}</div>
    )
}

export default {
    MenuContainer,
    MenuTarget
}
