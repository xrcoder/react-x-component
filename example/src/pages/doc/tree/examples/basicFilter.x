import { DataTree } from 'react-x-component';

render() {
    return(
        <DataTree
            data={this.state.data5}
            options={this.state.options}
            canCheck={true}
            canSearch={true}
        />
    )
}