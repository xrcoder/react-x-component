import React from 'react';
import RegInput from './reg';

const Phone = (props) => {

    return ( 
        <RegInput {...props} type={'text'} reg={/^[1]([3-9])[0-9]{9}$/}/>
    )
};

export default Phone;