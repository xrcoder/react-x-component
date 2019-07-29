import React, {useState} from 'react';

export function useValue(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

export function useDisabled(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

export function useRadioList(initialValue) {
    let [list, setList] = useState(initialValue);
    let updateData = (res) => {
        setList(res);
    };
    return {list, updateData};
}

export function useRadioData(initialValue = null) {
    let [data, setData] = useState(initialValue);

    let onSelected = (item, fn, e) => {
        setData(item);
        fn(item, e);
    };

    let updateData = (res) => {
        setData(res);
    }

    return {data, onSelected, updateData};
}
