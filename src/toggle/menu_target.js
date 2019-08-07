import React from 'react';
import classnames from 'classnames';

export default function (props) {
    return (
        <div {...props} className={classnames('x-toggle', props.className)}>{props.children}</div>
    )
}
