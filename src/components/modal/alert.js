import React from 'react';
import classnames from 'classnames';
import Modal from './modal';
import XIcon from '../icon';
import XBtn from '../button';

import Header from './header';
import Body from './body';
import Footer from './footer';

function Alert(props) {

    const {data, confirm, cancel} = props;

    return (
        <div className="x-modal-alert">
            <Header key="Header" {...props}></Header>
            <Body key="Body">
                <h4 className="title"><XIcon type={data.tipsIcon} />{data.tipsTitle}</h4>
                <div className="content">{data.content}</div>
            </Body>
            <Footer key="Footer">
                <XBtn type={data.CancelType} size={data.btnSzie} onClick={() => {
                    cancel();
                }}>{data.cancelText}</XBtn>
            </Footer>
        </div>
    );
}

export default (opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('x-modal-alert', opt.className),
        data: {
            tipsTitle: opt.tipsTitle || '系统提示', //标题
            content: opt.content || '您确定要执行此操作吗？', //内容
            tipsIcon: opt.tipsIcon || 'alarm', //提示icon
            cancelText: opt.cancelText || '关闭', //取消按钮文案
            CancelType: opt.CancelType || 'default', //取消按钮类型
        },
    };

    return Modal(Alert, _opt)
}
