/**
 * Created by Rayr Lee on 2019/7/1.
 */

// import 'react-toastify/dist/ReactToastify.css';
// import './index.scss';
import React from 'react';
import {ToastContainer as Container, toast} from 'react-toastify';

function push(msg, opt) {
    let _opt = {
        hideProgressBar: true,
        type: 'info'
    };
    return toast(msg, Object.assign(_opt, opt));
}

function notify(msg, type) {
    return toast(msg, {
        hideProgressBar: true,
        type: type,
        closeButton: false,
        className: 'Toastify__toast-notify'
    });
}

export default {
    Container, push, notify
};