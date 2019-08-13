/**
 * Created by Rayr Lee on 2019/6/28.
 */

import React, { useState } from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

export default withRouter((props) => {
    const tabArr = [
        {
            'name': '首页',
            'pathname': '/app/component/home'
        },
        {
            'name': '组件',
            'pathname': '/app/component/button'
        },
        {
            'name': '文档',
            'pathname': '/app/doc/button'
        },
        {
            'name': '案例',
            'pathname': '/app/component/example'
        }
    ]

    const { pathname } = props.location;
    return (
        <>
            <a className="logo"></a>
            <ul className="nav">
                {
                    tabArr.map(item => {
                        return (
                            <li className={classnames({ 'active': pathname === item.pathname })}>
                                <Link to={{
                                    pathname: item.pathname
                                }}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
})