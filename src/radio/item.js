import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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

function Item(props) {
    const {className, style, label, value, disabled, onChange} = props;

    const oValue = useValue(value);
    const oDisabled = useDisabled(disabled);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    const cls = classnames('x-radio-item', className, {
        'x-radio-item-selected': oValue.value,
        'x-radio-item-disabled': oDisabled.value
    });

    return (
        <div style={style} className={cls} onClick={(e) => {
            if (disabled || oValue.value) {
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

Item.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

Item.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: false,
    disabled: false,
    onChange: function () {
    }
}

export default Item;
