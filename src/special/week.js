import React from 'react';
import Select from '../select'
import Input from '../input'

export default function (props) {
    const {value, options, onChange} = props;
    return (
        <Input.Group>
            <Select.Single
                value={value}
                options={options}
                onChange={onChange}/>
        </Input.Group>
    )
}
