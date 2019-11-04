export default {
    pageApiConf: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'count',
                Type: 'number',
                Default: '0',
                Description: '分页总数'
            },
            {
                Name: 'currPage',
                Type: 'number',
                Default: '1',
                Description: '当前处于第几页'
            },
            {
                Name: 'pageSize',
                Type: 'number',
                Default: '10',
                Description: '每页显示数'
            },
            {
                Name: 'showPage',
                Type: 'number',
                Default: '3',
                Description: '多页数时，当处于中间页码的时候显示的页码个数，默认为3，此属性用得比较少'
            },
            {
                Name: 'className',
                Type: 'string',
                Default: '-',
                Description: '自定义样式class名'
            },
            {
                Name: 'onPageChange',
                Type: 'function',
                Default: '-',
                Description: '页码跳转的时候触发'
            }
        ]
    },
    sizeApiConf: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'pageSize',
                Type: 'number',
                Default: '10',
                Description: '每页显示数'
            },
            {
                Name: 'className',
                Type: 'string',
                Default: '-',
                Description: '自定义样式class名'
            },
            {
                Name: 'onPageSizeChange',
                Type: 'function',
                Default: '-',
                Description: '每页显示数改变时触发'
            },
            {
                Name: 'pageSizeOpt',
                Type: 'array',
                Default: '',
                Description: '分页页数选择器参数，选择每页可以设置的页码数，由对象数组构成，每个对象有key和label'
            },
            {
                Name: 'menuPlacement',
                Type: 'string',
                Default: 'bottom',
                Description: '分页选择器下拉选择框出现的位置（top|bottom|auto）auto表示根据上下页面的距离自适应距离展现下拉框'
            }
        ]
    },
    paginationApiConf: {
        headConf: ['Name', 'Type', 'Default', 'Description'],
        bodyConf: [
            {
                Name: 'count',
                Type: 'number',
                Default: '0',
                Description: '分页总数'
            },
            {
                Name: 'currPage',
                Type: 'number',
                Default: '1',
                Description: '当前处于第几页'
            },
            {
                Name: 'pageSize',
                Type: 'number',
                Default: '10',
                Description: '每页显示数'
            },
            {
                Name: 'showPage',
                Type: 'number',
                Default: '3',
                Description: '多页数时，当处于中间页码的时候显示的页码个数，默认为3，此属性用得比较少'
            },
            {
                Name: 'className',
                Type: 'string',
                Default: '-',
                Description: '自定义样式class名'
            },
            {
                Name: 'onPageChange',
                Type: 'function',
                Default: '-',
                Description: '页码跳转的时候触发'
            },
            {
                Name: 'className',
                Type: 'string',
                Default: '-',
                Description: '自定义样式class名'
            },
            {
                Name: 'onPageSizeChange',
                Type: 'function',
                Default: '-',
                Description: '每页显示数改变时触发'
            },
            {
                Name: 'pageSizeOpt',
                Type: 'array',
                Default: '',
                Description: '分页页数选择器参数，选择每页可以设置的页码数，由对象数组构成，每个对象有key和label'
            },
            {
                Name: 'style',
                Type: 'object',
                Default: 'null',
                Description: '自定义行内样式'
            },
            {
                Name: 'menuPlacement',
                Type: 'string',
                Default: 'bottom',
                Description: '分页选择器下拉选择框出现的位置（top|bottom|auto）auto表示根据上下页面的距离自适应距离展现下拉框'
            }
        ]
    }
}
