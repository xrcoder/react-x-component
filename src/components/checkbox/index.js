// import './index.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';

function useCheckList(initialValue) {
    let [list, setList] = useState(initialValue);
    let updateData = (res) => {
        setList(res);
    };
    return {list, updateData};
}

function useCheckData(initialValue) {
    let [data, setData] = useState(initialValue);
    let onSelected = (res, fn) => {
        let selected = data.slice(0);
        let index = selected.indexOf(res.value);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(res.value);
        }
        setData(selected);
        fn(selected);
    };

    let updateData = (res) => {
        setData(res);
    }

    return {data, onSelected, updateData};
}

function Item({selected, data, onSelected}) {

    let isSelected = selected.indexOf(data.value) > -1;

    return (
        <div className={classnames('item', {selected: isSelected}, {'disabled': data.disabled})} onClick={() => {
            if (data.disabled) {
                return;
            }
            onSelected(data);
        }}>
            <span className="icon"></span>
            <span className="name">{data.label}</span>
        </div>
    )
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
        <div className={classnames('x-checkbox', className)} style={style}>
            {
                oList.list.map((item) => {
                    return (
                        <Item key={item.value} data={item} selected={oData.data} onSelected={(res) => {
                            oData.onSelected(res, onChange);
                        }}/>
                    )
                })
            }
        </div>
    )
}

CheckBox.propTypes = {
    classnames: PropTypes.string,
    data: PropTypes.array,
    selected: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func
}

CheckBox.defaultProps = {
    classnames: '',
    data: [],
    selected: [],
    style: null,
    onChange: function () {
    }
}

export default CheckBox;