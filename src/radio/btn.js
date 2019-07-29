import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button';

function useValue(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

function useDisabled(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

function Btn(props) {
    const {className, style, type = 'primary', size, label, value, disabled, onChange} = props;

    const oValue = useValue(value);
    const oDisabled = useDisabled(disabled);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    return (
        <Button
            style={style}
            type={type}
            disabled={oDisabled.value}
            inverse={!oValue.value}
            size={size}
            className={className}
            onClick={(e) => {
                if (disabled || oValue.value) {
                    return;
                }
                let v = !oValue.value;
                oValue.updateValue(v);
                onChange(e, v);
            }}>{label}</Button>
    )
}

Btn.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

Btn.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function () {
    }
}

export default Btn;
