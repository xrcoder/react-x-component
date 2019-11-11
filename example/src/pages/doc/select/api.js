export default {
    singleApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
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
                Name: 'placeholder', Type: 'string', Default: '\'\'', Description: '初始化的时候占位文字描述'
            },
            {
                Name: 'noOptionsMessage', Type: 'function', Default: '-', Description: '没有任何选项的时候，下拉框显示的文字'
            },
            {
                Name: 'options', Type: 'array', Default: 'null', Description: '选择框的所有选项列表，格式：[{value: 0, label: \'选项1\'}]'
            },
            {
                Name: 'menuIsOpen', Type: 'boolean', Default: 'false', Description: '下拉框是否常开'
            },
            {
                Name: 'menuPlacement', Type: 'string', Default: 'bottom', Description: '下拉框出现的位置，可取一下值：(auto | bottom | top)'
            },
            {
                Name: 'isRtl', Type: 'boolean', Default: 'false', Description: '文字是否从右到左展示'
            },
            {
                Name: 'onChange', Type: 'function', Default: '-', Description: '选项发生变化后的回调函数，参数是被选择的选项'
            }
        ]
    },
    multipleApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'className', Type: 'string', Default: '', Description: 'select自定义样式类名'
            },
            {
                Name: 'disabled', Type: 'boolean', Default: 'false', Description: '是否禁用，默认false'
            },
            {
                Name: 'value', Type: 'object', Default: 'null', Description: '选中的值'
            },
            {
                Name: 'placeholder', Type: 'string', Default: '\'\'', Description: '初始化的时候占位文字描述'
            },
            {
                Name: 'noOptionsMessage', Type: 'function', Default: '-', Description: '没有任何选项的时候，下拉框显示的文字'
            },
            {
                Name: 'options', Type: 'array', Default: 'null', Description: '选择框的所有选项列表，格式：[{value: 0, label: \'选项1\'}]'
            },
            {
                Name: 'menuIsOpen', Type: 'boolean', Default: 'false', Description: '下拉框是否常开'
            },
            {
                Name: 'menuPlacement', Type: 'string', Default: 'bottom', Description: '下拉框出现的位置，可取一下值：(auto | bottom | top)'
            },
            {
                Name: 'isRtl', Type: 'boolean', Default: 'false', Description: '文字是否从右到左展示'
            },
            {
                Name: 'onChange', Type: 'function', Default: '-', Description: '选项发生变化后的回调函数，参数是被选择的选项'
            }
        ]
    },
    searchApi: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'className', Type: 'string', Default: '', Description: 'select自定义样式类名'
            },
            {
                Name: 'disabled', Type: 'boolean', Default: 'false', Description: '是否禁用，默认false'
            },
            {
                Name: 'value', Type: 'object', Default: 'null', Description: '选中的值'
            },
            {
                Name: 'placeholder', Type: 'string', Default: '\'\'', Description: '初始化的时候占位文字描述'
            },
            {
                Name: 'noOptionsMessage', Type: 'function', Default: '-', Description: '没有任何选项的时候，下拉框显示的文字'
            },
            {
                Name: 'options', Type: 'array', Default: 'null', Description: '选择框的所有选项列表，格式：[{value: 0, label: \'选项1\'}]'
            },
            {
                Name: 'menuIsOpen', Type: 'boolean', Default: 'false', Description: '下拉框是否常开'
            },
            {
                Name: 'menuPlacement', Type: 'string', Default: 'bottom', Description: '下拉框出现的位置，可取一下值：(auto | bottom | top)'
            },
            {
                Name: 'isRtl', Type: 'boolean', Default: 'false', Description: '文字是否从右到左展示'
            },
            {
                Name: 'onChange', Type: 'function', Default: '-', Description: '选项发生变化后的回调函数，参数是被选择的选项'
            }
        ]
    }
}
