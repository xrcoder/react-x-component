import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Modal from './modal';
import Icon from '../icon';
import Button from '../button';

import Header from './header';
import Body from './body';
import Footer from './footer';
import intl from 'react-intl-universal';
import loadLocales from '../locales/loadlocales';

function Confirm(props) {

    const {data, confirm, cancel} = props;

    return (
        <div className="x-modal-confirm">
            <Header key="Header" {...props}></Header>
            <Body key="Body">
                <h4 className="title"><Icon type={data.tipsIcon} />{data.tipsTitle}</h4>
                <div className="content">{data.content}</div>
            </Body>
            <Footer key="Footer">
                <Button type={data.CancelType} size={data.btnSzie} onClick={() => {
                    cancel();
                }}>{data.cancelText}</Button>
                <Button type={data.ConfirmType} size={data.btnSzie} onClick={() => {
                    confirm();
                }}>{data.confirmText}</Button>
            </Footer>
        </div>
    );
}

export default (opt = {})=> {

    if(!window.localStorage.getItem('isStoragelocale')){
        loadLocales(opt.locale || 'zh_CN');
    }

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('x-modal-confirm', opt.className),
        data: {
            tipsTitle: opt.tipsTitle || intl.get('KOF_REACT_X_COMPONENT_MODAL_TIPSTITLE').d(`系统提示`), //标题
            content: opt.content || intl.get('KOF_REACT_X_COMPONENT_MODAL_TIPSCONTENT').d(`您确定要执行此操作吗？`), //内容
            ConfirmType: opt.ConfirmType || 'primary', //确认框类型
            CancelType: opt.CancelType || 'default', //取消按钮类型
            btnSzie: opt.btnSzie || 'md', //按钮大小
            confirmText: opt.confirmText || intl.get('KOF_REACT_X_COMPONENT_MODAL_CONFIRMTEXT').d(`确定`), //确认按钮文案
            cancelText: opt.cancelText || intl.get('KOF_REACT_X_COMPONENT_MODAL_CANCELTEXT').d(`取消`), //取消按钮文案
            tipsIcon: opt.tipsIcon || 'question', //提示icon
            isDisplayConfirm: opt.isDisplayConfirm || true, //是否展示确认按钮
            isDisplayCancel: opt.isDisplayCancel || true, //是否展示取消按钮
        }
    };

    return Modal(Confirm, _opt)
}
