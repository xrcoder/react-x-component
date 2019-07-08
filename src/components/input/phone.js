import React, {useState} from 'react';
import RegInput from './reg';

const Phone = (props) => {

    const [_value, setValue] = useState(props.value);

    return ( 
        <RegInput {...props} type={'text'} reg={/^[1]([3-9])[0-9]{9}$/} value={_value} onChange={(res)=>{
            let _res = res.replace(/[^\d]/g,'');
            setValue(_res);
            props.onChange(_res);
        }}/>
    )
};

export default Phone;