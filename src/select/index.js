import React from 'react';
import classnames from 'classnames';
import Single from './single';

function Select() {
    return null;
}

Select.Single = function (props) {
    return (
        <Single {...props} isSearchable={false}/>
    )
};

Select.Multi = function (props) {
    return (
        <Single
            {...props}
            className={classnames('x-select-multi', props.className)}
            isMulti
            isSearchable
            isClearable={false}
        />
    )
}

export default Select;
