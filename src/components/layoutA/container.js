import React from 'react';
import classnames from 'classnames'

const XContainer = (props) => {
    return (
        <div className={classnames('x-a-container', props.className)}>{props.children}</div>
    )
}
export default XContainer;