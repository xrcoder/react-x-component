import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Page = (props, state) => {

    const { count, currPage, pageSize, showPage, className } = props;

    const [_count, setCount] = useState(count);
    const [_currPage, setCurrPage] = useState(currPage);
    const [_pageSize, setPageSize] = useState(pageSize);
    const [_showPage, setShowPage] = useState(showPage);

    useEffect(() => {
        if (count !== null && count !== 0) {
            let currPage = parseInt(currPage);
            let count1 = parseInt(count);
            setCount(count1);
            setCurrPage(currPage);
        } else {
            setCount(0);
        }
        setPageSize(pageSize)
    }, [count, currPage, pageSize])

    let getTotalPage = (pageSize, total) => {
        // 获取分页数
        return Math.ceil(total / pageSize);
    }

    let getPageList = (len) => {
        let pageList = [];
        if (len > showPage + 2) {
            pageList.push(1);
            if (currPage === 1) {
                // 当前页是首页
                for (let i = currPage + 1; i <= currPage + showPage; i++) {
                    pageList.push(i);
                }
                pageList.push('...');
            } else if (currPage === len) {
                // 当前页是最后一页
                pageList.push('...');
                for (let i = currPage - showPage; i < currPage; i++) {
                    pageList.push(i);
                }
            } else {
                // 当前页在中间的情况
                let offset = Math.floor(showPage / 2);
                if (currPage - offset > 2) {
                    pageList.push('...');
                }
                let first = currPage - offset > 2 ? currPage - offset : 2;
                let length = first + showPage > len ? len : first + showPage;
                let curr = first + showPage > len ? len - showPage : first;
                for (let i = curr; i < length; i++) {
                    pageList.push(i);
                }
                if (len - (length - 1) >= 2) {
                    pageList.push('...');
                }
            }
            pageList.push(len);
        } else {
            for (let i = 1; i <= len; i++) {
                pageList.push(i);
            }
        }
        return pageList;
    }

    let onCurrPageChange = (pageIndex) => {
        let index = parseInt(pageIndex);
        let total = getTotalPage(pageSize, count);
        index = index > total ? total : index;
        setCurrPage(index);
        props.onPageChange && props.onPageChange(index);
    }

    let renderPagination = () => {

        let totalPage = getTotalPage(pageSize, count);
        let pageList = getPageList(totalPage);

        if (count === 0 || count === null) {
            return null;
        } else {
            return (
                <ul className={classnames('x-pagination-page', className)}>
                    <li className={classnames('prev', { disabled: currPage == 1 })}
                        onClick={() => {
                            if (currPage == 1) {
                                return;
                            }
                            onCurrPageChange(currPage - 1)
                        }}>上一页
                        </li>
                    {
                        pageList.map((item, index) => {
                            return <li key={`page_index_${index}`}
                                className={classnames('page-item', { active: currPage == item }, { more: item == '...' })}
                                onClick={() => {
                                    if (item !== '...') {
                                        onCurrPageChange(item)
                                    }
                                }}
                            >{item}</li>
                        })
                    }
                    <li className={classnames('next', { disabled: currPage == totalPage })}
                        onClick={() => {
                            if (currPage == totalPage) {
                                return;
                            }
                            onCurrPageChange(currPage + 1)
                        }}>下一页
                        </li>
                </ul>
            );
        }
    }

    return renderPagination();

}

export default Page;

Page.propTypes = {
    count: PropTypes.number.isRequired,
    currPage: PropTypes.number,
    pageSize: PropTypes.number,
    showPage: PropTypes.number,
    className: PropTypes.string,
    onPageChange: PropTypes.func,
}

Page.defaultProps = {
    count: 0,
    currPage: 1,
    pageSize: 10,
    showPage: 3,//默认显示五个页码，多出来的...显示
    className: '',
}
