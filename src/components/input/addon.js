import React from 'react';
import classnames from 'classnames';

import Input from './input';
import Group from './group';

function Inner(props) {
    return (
        <React.Fragment>
            <Input {...props}/>
            <div className="group-addon-right">{props.render()}</div>
        </React.Fragment>
    )
}

export default (props) => {
    const {className, style} = props;
    return (
        <Group className={classnames('x-input-group-addon', className)} style={style}>
            <Inner {...props} className={null} style={null}/>
        </Group>
    )
};