import * as React from 'react';
import { Tree } from 'element-react';
import Input from '../input';
import Tooltip from '../tooltip';
import Button from '../button';
import Popper from '../popper';

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

class TreeSelection extends React.Component {
    xSelect;
    xTree;
    xTreeSecond;
    xTreeIsInit = false;

    constructor(props) {
        super(props);
        this.state = {
            checkedList: props.checkedList && props.checkedList.length > 0 ? props.checkedList : [],
            list: props.list && props.list.length > 0 ? props.list : [],
            checkedKeys: props.checkedKeys && props.checkedKeys.length > 0 ? props.checkedKeys : [],
            defaultCheckedObjs: props.defaultCheckedObjs && props.defaultCheckedObjs.length > 0 ? props.defaultCheckedObjs : [],
            tabIndex: 0,
            searchTxt: '',
            defaultCheckedKeys: props.defaultCheckedKeys || [],
            nodeList: props.checkedList && props.checkedList.length > 0 ? props.checkedList : []
        };
        this.removeItem = this.removeItem.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.onPoperChange = this.onPoperChange.bind(this);
        this.xSelect = React.createRef();
    }

    // componentWillReceiveProps(props) {
    //     if (props.list && props.list.length !== this.state.list.length) {
    //         this.setState({
    //             list: props.list
    //         });
    //     }
    //     if (props.defaultCheckedObjs &&
    //             props.defaultCheckedObjs.length > 0 && props.defaultCheckedObjs.length != this.state.defaultCheckedObjs.length) {
    //                 console.log('??????', props.defaultCheckedObjs)
    //         this.setState({
    //             checkedList: props.defaultCheckedObjs
    //         });
    //     }
    //     if (props.checkedKeys &&
    //             props.checkedKeys.length > 0 && props.checkedKeys.length != this.state.checkedKeys.length) {
    //         this.setState({
    //             checkedKeys: props.checkedKeys
    //         })
    //     }
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        // if (nextProps.list && nextProps.list.length !== prevState.list.length) {
        return {
            list: nextProps.list,
            checkedList: nextProps.checkedList,
            checkedKeys: nextProps.checkedKeys
        };
        // }
        // console.log(nextProps.checkedList, nextProps)
        // //defaultCheckedObjs 做标记用
        // if (nextProps.checkedList.length > 0) {
        //     return {

        //     }
        // }

