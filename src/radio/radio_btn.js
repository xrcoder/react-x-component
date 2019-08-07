import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Btn from './btn';
import {ButtonGroup} from '../button';
import {useRadioData, useRadioList} from './use';

function Radio(props) {
    const {className, style, options, inverse, size, type, value, onChange} = props;

    const oList = useRadioList(options.slice(0));
    const oValue = useRadioData(value);

    useEffect(() => {
        oList.updateData(options.slice(0));
    }, [options]);

    useEffect(() => {
        if (!value) {
            oValue.updateData({});
        } else {
            oValue.updateData(value);
        }
    }, [value]);

    return (
        <ButtonGroup className={className} style={style} lax>
            {
                oList.list.map((item) => {
                    return (
                        <Btn
                            key={item.value}
                            label={item.label}
                            inverse={inverse}
                            size={size}
                            type={type}
                            disabled={item.disabled}
                            value={item.value === oValue.data.value}
                            onChange={(e) => {
                                oValue.onSelected(item, onChange, e);
                            }}
                        />
                    )
                })
            }
        </ButtonGroup>
    )
}

Radio.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    options: PropTypes.array,
    value: PropTypes.object,
    onChange: PropTypes.func
}

Radio.defaultProps = {
    className: '',
    style: null,
    options: [],
    value: null,
    onChange: function () {
    }
}

export default Radio;
