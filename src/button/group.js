import React from 'react';
import classnames from 'classnames';

function ButtonGroup(props) {
    const {children, style, className} = props;
    return (
        <div style={style} className={classnames('x-btn-group', className)}>{children}</div>
    )
}

export default ButtonGroup;
