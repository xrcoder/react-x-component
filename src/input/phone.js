import React, {useState, useEffect} from 'react';
import RegInput from './reg';

const filterValue = (val) => {

    let _reg = /^[0-9]*$/,
        _val = '';
    if (_reg.test(val)) {
        _val = val
    } else {
        _val = val.replace(/[^\d]/g, '')
    }
    return _val
}

const Phone = (props) => {

    const {value} = props;

    const [_value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(filterValue(value));
    }, [value]);

    return (
        <RegInput {...props} type={'text'} reg={/^[1]([3-9])[0-9]{9}$/} value={_value}/>
    )
};

export default Phone;
