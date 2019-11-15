export default {
    iconApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [{ Name: 'name', Type: 'string', Default: '-', Description: 'icon的名字，默认使用font-awesome图标库，所以这里支持的是font-awesome图标库里面的图标' }, { Name: 'onClick', Type: 'function', Default: 'null', Description: '点击事件' }, { Name: 'className', Type: 'string', Default: '-', Description: '样式类名' }]
    }
}
