import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from '../select';

const Size = (props) => {

    const {pageSize, count, className, menuPlacement, pageSizeOpt} = props;

    const [_pageSize, setPageSize] = useState(pageSize);
    const [_count, setCount] = useState(count);

    useEffect(() => {
        if (count !== null && count !== 0) {
            let count1 = parseInt(count);
            setCount(count1);
        } else {
            setCount(0);
        }
    }, [count])


    useEffect(() => {
        setPageSize(pageSize)
    }, [pageSize])


    let onPageSizeChange = (pageSize) => {
        setPageSize(pageSize);
        props.onPageSizeChange && props.onPageSizeChange(pageSize);
    }

    return (
        <div className={classnames('x-pagination-size', className)}>
            <div className="x-pagination-size-count">
                共 {count} 条
            </div>
            <Select.Single
                className={"x-pagination-size-select"}
                menuPlacement={menuPlacement}
                size={'sm'}
                value={{
                    value: _pageSize,
                    label: `${_pageSize}条/页`
                }}
                options={pageSizeOpt}
                onChange={(res) => {
                    onPageSizeChange(res.value);
                }}/>
        </div>
    )
};

export default Size;

Size.callerpropTypes = {
    pageSize: PropTypes.number,
    className: PropTypes.string,
    onPageSizeChange: PropTypes.func,
    pageSizeOpt: PropTypes.array
}

Size.defaultProps = {
    pageSize: 10,
    className: '',
    pageSizeOpt: [
        {value: 5, label: '5条/页'},
        {value: 10, label: '10条/页'},
        {value: 30, label: '30条/页'},
        {value: 50, label: '50条/页'},
        {value: 100, label: '100条/页'}
    ]
}
