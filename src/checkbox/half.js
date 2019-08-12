import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {useCheckValue} from './state';

function CheckItem({className, style, label, value, onChange}) {

    const oValue = useCheckValue(value);
    const cls = classnames('x-checkbox-item', className, {
        'x-checkbox-selected': oValue.value === 'on',
        'x-checkbox-half': oValue.value === 'half'
    });

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    return (
        <div className={cls}
             style={style}
             onClick={(e) => {
                 let status = '';
                 if (oValue.value === 'off' || oValue.value === 'half') {
                     status = 'on';
                 } else {
                     status = 'off';
                 }
                 oValue.updateValue(status);
                 onChange(e, status);
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
    value: PropTypes.oneOf(['half', 'on', 'off']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

CheckItem.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: 'off',
    disabled: false,
    onChange: function () {
    }
}

export default CheckItem;
