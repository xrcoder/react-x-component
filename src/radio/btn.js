import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button';
import {useValue, useDisabled} from './use';

function Btn(props) {
    const {className, style, type = 'primary', inverse, size, label, value, disabled, onChange} = props;

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
            inverse={inverse ? oValue.value : !oValue.value}
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
    inverse: PropTypes.bool,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

Btn.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    inverse: true,
    disabled: false,
    onChange: function () {
    }
}

export default Btn;