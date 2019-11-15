export default {
    tableApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            { Name: 'className', Type: 'string', Default: '-', Description: '整个Table组件的样式自定义类名' },
            { Name: 'children', Type: 'React Component', Default: '-', Description: '传入到Table组件的子组件' }
        ]
    },
    tableHeadApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'props', Type: 'object', Default: 'null', Description: 'props包含所有可以传入的属性'
            },
            { Name: 'children', Type: 'React Component', Default: '-', Description: '传入组件的子组件' }
        ]
    },
    tableLabelApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'props', Type: 'object', Default: 'null', Description: 'props包含所有可以传入的属性'
            },
            {
                Name: 'className', Type: 'string', Default: '-', Description: '传入的自定义样式类名'
            },
            { Name: 'children', Type: 'React Component', Default: '-', Description: '传入组件的子组件' }
        ]
    }
}
