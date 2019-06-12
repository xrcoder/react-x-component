import React from 'react';
import classnames from 'classnames';
import Modal from './modal';
import XIcon from '../icon';
import XBtn from '../button';
import intl from 'react-intl-universal';
import loadLocales from '../locales/loadlocales';

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
                <XBtn type={data.okType} size={data.btnSzie} onClick={() => {
                    confirm();
                }}>{data.okText}</XBtn>
            </Footer>
        </div>
    );
}

export default (opt = {}) => {

    if(!window.localStorage.getItem('isStoragelocale')){
        loadLocales(opt.locale || 'zh_CN');
    }

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('x-modal-alert', opt.className),
        data: {
            tipsTitle: opt.tipsTitle || intl.get('KOF_REACT_X_COMPONENT_MODAL_TIPSTITLE').d(`系统提示`), //标题
            content: opt.content || intl.get('KOF_REACT_X_COMPONENT_MODAL_TIPSCONTENT').d(`您确定要执行此操作吗？`), //内容
            tipsIcon: opt.tipsIcon || 'alarm', //提示icon
            okText: opt.okText || intl.get('KOF_REACT_X_COMPONENT_MODAL_OKTEXT').d(`知道了`), //按钮文案
            okType: opt.okType || 'primary', //按钮类型
        },
    };
    return Modal(Alert, _opt)
}
