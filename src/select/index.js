import React from 'react';
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
        <Single {...props} isMulti isSearchable isClearable={false}/>
    )
}

export default Select;


