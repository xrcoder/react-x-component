import NotificationDOM from './toastManager';

let notification;
const notice = (type, msg, duration = 2000, onClose) => {
    if (!notification) notification = NotificationDOM;
    return notification.addNotice({type, msg, duration, onClose});
};

export default {
    info(msg, duration, onClose) {
        return notice('info', msg, duration, onClose);
    },
    success(msg, duration, onClose) {
        return notice('success', msg, duration, onClose);
    },
    error(msg, duration, onClose) {
        return notice('error', msg, duration, onClose);
    },
    warning(msg, duration, onClose) {
        return notice('warning', msg, duration, onClose);
    }
};