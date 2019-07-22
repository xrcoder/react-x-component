import React from 'react';
import classnames from 'classnames';

function Close(props) {
    return (
        <div {...props} className={classnames('x-close', props.className)}></div>
    );
}

export default Close;
