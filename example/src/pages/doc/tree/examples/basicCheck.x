import { DataTree } from 'react-x-component';

render() {
    return (
        <DataTree
            data={this.state.data}
            options={this.state.options}
            canCheck={true}
            onCurrentChange={(keys, nodes) => {
                console.log('选择的keys', keys)
                console.log('选择的nodes', nodes)
            }}
        />
    )
}