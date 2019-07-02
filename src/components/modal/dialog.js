import React from 'react';
import classnames from 'classnames';
import Modal from './modal';

export default (C,opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'md', //确认框大小
        className: classnames('x-modal-dialog dialog', opt.className),
        data: opt.data
    };

    return Modal(C, _opt)
}
