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

function Input({placeholder, error, value = '', className, style, onChange, onEnter, onFocus, onBlur, disabled, maxLength, minLength, type}) {

    const oInput = useInputValue(value);
    const [isBan, setIsBan] = useState(disabled);
    const [isError, setIsError] = useState(error);

    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    useEffect(() => {
        setIsBan(disabled);
    }, [disabled]);

    useEffect(() => {
        setIsError(error);
    }, [isError]);

    return (
        <input
            value={oInput.value}
            style={style}
            type={type}
            className={classnames('x-input', className, {'x-input-error': isError})}
            disabled={isBan}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            onChange={(e) => {
                oInput.onChange(e);
                onChange && onChange(e.target.value, e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={(e) => {
                if (e.keyCode === 13 && onEnter) {
                    onEnter(e.target.value, e);
                }
            }}
        />
    )
}

Input.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    type: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func
}

Input.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    style: null,
    onChange: function () {
    },
    onFocus: function () {
    },
    onBlur: function () {
    },
    onEnter: function () {
    }
}

export default Input;