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
                <Button type="primary" inverse={true} onClick={cancel}>{data.cancelText}</Button>
            </Footer>
        </>
    );
}

export default (opt = {}) => {
    return Modal(Alert, {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm',
        className: classnames('x-modal-confirm', opt.className),
        data: {
            title: opt.title || '系统提示', //标题
            content: opt.content || '您确定要执行此操作吗？', //内容
            confirmText: opt.confirmText || '确认', //按钮文案
            cancelText: opt.cancelText || '取消', //按钮文案
        }
    })
}
