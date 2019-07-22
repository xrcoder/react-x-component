import React from 'react';
import classnames from 'classnames';

export default (props) => {
    const {children} = props;
    return (
        <div className={classnames('x-button-group', props.className)}>
            {children}
        </div>
    )
}