        // if (nextProps.checkedKeys && nextProps.checkedKeys.length !== prevState.checkedKeys.length) {
        //     return {
        //     }
        // }
        // return null
    }

    removeItem(item) {
        let { checkedList, checkedKeys } = this.state;
        let { onChange } = this.props;
        for (let i = 0; i < checkedList.length; i++) {
            if (checkedList[i].id == item.id) {
                checkedList.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < checkedKeys.length; i++) {
            if (checkedKeys[i] == item.id) {
                checkedKeys.splice(i, 1);
                let tree = this.xTree || this.xTreeSecond;
                try {
                    tree && tree.setChecked(item.id, false);
                } catch (e) {
                    console.log(e);
                }
                break;
            }
        }
        this.setState({
            checkedList,
            checkedKeys
        });
        onChange && onChange(checkedList, checkedKeys);
        this.forceUpdate();
    }

    removeAll() {
        let { checkedList, checkedKeys } = this.state;
        let { onChange } = this.props;

        for (let i = 0; i < checkedKeys.length; i++) {
            let tree = this.xTree || this.xTreeSecond;
            try {
                tree && tree.setChecked(checkedKeys[i], false);
            } catch (e) {
                console.log(e);
            }
        }
        checkedList = [];
        checkedKeys = [];
        this.setState({
            checkedList,
            checkedKeys
        });
        onChange && onChange(checkedList, checkedKeys);
        this.forceUpdate();
    }

    onPoperChange(isShow) {
        if (isShow) {
            setTimeout(() => {
                let tree = this.xTree || this.xTreeSecond;
                try {
                    if (tree) {
                        this.xTreeIsInit = true;
                        tree.setCheckedNodes(this.state.checkedList);
                        this.forceUpdate();
                    }
                } catch (e) { }
            }, 300);
        }
    }

    renderContent(nodeModel, data, store) {
        return (
            <React.Fragment>
                <span className={['tree-label', data.tag === undefined ? '' : 'label-tag-' + data.tag].join(' ')}>{data.label || data.name}</span>
            </React.Fragment>
        );
    }

    render() {
        let { checkedList, list, checkedKeys, tabIndex, searchTxt } = this.state;
        let { secondList, onNodeClicked, canSearch, canCount, placeholder, onChange, tab, onTabChange, defaultCheckedKeys, clearable } = this.props;

        return (
            <Popper
                placement="rightTop"
                trigger="click"
                overlayClassName="tree-selection-popup"
                onVisibleChange={this.onPoperChange}
                content={
                    <React.Fragment>
                        {onTabChange && (
                            <div className="c-row">
                                <Button
                                    type={tab[tabIndex] === tab[0] ? 'primary' : null}
                                    onClick={res => {
                                        onTabChange(tab[0]);
                                        this.setState({ tabIndex: 0 }, () => {
                                            this.xTree.setCheckedKeys(checkedKeys);
                                            this.xTree.filter(searchTxt);
                                        });
                                    }}
                                >
                                    {tab[0]}
                                </Button>
                                <Button
                                    type={tab[tabIndex] === tab[1] ? 'primary' : null}
                                    onClick={res => {
                                        onTabChange(tab[1]);
                                        this.setState({ tabIndex: 1 }, () => {
                                            this.xTreeSecond.setCheckedKeys(checkedKeys);
                                            this.xTreeSecond.filter(searchTxt);
                                        });
                                    }}
                                >
                                    {tab[1]}
                                </Button>
                            </div>
                        )}
                        {canSearch ? (
                            <div className="c-row">
                                <Input
                                    placeholder="请输入"
                                    onChange={text => {
                                        this.setState({ searchTxt: text });
                                        console.log(this.xTree, this.xTreeSecond);
                                        tabIndex == 0 && this.xTree.filter(text);
                                        tabIndex == 1 && this.xTreeSecond.filter(text);
                                    }}
                                />
                                <span className="icon-search"></span>
                            </div>
                        ) : null}
                        {tabIndex === 0 && (
                            <Tree
                                data={list}
                                className={['no-edit', this.props.type == 'device' ? 'device' : ''].join(' ')}
                                options={
                                    this.props.options
                                        ? this.props.options
                                        : {
                                            children: 'children',
                                            label: 'label'
                                        }
                                }
                                isShowCheckbox={true}
                                highlightCurrent={false}
                                onCheckChange={(data, checked, indeterminate) => { }}
                                onNodeClicked={(data, reactElement) => {
                                    onNodeClicked && onNodeClicked(data, reactElement);
                                    if (this.props.isHideAfterClick && this.xSelect && this.xSelect.current) {
                                        this.xSelect.current.click();
                                    }
                                }}
                                onCurrentChange={(data, node) => {
                                    let nodeList = [],
                                        nodeKey = [];
                                    let nowCheckedList = this.xTree.getCheckedNodes();

                                    nowCheckedList &&
                                        nowCheckedList.forEach((item, index) => {
                                            if (!item.children) {
                                                if (!this.props.showTag) {
                                                    nodeList.push(item);
                                                    nodeKey.push(item.id);
                                                } else {
                                                    if (this.props.showTag === item.tag) {
                                                        nodeList.push(item);
                                                        nodeKey.push(item.id);
                                                    }
                                                }
                                            }
                                        });
                                    this.setState({
                                        checkedKeys: this.xTree.getCheckedKeys(),
                                        checkedList: nodeList
                                    });
                                    onChange && onChange(nodeList, nodeKey);
                                }}
                                nodeKey="id"
                                ref={e => {
                                    this.xTree = e;
                                }}
                                filterNodeMethod={(value, data) => {
                                    if (!value) return true;
                                    return data.label.indexOf(value) !== -1;
                                }}
                                defaultCheckedKeys={defaultCheckedKeys}
                                renderContent={(...args) => this.renderContent(...args)}
                            />
                        )}
                        {tabIndex === 1 && (
                            <Tree
                                data={secondList}
                                className={['no-edit', this.props.type == 'device' ? 'device' : ''].join(' ')}
                                options={
                                    this.props.options
                                        ? this.props.options
                                        : {
                                            children: 'children',
                                            label: 'label'
                                        }
                                }
                                isShowCheckbox={true}
                                highlightCurrent={false}
                                onCurrentChange={(data, node) => {
                                    let nodeList = [],
                                        nodeKey = [];
                                    let nowCheckedList = this.xTreeSecond.getCheckedNodes();
                                    nowCheckedList &&
                                        nowCheckedList.forEach((item, index) => {
                                            if (!item.children) {
                                                if (!this.props.showTag) {
                                                    nodeList.push(item);
                                                    nodeKey.push(item.id);
                                                } else {
                                                    if (this.props.showTag === item.tag) {
                                                        nodeList.push(item);
                                                        nodeKey.push(item.id);
                                                    }
                                                }
                                            }
                                        });

                                    this.setState({
                                        checkedKeys: this.xTreeSecond.getCheckedKeys(),
                                        checkedList: nodeList
                                    });
                                    onChange && onChange(nodeList, nodeKey);
                                }}
                                onCheckChange={(data, checked, indeterminate) => {
                                    // let arr = checkedList;
                                    // let keyArr = checkedKeys;
                                    // if (checked) {
                                    //     let i;
                                    //     for (i = 0; i < arr.length; i++) {
                                    //         if (arr[i].id == data.id) {
                                    //             break;
                                    //         }
                                    //     }
                                    //     if (i >= arr.length) {
                                    //         arr.push(data);
                                    //         keyArr.push(data.id);
                                    //     }
                                    // } else {
                                    //     for (let i = 0; i < arr.length; i++) {
                                    //         if (arr[i].id == data.id) {
                                    //             arr.splice(i, 1);
                                    //             keyArr.splice(i, 1);
                                    //             break;
                                    //         }
                                    //     }
                                    // }
                                    // this.setState({
                                    //     checkedList: arr,
                                    //     checkedKeys: keyArr
                                    // });
                                    // onChange && onChange(arr, keyArr);
                                }}
                                onNodeClicked={(data, reactElement) => {
                                    onNodeClicked && onNodeClicked(data, reactElement);
                                    // this.forceUpdate();
                                }}
                                nodeKey="id"
                                ref={e => (this.xTreeSecond = e)}
                                filterNodeMethod={(value, data) => {
                                    if (!value) return true;
                                    return data.label.indexOf(value) !== -1;
                                }}
                                defaultCheckedKeys={defaultCheckedKeys}
                                renderContent={(...args) => this.renderContent(...args)}
                            />
                        )}
                    </React.Fragment>
                }
            >
                <div className={['x-select', 'x-select-multiple', checkedList && checkedList.length > 0 ? 'x-select-hasvalue' : ''].join(' ')} ref={this.xSelect}>
                    <div className="x-select-title">
                        <span
                            className={clearable && checkedList && checkedList.length > 0 ? 'cls' : 'arrow'}
                            onClick={e => {
                                if (clearable && checkedList && checkedList.length > 0) {
                                    e.stopPropagation();
                                    this.removeAll();
                                }
                            }}
                        ></span>
                        <span className="input-placeholder">{placeholder || '选择设备'}</span>
                        {checkedList && checkedList.length > 0 ? (
                            <ul className="x-select-ul-value">
                                {checkedList.map((item, index) => {
                                    return (
                                        <li key={'' + index + item.value} className="x-select-li">
                                            {item.label || item.name}
                                            <span
                                                className="cls-icon"
                                                onClick={e => {
                                                    this.removeItem(item);
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                }}
                                            ></span>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                        {canCount && <span className="count">{`已选${checkedList ? checkedList.length : 0}个`}</span>}
                    </div>
                </div>
            </Popper>
        );
    }
}

TreeSelection.defaultProps = {
    list: [],
    secondList: [],
    onChange: () => { },
    checkedList: [],
    options: {},
    canSearch: false,
    onCheckChange: () => { },
    onNodeClicked: () => { },
    defaultCheckedKeys: [],
    defaultCheckedObjs: [],
    selectedKeys: [],
    placeholder: '请输入',
    checkedKeys: [],
    tab: [],
    onTabChange: () => { },
    canCount: false,
    showTag: 0,
    type: '',
    isHideAfterClick: false,
    clearable: false
}

export default {
    DataTree, TreeSelection
};

