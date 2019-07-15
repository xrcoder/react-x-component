import React from 'react';
import classnames from 'classnames';

import Page from './page';
import Size from './size';

const Pagination = (props) => {

    return (
        <div className={classnames('x-pagination', props.className)}>
            <Page count={props.count} currPage={props.currPage} pageSize={props.pageSize} onPageChange={(res) => {
                props.onPageChange && props.onPageChange(res);
            }} />
            <Size pageSize={props.pageSize} count={props.count} onPageSizeChange={(res) => {
                props.onPageSizeChange && props.onPageSizeChange(res)
            }} />
        </div>
    )

};

export default Pagination;
