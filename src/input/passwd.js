import React from 'react';
import RegInput from './reg';

const Passwd = (props) => {

    return ( 
        <RegInput {...props} type={'password'}/>
    )
};

export default Passwd;