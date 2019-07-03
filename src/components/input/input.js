import React, {useCallback, useState} from 'react';
import classnames from 'classnames';

function useInputValue(initialValue) {
    let [value, setValue] = useState(initialValue);
    let onChange = useCallback(e => {
        setValue(e.currentTarget.value);
    }, []);
    return {value, onChange};
}


export default function ({placeholder, value = '', className, style, onChange, onEnter, onFocus, onBlur, disabled, maxLength}) {

    const oInput = useInputValue(value);

    return (
        <input
            value={oInput.value}
            style={style}
            className={classnames('x-input', className)}
            disabled={disabled}
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