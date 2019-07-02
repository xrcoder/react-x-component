// import './index.scss';
import * as React from 'react';
import classnames from 'classnames';

export default (props) => {

    return (
        <div className={classnames('x-input-group', props.className)}>{props.children}</div>
    )
}