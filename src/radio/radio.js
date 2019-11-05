import React, {useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Item from './item';
import {useRadioData, useRadioList} from './use';

function Radio(props) {
    const {className, style, options, value, onChange} = props;

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
        <div className={classnames('x-radio', className)} style={style}>
            {
                oList.list.map((item) => {

                    return (
                        <Item
                            key={item.value}
                            label={item.label}
                            disabled={item.disabled}
                            value={item.value === (oValue.data && oValue.data.value)}
                            onChange={(e) => {
                                oValue.onSelected(item, onChange, e);
                            }}
                        />
                    )
                })
            }
        </div>
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
