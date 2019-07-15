import React from 'react';
import classnames from 'classnames';
import Group from './group';

function Name(props) {
    return (
        <label {...props} className={classnames('x-form-name', props.className)}>{props.children}</label>
    );
}


export default {
    Name,
    Group
}
