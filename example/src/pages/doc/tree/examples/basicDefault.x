import { DataTree } from 'react-x-component';

render() {
    return (
        <DataTree
            data={this.state.data}
            options={this.state.options}
            canCheck={true}
            defaultCheckedKeys={[1, 2, 3]}
            defaultExpandedKeys={[1, 2, 3, 4, 5]}
        />
    )
}