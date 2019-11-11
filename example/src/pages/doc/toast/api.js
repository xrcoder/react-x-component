export default {
    pushApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            { Name: 'message', Type: 'string', Default: '-', Description: '通知文字信息' },
            { Name: 'settings', Type: 'object', Default: '-', Description: '通知toast的类型参数，调用push方法的时候，可以不传此参数，则为默认样式' },
            { Name: 'settings.type', Type: 'string', Default: 'info', Description: '类型参数, 如果传该参数，样式为默认样式，可取以下值：(info | success | error | warning )' },
            { Name: 'settings.hideProgressBar', Type: 'boolean', Default: 'true', Description: '是否隐藏toast消失进度条，默认隐藏' },
            { Name: 'settings.position', Type: 'string', Default: 'top-center', Description: 'toast出现的位置，默认为顶部中间位置(top-center)，可取值：()' },
            { Name: 'settings.autoClose', Type: 'number', Default: '3000', Description: 'toast消息自动关闭的时间，单位：ms' },
            { Name: 'settings.closeButton', Type: 'boolean', Default: 'false', Description: '是否展示关闭按钮' },
            { Name: 'settings.pauseOnFocusLoss', Type: 'boolean', Default: 'false', Description: '是否在窗口失焦的时候，暂停定时器关闭计时器' }
        ]
    },
    notifyApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            { Name: 'message', Type: 'string', Default: '-', Description: '消息文字信息' },
            { Name: 'type', Type: 'string', Default: '-', Description: '该参数可以不传，不传即为默认样式，传参可以是一下几个值：(info | success | error | warning )' }
        ]
    }
}
