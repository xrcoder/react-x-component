import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Item from './item';

function useRadioList(initialValue) {
    let [list, setList] = useState(initialValue);
    let updateData = (res) => {
        setList(res);
    };
    return {list, updateData};
}

function useRadioData(initialValue = null) {
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
                            value={item.value === oValue.data.value}
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