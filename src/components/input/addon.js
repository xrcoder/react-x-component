import React from 'react';
import classnames from 'classnames';
import Button from '../button';

import Input from './input';
import Group from './group';

export default (props) => {
    const {placeholder, value, className, size} = props;
    return (
        <Group className={classnames(className)}>
            <Input size={size} placeholder={placeholder} value={value}/>
            <div className="group-addon-right">{props.render()}</div>
        </Group>
    )
};
