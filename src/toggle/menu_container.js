import React from 'react';
import classnames from 'classnames';

export default function (props) {
    const {children, show, parentProps, className} = props;
    return (
        <div {...parentProps} className={classnames('x-toggle-menu', {'x-toggle-menu-show': show}, className)}>
            {children}
        </div>
    )
}
