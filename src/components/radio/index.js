// import './index.scss'
import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function useRadioList(initialValue) {
    let [list, setList] = useState(initialValue);
    let updateData = (res) => {
        setList(res);
    };
    return {list, updateData};
}

function useRadioData(initialValue = null) {
    let [data, setData] = useState(initialValue);

    let onSelected = (res, fn) => {
        setData(res.value);
        fn(res);
    };

    let updateData = (res) => {
        setData(res);
    }

    return {data, onSelected, updateData};
}

function Item({data, selected, onSelected}) {
    return (
        <div className={classnames('item', {selected: selected === data.value})} onClick={() => {
            onSelected(data);
        }}>
            <span className="icon"></span>
            <span className="name">{data.label}</span>
        </div>
    )
}

function Radio(props) {
    const {className, style, data, selected, onChange} = props;

    const oList = useRadioList(data.slice(0));
    const oData = useRadioData(selected);

    useEffect(() => {
        oList.updateData(data);
        oData.updateData(selected);
    }, [data, selected]);

    return (
        <div className={classnames('x-radio', className)} style={style}>
            {
                oList.list.map((item) => {
                    return <Item key={item.value} data={item} selected={oData.data} onSelected={(res) => {
                        oData.onSelected(res, onChange)
                    }}/>
                })
            }
        </div>
    )
}

Radio.propTypes = {
    classnames: PropTypes.string,
    data: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func
}

Radio.defaultProps = {
    classnames: '',
    data: [],
    style: null,
    onChange: function () {
    }
}

export default Radio;