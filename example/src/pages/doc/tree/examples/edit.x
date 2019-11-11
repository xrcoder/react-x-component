import { DataTree } from 'react-x-component';

render() {
    return(
        <DataTree
            data={this.state.data}
            options={this.state.options}
            canEdit={true}
            canCheck={false}
            onNodeClicked={(e) => {
                console.log(e)
            }}
            onRemoveNode={(data, cb) => {
                cb('success')
                console.warn('执行删除， 成功后执行回调cb("success"），通知进行树删除')
            }}
            onAddNode={(data, cb) => {
                cb('success', new Date().getTime())
                console.warn('执行添加，成功后执行回调cb("success", id)，传递成功后的id通知树进行节点添加')
            }}
            onEditNode={(data, cb) => {
                cb('success')
                console.warn('执行编辑，通知后执行回调cb("success")，通知树节点进行节点更新');
            }}
        />
    )
}