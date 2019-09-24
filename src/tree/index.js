import * as React from 'react';
import { Tree } from 'element-react';
import Input from '../input';
import Tooltip from '../tooltip';

let tmpItem = null;
let treeId = -1;

class DataTree extends React.Component {
    tmpItem; //临时节点
    store; //树的store
    editType; //编辑类型 add or edit
    parentId; //当前父节点ID
    tree;

    cancelFn = this.cancelEditAll.bind(this);

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isEditing: false,
            inEditingItemValue: ''
        };
    }

    componentDidMount() {
        if (this.props.canEdit) {
            document.addEventListener('click', this.cancelFn, false);
        }
    }

    componentWillUnmount() {
        if (this.props.canEdit) {
            document.removeEventListener('click', this.cancelFn, false);
        }
    }

    static getDerivedStateFromProps(nextProps, preState) {
        if (preState.data !== nextProps.data) {
            return {
                data: nextProps.data
            };
        }
        return null;
    }

    /**
     * 全局取消操作
     * @param e
     */

    cancelEditAll(e) {
        const treeNode = this.refs.dataTree;
        if (!treeNode.contains(e.target) && this.state) {
            this.setState({
                isEditing: false,
                inEditingItemValue: ''
            });
            if (tmpItem) {
                tmpItem.isEditing = false;
                if (this.editType === 'add') {
                    this.store.remove(tmpItem);
                    tmpItem = null;
                }
                this.forceUpdate();
            }
        }
    }

    /**
     * 添加操作
     * @param store
     * @param data
     * @param nodeModel
     */
    append(store, data, nodeModel) {
        // 未展开，展开
        if (!nodeModel.expanded) {
            nodeModel.expanded = true;
        }
        tmpItem = {
            id: treeId--,
            label: 'temp',
            children: [],
            isEditing: true
        };
        if (data.tag !== undefined && data.tag === 0) {
            tmpItem.tag = 1;
        }
        if (this.props.nodeKey && this.props.nodeKey === 'treeId') {
            tmpItem.treeId = tmpItem.id + '_' + tmpItem.tag;
        }
        nodeModel.store.append(tmpItem, data);
        this.setState({
            isEditing: true,
            inEditingItemValue: ''
        });
        this.editType = 'add';
        this.parentId = data.id;
        this.forceUpdate();
        setTimeout(() => {
            document.querySelector('.operation-bar.show-op').scrollIntoView(false)
            const input = document.querySelectorAll('.operation-bar.show-op input');
            input[0].focus();
        }, 300);
    }
    /**
     * 删除操作
     * @param store
     * @param data
     */
    remove(store, data) {
        this.props.onRemoveNode(data, (res, list) => {
            if (res === 'success') {
                if (this.props.nodeKey && this.props.nodeKey === 'treeId') {
                    const key = data.id + '_' + data.tag;
                    store.nodesMap[key].visible = false;
                } else {
                    // 直接删报错，姑且隐藏吧
                    store.nodesMap[data.id].visible = false;
                }
                this.forceUpdate();
            }
        });
    }
    /**
     * 编辑操作
     * @param store
     * @param data
     */
    doEdit(store, data, nodeModel) {
        this.setState({
            isEditing: true,
            inEditingItemValue: data.label
        });
        data.isEditing = true;
        this.editType = 'edit';
        tmpItem = data;
        setTimeout(() => {
            const input = document.querySelectorAll('.operation-bar.show-op input');
            input[0].focus();
        }, 300);
    }
    /**
     * 单项后的取消操作
     * @param store
     * @param data
     */
    cancelEdit(store, data) {
        this.setState({
            isEditing: false,
            inEditingItemValue: ''
        });
        data.isEditing = false;
        if (tmpItem) {
            if (this.editType === 'add') {
                this.store.remove(data);
            }
            this.forceUpdate();
        }
    }
    /**
     * 确认操作，add or edit
     * @param store
     * @param data
     */
    confirmEdit(store, data) {
        if (this.editType === 'add') {
            this.props.onAddNode(
                {
                    parentId: this.parentId || '-1',
                    name: this.state.inEditingItemValue,
                    tag: data.tag === undefined ? '' : data.tag
                },
                (res, resId) => {
                    if (res === 'success') {
                        if (this.props.nodeKey && this.props.nodeKey === 'treeId') {
                            // 重新赋值 id
                            data.id = resId;
                            const key = (treeId + 1) + '_' + data.tag;
                            // 依据新生成的ID，复制一份树store的nodesMap传入，并删除之前的负ID节点
                            store.nodesMap[resId + '_' + data.tag] = store.nodesMap[key];
                        } else {
                            // 重新赋值 id
                            data.id = resId;
                            // 依据新生成的ID，复制一份树store的nodesMap传入，并删除之前的负ID节点
                            store.nodesMap[resId] = store.nodesMap[treeId + 1];
                        }
                        delete store.nodesMap[treeId + 1];
                        this.clearStatus(data);
                        this.forceUpdate();
                    }
                }
            );
        } else if (this.editType === 'edit') {
            this.props.onEditNode(
                {
                    id: data.id,
                    name: this.state.inEditingItemValue,
                    tag: data.tag === undefined ? '' : data.tag
                },
                res => {
                    if (res === 'success') {
                        this.clearStatus(data);
                        this.forceUpdate();
                    }
                }
            );
        }
    }
    /**
     * 清除编辑状态
     * @param data
     */
    clearStatus(data) {
        data.label = this.state.inEditingItemValue;
        data.isEditing = false;
        this.setState({
            inEditingItemValue: '',
            isEditing: false
        });
        this.parentId = '';
        tmpItem = null;
    }

    renderContent(nodeModel, data, store) {
        this.store = store;
        let { canEdit } = this.props;
        let { isEditing, inEditingItemValue } = this.state;

        return (
            <React.Fragment>
                <Tooltip
                    className={[
                        canEdit && isEditing && data.isEditing ? 'hide-op' : 'tree-label',
                        data.tag === undefined ? '' : 'label-tag-' + data.tag
                    ].join(' ')
                    }
                    tagName="span"
                    content={data.label}
                >
                    {data.label}
                </Tooltip>
                <span
                    className={[
                        'operation-bar',
                        canEdit && isEditing && data.isEditing ? 'show-op' : '',
                        data.tag === undefined ? '' : 'operation-tag-' + data.tag
                    ].join(' ')}
                >
                    <span
                        className="input-box"
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <Input
                            value={inEditingItemValue}
                            className={`datatree-edit-input tree-input-${data.id}`}
                            maxLength={32}
                            onChange={res => {
                                this.setState({
                                    inEditingItemValue: res
                                });
                            }}
                        />
                    </span>
                    <span className="icon-bar">
                        <span
                            className="icon icon-add"
                            onClick={e => {
                                this.append(store, data, nodeModel);
                                e.stopPropagation();
                            }}
                        ></span>
                        <span
                            className="icon icon-edit"
                            onClick={e => {
                                this.doEdit(store, data, nodeModel);
                                e.stopPropagation();
                            }}
                        ></span>
                        <span
                            className="icon icon-delete"
                            onClick={e => {
                                this.remove(store, data);
                                e.stopPropagation();
                            }}
                        ></span>
                        <span
                            className="icon icon-confirm"
                            onClick={e => {
                                this.confirmEdit(store, data);
                                e.stopPropagation();
                            }}
                        ></span>
                        <span
                            className="icon icon-cancel"
                            onClick={e => {
                                this.cancelEdit(store, data);
                                e.stopPropagation();
                            }}
                        ></span>
                    </span>
                </span>
            </React.Fragment>
        );
    }

    render() {
        let {
            onCheckChange,
            onNodeClicked,
            canEdit,
            canCheck,
            canSearch,
            defaultCheckedKeys,
            onCurrentChange,
            defaultExpandAll,
            expandOnClickNode,
            defaultExpandedKeys,
            type,
            maxChoose
        } = this.props;
        let { data, isEditing, selectedKeys } = this.state;

        return (
            <div className="el-tree-container" ref="dataTree">
                {canSearch ? <div className="c-row">
                    <Input placeholder="请输入"
                        onChange={text => this.tree.filter(text)} />
                    <span className="icon-search"></span>
                </div> : null}
                <Tree
                    data={data}
                    className={[canEdit ? 'can-edit' : 'no-edit', isEditing ? 'inediting' : '', type ? type : ''].join(' ')}
                    options={
                        this.props.options
                            ? this.props.options
                            : {
                                children: 'children',
                                label: 'label'
                            }
                    }
                    isShowCheckbox={canCheck}
                    highlightCurrent={true}
                    onCheckChange={(data, checked, indeterminate) => {
                        onCheckChange && onCheckChange(data, checked, indeterminate);
                        this.forceUpdate();
                    }}
                    onNodeClicked={(data, reactElement) => {
                        onNodeClicked && onNodeClicked(data, reactElement);
                        this.forceUpdate();
                    }}
                    onCurrentChange={(data, node) => {
                        onCurrentChange && onCurrentChange(this.tree.getCheckedKeys(), this.tree.getCheckedNodes());
                        this.forceUpdate();
                    }}
                    nodeKey={this.props.nodeKey ? this.props.nodeKey : 'id'}
                    renderContent={(...args) => this.renderContent(...args)}
                    ref={(e) => this.tree = e}
                    filterNodeMethod={(value, data) => {
                        if (!value) return true;
                        return data.label.indexOf(value) !== -1;
                    }}
                    defaultExpandAll={defaultExpandAll}
                    defaultCheckedKeys={defaultCheckedKeys}
                    expandOnClickNode={expandOnClickNode || true}
                    defaultExpandedKeys={defaultExpandedKeys}
                    maxChoose={maxChoose}
                />
            </div>
        );
    }
}
DataTree.defaultProps = {
    canEdit: false,
    nodeKey: 'id',
    maxChoose: 0
}

export default DataTree;
