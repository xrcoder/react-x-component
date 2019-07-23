import React from 'react';
import classnames from 'classnames';
import Modal from './modal';
import {Button} from '../button';

import Header from './header';
import Body from './body';
import Footer from './footer';

function Alert(props) {

    const {data, confirm, cancel} = props;

    return (
        <>
            <Header cancel={cancel}>{data.title}</Header>
            <Body>
                <div className="content">{data.content}</div>
            </Body>
            <Footer>
                <Button type="primary" onClick={confirm}>{data.confirmText}</Button>
            </Footer>
        </>
    );
}

export default (opt = {}) => {
    return Modal(Alert, {
        backDrop: opt.backDrop || true, //点击背景是否关闭
        className: classnames('x-modal-alert', opt.className),
        size: opt.size || 'sm',
        data: {
            title: opt.title || '系统提示', //标题
            content: opt.content || '请输入文本消息', //内容
            confirmText: opt.confirmText || '确认', //按钮文案
        }
    })
}
