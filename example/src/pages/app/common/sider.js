/**
 * Created by Rayr Lee on 2019/6/28.
 */

import React from 'react';
import classnames from 'classnames';
import {Link, withRouter} from 'react-router-dom';

@withRouter
export default class extends React.Component {

    constructor(props) {
        super(props)
        const prefix = props.prefix;
        this.state = {
            menus: [
                {
                    name: 'Button 按钮',
                    pathname: `/${prefix}/button`
                },
                {
                    name: 'Grid 栅格化',
                    pathname: `/${prefix}/grid`
                },
                {
                    name: 'Icon 图标',
                    pathname: `/${prefix}/icon`
                },
                {
                    name: 'Toggle 视图开关',
                    pathname: `/${prefix}/toggle`
                },
                {
                    name: 'Form 表单',
                    pathname: `/${prefix}/form`
                },
                {
                    name: 'Pagination 分页',
                    pathname: `/${prefix}/pagination`
                },
                {
                    name: 'Tooltip 提示框',
                    pathname: `/${prefix}/tooltip`
                },
                {
                    name: 'Toast 消息和通知',
                    pathname: `/${prefix}/toast`
                },
                {
                    name: 'Box 容器',
                    pathname: `/${prefix}/box`
                },
                {
                    name: 'Checkbox 复选框',
                    pathname: `/${prefix}/checkbox`
                },
                {
                    name: 'Radio 单选框',
                    pathname: `/${prefix}/radio`
                },
                {
                    name: 'Select 选择框',
                    pathname: `/${prefix}/select`
                },
                {
                    name: 'Switch 开关',
                    pathname: `/${prefix}/switch`
                },
                {
                    name: 'Collapse 折叠框',
                    pathname: `/${prefix}/collapse`
                },
                {
                    name: 'Upload 上传',
                    pathname: `/${prefix}/upload`
                },
                {
                    name: 'Modal 模态框',
                    pathname: `/${prefix}/modal`
                },
                {
                    name: 'Remind 提醒',
                    pathname: `/${prefix}/remind`
                },
                {
                    name: 'Table 组件',
                    pathname: `/${prefix}/table`
                },
                {
                    name: 'Date 日历时间',
                    pathname: `/${prefix}/date`
                }
            ]
        }
    }

    render() {
        const {pathname} = this.props.location;
        return (
            <>
                <ul className="app-sider-menu">
                    <li className="header">基础组件</li>
                    {
                        this.state.menus.map((item, index) => {
                            return (
                                <li key={index} className={classnames({'active': pathname === item.pathname})}>
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
    }
}
