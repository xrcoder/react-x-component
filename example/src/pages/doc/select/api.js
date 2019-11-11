export default {
    singleApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'size', Type: 'string', Default: '', Description: ''
            },
            {
                Name: 'className', Type: 'string', Default: '', Description: 'select自定义样式类名'
            },
            {
                Name: 'disabled', Type: 'boolean', Default: 'false', Description: '是否禁用，默认false'
            },
            {
                Name: 'isClearable', Type: 'boolean', Default: 'false', Description: '是否可以清空，默认false'
            },
            {
                Name: 'value', Type: 'object', Default: 'null', Description: '选中的值'
            },
            {
                Name: 'placeholder', Type: 'string', Default: '', Description: ''
            },
            {
                Name: 'noOptionsMessage', Type: 'function', Default: '', Description: ''
            },
            {
                Name: 'options', Type: 'array', Default: '', Description: ''
            },
            {
                Name: 'menuIsOpen', Type: 'boolean', Default: '', Description: ''
            },
            {
                Name: 'menuPlacement', Type: 'string', Default: '', Description: ''
            },
            {
                Name: '', Type: '', Default: '', Description: ''
            }
        ]
    },
    multipleApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: []
    },
    searchApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: []
    }
}
