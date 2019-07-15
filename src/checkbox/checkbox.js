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
    const {className, style, data, selected, onChange} = props;

    const oList = useCheckList(data.slice(0));
    const oData = useCheckData(selected.slice(0));

    useEffect(() => {
        oList.updateData(data);
    }, [data]);

    useEffect(() => {
        oData.updateData(selected);
    }, [selected]);

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
    data: PropTypes.array,
    selected: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func
}

CheckBox.defaultProps = {
    className: '',
    data: [],
    selected: [],
    style: null,
    onChange: function () {
    }
}

export default CheckBox;