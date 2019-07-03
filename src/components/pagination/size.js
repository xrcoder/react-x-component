import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Select } from 'components';

const Size = (props) => {

    const { pageSize, count, className, pageSizeOpt } = props;

    const [_pageSize, setPageSize] = useState(pageSize);
    const [_count, setCount] = useState(count);

    React.useEffect(() => {
        if (count !== null && count !== 0) {
            let count1 = parseInt(count);
            setCount(count1);
        } else {
            setCount(0);
        }
        setPageSize(pageSize)
    }, [count, pageSize])

    let onPageSizeChange = (pageSize) => {
        setPageSize(pageSize);
        props.onPageSizeChange && props.onPageSizeChange(pageSize);
    }

    return (
        <div className={classnames('x-pagination-size', className)}>
            <div className="x-pagination-size-count">
                共 {count} 条
                    </div>
            <div className={"x-pagination-size-select"}>
                <Select
                    selectedValue={_pageSize}
                    options={pageSizeOpt}
                    size={"md"}
                    onChange={(res) => {
                        onPageSizeChange(res.value);
                    }}></Select>
            </div>
            <span>条/页</span>
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
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 30, label: 30 },
        { value: 50, label: 50 },
    ]
}
