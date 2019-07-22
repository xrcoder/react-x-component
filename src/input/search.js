import React from 'react';
import Addon from './addon';
import {Button} from '../button';

export default (props) => {
    const {children, onSearch, btnType, disabled} = props;
    return (
        <Addon {...props} children={null} onSearch={null} btnType={null} render={() => {
            return (
                <Button type={btnType} disabled={disabled} onClick={onSearch}>{children}</Button>
            )
        }}/>
    )
};
