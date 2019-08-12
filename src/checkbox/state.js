import React, {useState} from 'react';

export function useCheckValue(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

export function useCheckDisabled(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}
