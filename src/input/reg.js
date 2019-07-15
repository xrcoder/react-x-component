import React, {useState, useEffect} from 'react';
import classnames from 'classnames';

import Input from './input';

const RegInput = (props) => {

    const {value, className, reg, onChange} = props;

    let [_value, setValue] = useState(value);
    let [_isValid, setValid] = useState(true); //默认合法

    useEffect(() => {
        setValue(value);
        setValid(reg.test(value))
    });

    return (
        <Input
            {...props}
            value={_value}
            className={classnames(className, {'x-input-error': !_isValid && _value})}
            onChange={(res, e) => {
                setValue(res);
                onChange(res, _isValid, e);
            }}
        />
    )
};

RegInput.defaultProps = {
    reg: /[\s\S]*/
}

export default RegInput;