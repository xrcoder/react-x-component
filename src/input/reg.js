import React, {useState, useEffect} from 'react';
import Input from './input';

function RegInput(props) {
    const {className, value, reg, onChange} = props;

    let [regValue, setRegValue] = useState(value);
    let [resRule, setResRule] = useState(true);

    useEffect(() => {
        setRegValue(value);
        setResRule(reg.test(value))
    }, [value]);

    return (
        <Input{...props}
              value={regValue}
              className={className}
              error={Boolean(!resRule && regValue)}
              onChange={(res, e) => {
                  setRegValue(res);
                  onChange(res, resRule, e);
              }}
        />
    )
}

RegInput.defaultProps = {
    reg: /[\s\S]*/
}

export default RegInput;
