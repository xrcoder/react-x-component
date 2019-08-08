import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function useCheckValue(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

function useCheckDisabled(initialValue) {
    let [value, setValue] = useState(initialValue);
    let updateValue = (res) => {
        setValue(res);
    };
    return {value, updateValue};
}

function CheckItem({className, style, disabled, label, value, onChange}) {

    const oValue = useCheckValue(value);
    const oDisabled = useCheckDisabled(disabled);
    const cls = classnames('x-checkbox-item', className, {
        'x-checkbox-selected': oValue.value,
        'x-checkbox-disabled': oDisabled.value
    });

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    return (
        <div className={cls}
             style={style}
             onClick={(e) => {
                 if (disabled) {
                     return;
                 }
                 let v = !oValue.value;
                 oValue.updateValue(v);
                 onChange(e, v);
             }}>
            <span className="icon"></span>
            <span className="name">{label}</span>
        </div>
    )
}

CheckItem.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

CheckItem.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function () {
    }
}

export default CheckItem;
