/**
 * Created by Rayr Lee on 2019/7/1.
 */

import React from 'react';
import {ToastContainer as Container, toast} from 'react-toastify';

let toastId = null;

function push(msg, opt) {
    let _opt = {
        hideProgressBar: true,
        type: 'info',
        position: 'top-center',
        autoClose: 3000,
        closeButton: false,
        pauseOnFocusLoss: false,
        onClose: () => {
            toastId = null
        }
    };
    if (toastId) {
        return toast.update(toastId, {
            render: msg,
            ...Object.assign(_opt, opt)
        })
    } else {
        return toastId = toast(msg, Object.assign(_opt, opt));
    }
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
