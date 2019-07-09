/**
 * Created by Rayr Lee on 2019/7/5.
 */

import React from 'react';
import classnames from 'classnames';

function Group(props) {
    return (
        <div className={classnames('x-form-group', props.className)}>
            {props.children}
        </div>
    );
}

export default Group;