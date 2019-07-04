import React, {useCallback, useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function useInputValue(initialValue) {
    let [value, setValue] = useState(initialValue);

    let onChange = useCallback(e => {
        setValue(e.currentTarget.value);
    }, []);

    let updateValue = function (value) {
        setValue(value);
    }

    return {value, onChange, updateValue};
}


function Input({placeholder, value = '', className, style, onChange, onEnter, onFocus, onBlur, disabled, maxLength}) {

    const oInput = useInputValue(value);
    const [isBan, setIsBan] = useState(disabled);

    useEffect(() => {
        oInput.updateValue(value)
    }, [value]);

    useEffect(() => {
        setIsBan(disabled)
    }, [disabled]);

    return (
        <input
            value={oInput.value}
            style={style}
            className={classnames('x-input', className)}
            disabled={isBan}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={(e) => {
                oInput.onChange(e);
                onChange && onChange(e.target.value, e);
            }}
            onFocus={(e) => {
                onFocus && onFocus(e);
            }}
            onBlur={(e) => {
                onBlur && onBlur(e);
            }}
            onKeyDown={(e) => {
                if (e.keyCode === 13 && onEnter) {
                    onEnter(e.target.value, e);
                }
            }}
        />
    )
}

Input.propTypes = {
    classnames: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

Input.defaultProps = {
    classnames: '',
    disabled: false,
    style: null,
    onChange: function () {
    }
}

export default Input;