import React from 'react';
import classnames from 'classnames';

export default function (props) {
    return (
        <span {...props} className={classnames('x-table-label', props.className)}>{props.children}</span>
    )
}
