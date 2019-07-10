import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XIcon from '../icon';
import XInput from '../input';
import XSelect from '../select';
import intl from 'react-intl-universal';
import loadLocales from '../locales/loadlocales';

class XPagination extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        currPage: PropTypes.number,
        pageSize: PropTypes.number,
        size: PropTypes.oneOf(['lg', 'md', 'sm']),
        showPage: PropTypes.number,
        className: PropTypes.string,
        onPageChange: PropTypes.func,
        onPageSizeChange: PropTypes.func,
        showJumpPage: PropTypes.bool,
        showPageSize: PropTypes.bool,
        locale: PropTypes.string
    }

    static defaultProps = {
        count: 0,
        currPage: 1,
        pageSize: 10,
        size: 'md',
        showPage: 3,//默认显示五个页码，多出来的...显示
        className: '',
        onPageChange: () => {
        },
        onPageSizeChange: () => {
        },
        showJumpPage: false,
        showPageSize: false,
        locale: 'zh_CN'
    }

    constructor(props) {
        super();
        this.state = {
            count: props.count,
            currPage: props.currPage,
            pageSize: props.pageSize,
            size: props.size,
            showPage: props.showPage,
            className: props.className,
            showJumpPage: props.showJumpPage,
            jumpPage: '',
            initDone: false
        };
    }

    componentDidMount() {
        if(window.localStorage.getItem('isStoragelocale')){
            this.setState({initDone: window.localStorage.getItem('initDone')});
        }else{
            loadLocales(this.props.locale).then(()=>{
                this.setState({initDone: true});
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.count !== null && nextProps.count !== 0) {
            let currPage = parseInt(nextProps.currPage);
            let count = parseInt(nextProps.count);
            this.setState({
                count: count,
                currPage: currPage,
                jumpPage: jumpPage
            }, () => {
                // this.onCurrPageChange(this.state.currPage);
            });
        } else {
            // count为0，即请求的数据为空的情况
            this.setState({
                count: 0
            });
        }
    }

    getTotalPage(pageSize, total) {
        // 获取分页数
        return Math.ceil(total / pageSize);
    }

    getPageList(len) {
        const {currPage, showPage} = this.state;
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

    onCurrPageChange(pageIndex) {
        let index = parseInt(pageIndex);
        let total = this.getTotalPage(this.state.pageSize, this.state.count);
        index = index > total ? total : index;
        this.setState({
            currPage: index,
            jumpPage: ''
        }, () => {
            this.props.onPageChange(index);
        });
    }

    onPageSizeChange(pageSize) {
        this.setState({
            pageSize: pageSize,
            currPage: 1,
            jumpPage: ''
        }, () => {
            this.props.onPageSizeChange(pageSize);
        });
    }

    onPageJump(pageIndex) {
        let index = parseInt(pageIndex);
        let total = this.getTotalPage(this.state.pageSize, this.state.count);
        index = index > total ? total : index;
        if (pageIndex !== "") {
            this.setState({
                currPage: index
            }, () => {
                this.props.onPageChange(index);
            });
        }
    }

    renderPagination() {
        const {count, currPage, pageSize, size, showPage, className, showJumpPage, jumpPage} = this.state;
        let pageSizeOpts = [
            {value: 5, label: 5},
            {value: 10, label: 10},
            {value: 20, label: 20},
            {value: 50, label: 50}];
        let totalPage = this.getTotalPage(pageSize, count);
        let pageList = this.getPageList(totalPage);
        if (count === 0 || count === null) {
            return null;
        } else {
            return (
                <div className={`${localStorage.getItem('direction')=='right'?'x-pagination-i18n':'x-pagination'} ${size} ${className}`}>
                    <ul className="x-pagination-list">
                        <li className={classnames('prev', {disabled: this.state.currPage == 1})}
                            onClick={() => {
                                if (this.state.currPage == 1) {
                                    return;
                                }
                                this.onCurrPageChange(this.state.currPage - 1)
                            }}>
                            <XIcon type={localStorage.getItem('direction')=='right'?'angle-right':'angle-left'} />{intl.get('KOF_REACT_X_COMPONENT_PAGINATION_PREVPAGE').d(`上一页`)}
                        </li>
                        {
                            pageList.map((item, index) => {
                                return <li key={`page_index_${index}`}
                                           className={classnames('page-item', {active: currPage == item}, {more: item == '...'})}
                                           onClick={() => {
                                               if (item !== '...') {
                                                   this.onCurrPageChange(item)
                                               }
                                           }}
                                >{item}</li>
                            })
                        }
                        <li className={classnames('next', {disabled: this.state.currPage == totalPage})}
                            onClick={() => {
                                if (this.state.currPage == totalPage) {
                                    return;
                                }
                                this.onCurrPageChange(this.state.currPage + 1)
                            }}>
                            {intl.get('KOF_REACT_X_COMPONENT_PAGINATION_NEXTPAGE').d(`下一页`)}
                            <XIcon type= {localStorage.getItem('direction')=='right'?'angle-left':'angle-right'}/>
                        </li>
                    </ul>
                    {
                        this.state.showJumpPage && <div className="goto-page">
                            <span>{intl.get('KOF_REACT_X_COMPONENT_PAGINATION_JUMPTO').d(`跳至`)}</span>
                            <XInput
                                placeholder="1"
                                value={jumpPage}
                                onChange={(res) => {
                                    // 检测不允许输入非数字
                                    let reg = /^[0-9]+$/g;
                                    if (res !== "") {
                                        // 输入不为空
                                        if (reg.test(res)) {
                                            reg.lastIndex = 0;
                                            let page = res > totalPage ? totalPage : res <= 0 ? 1 : res;//两端范围都要限制
                                            this.setState({
                                                jumpPage: page
                                            });
                                        }
                                    } else {
                                        this.setState({
                                            jumpPage: ""
                                        });
                                    }
                                }}
                                onEnter={this.onPageJump.bind(this)}
                                className="goto-input"/>
                            <span>{intl.get('KOF_REACT_X_COMPONENT_PAGINATION_PAGE').d(`页`)}</span>
                        </div>
                    }
                    {
                        this.props.showPageSize ? <div className="pagesize-change">
                            <div className={"pagination-select"}>
                                <XSelect
                                    selectedValue={this.state.pageSize}
                                    options={pageSizeOpts}
                                    size={"md"}
                                    onChange={(res) => {
                                        let pageSize = res.value;
                                        this.onPageSizeChange(pageSize);
                                    }}></XSelect>
                            </div>
                            <span>{intl.get('KOF_REACT_X_COMPONENT_PAGINATION_ITEMSPERPAGE').d(`条/页`)}</span>
                        </div> : ''
                    }
                </div>
            );
        }
    }

    render() {
        return (
            this.state.initDone !== false &&
            this.renderPagination()
        );
    }
}

export default XPagination;
