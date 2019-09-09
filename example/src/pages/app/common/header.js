/**
 * Created by Rayr Lee on 2019/6/28.
 */

import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import classnames from 'classnames';

export default withRouter(function ({location}) {

    let pathname = location.pathname.split('/')[2];

    return (
        <>
            <a className="logo"></a>
            <ul className="nav">
                <li className={classnames({active: pathname === 'home'})}><Link to='/app/home'>首页</Link></li>
                <li className={classnames({active: pathname === 'component'})}><Link to='/app/component'>组件</Link></li>
                <li className={classnames({active: pathname === 'doc'})}><Link to='/app/doc'>文档</Link></li>
                <li className={classnames({active: pathname === 'demo'})}><Link to='/app/demo'>事例</Link></li>
            </ul>
        </>
    );
})
