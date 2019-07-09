'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToastify = require('react-toastify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Rayr Lee on 2019/7/1.
 */

// import 'react-toastify/dist/ReactToastify.css';
// import './index.scss';
function push(msg, opt) {
    var _opt = {
        hideProgressBar: true,
        type: 'info'
    };
    return (0, _reactToastify.toast)(msg, Object.assign(_opt, opt));
}

function notify(msg, type) {
    return (0, _reactToastify.toast)(msg, {
        hideProgressBar: true,
        type: type,
        closeButton: false,
        className: 'Toastify__toast-notify'
    });
}

exports.default = {
    Container: _reactToastify.ToastContainer, push: push, notify: notify
};
module.exports = exports['default'];