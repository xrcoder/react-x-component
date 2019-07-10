import React from 'react';
import classnames from 'classnames';
import Modal from './modal';

export default (C, opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false,
        size: opt.size || 'md',
        className: classnames(opt.className),
        data: opt.data
    };

    return Modal(C, _opt)
}
