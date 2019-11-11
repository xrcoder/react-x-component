import { DataTree } from 'react-x-component';

this.state = {
    data: [
        {
            id: 1,
            label: '一级 1',
            children: [{
                id: 2,
                label: '二级 1-1',
                children: [{
                    id: 3,
                    label: '三级 1-1-1'
                }]
            }]
        }, {
            id: 4,
            label: '一级 2',
            children: [{
                id: 5,
                label: '二级 2-1',
                children: [{
                    id: 6,
                    label: '三级 2-1-1'
                }]
            }, {
                id: 7,
                label: '二级 2-2',
                children: [{
                    id: 8,
                    label: '三级 2-2-1'
                }]
            }]
        }, {
            id: 9,
            label: '一级 3',
            children: [{
                id: 10,
                label: '二级 3-1',
                children: [{
                    id: 11,
                    label: '三级 3-1-1'
                }]
            }, {
                id: 12,
                label: '二级 3-2',
                children: [{
                    id: 13,
                    label: '三级 3-2-1'
                }]
            }]
        }],
    options: {
        children: 'children',
        label: 'label'
    }
}


render() {
    return (
        <DataTree 
            data={this.state.data}
            options={this.state.options}
            onNodeClicked={(e) => {
                console.log(e)
            }}
        />
    )
}