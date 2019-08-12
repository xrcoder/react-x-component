import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './item';

function useCheckList(initialValue) {
    let [list, setList] = useState(initialValue);
    let updateData = (res) => {
        setList(res);
    };
    return {list, updateData};
}

function useCheckData(initialValue) {
    let [data, setData] = useState(initialValue);
    let onSelected = (res, fn, e) => {
        let selected = data.slice(0);
        let index = selected.indexOf(res.value);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(res.value);
        }
        setData(selected);
        fn(selected, e);
    };

    let updateData = (res) => {
        setData(res);
    }

    return {data, onSelected, updateData};
}

function CheckBox(props) {
    const {className, style, options, value, onChange} = props;

    const oList = useCheckList(options);
    const oData = useCheckData(value);

    useEffect(() => {
        oList.updateData(options);
    }, [options]);

    useEffect(() => {
        if (value === null) {
            oData.updateData([]);
        } else {
            oData.updateData(value);
        }
    }, [value]);

    return (
        <div className={classnames('x-checkbox-group', className)} style={style}>
            {
                oList.list.map((item) => {
                    let isSelected = oData.data.indexOf(item.value) > -1;
                    return (
                        <Item key={item.value}
                              label={item.label}
                              disabled={item.disabled}
                              value={isSelected}
                              onChange={(e, res) => {
                                  oData.onSelected(item, onChange, e);
                              }}/>
                    )
                })
            }
        </div>
    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func
}

CheckBox.defaultProps = {
    className: '',
    options: [],
    value: [],
    style: null,
    onChange: function () {
    }
}

export default CheckBox;
