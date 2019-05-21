'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toastManager = require('./toastManager');

var _toastManager2 = _interopRequireDefault(_toastManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notification = void 0;
var notice = function notice(type, msg) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
    var onClose = arguments[3];

    if (!notification) notification = _toastManager2.default;
    return notification.addNotice({ type: type, msg: msg, duration: duration, onClose: onClose });
};

exports.default = {
    info: function info(msg, duration, onClose) {
        return notice('info', msg, duration, onClose);
    },
    success: function success(msg, duration, onClose) {
        return notice('success', msg, duration, onClose);
    },
    error: function error(msg, duration, onClose) {
        return notice('error', msg, duration, onClose);
    },
    warning: function warning(msg, duration, onClose) {
        return notice('warning', msg, duration, onClose);
    }
};
module.exports = exports['default'];