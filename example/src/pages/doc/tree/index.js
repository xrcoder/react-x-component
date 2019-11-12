import React from 'react';
import {DataTree, TimePicker, Row, Col, Box, Table, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import treeMd from './tree.md';

import basic from './examples/basic.x';
import basicCheck from './examples/basicCheck.x';
import basicDefault from './examples/basicDefault.x';
import editEx from './examples/edit.x';
import basicFilter from './examples/basicFilter.x';

export default class extends React.Component {
    daterangepicker2 = null;

    constructor(props) {
        super(props);
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
            data2: [
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
            data3: [
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
            data4: [
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
            data5: [
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
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>树组件</Box.Header>
                        <Box.Body><Markdown content={treeMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>树组件-基本使用</Box.Header>
                        <Box.Body>
                            <DataTree 
                                data={this.state.data}
                                options={this.state.options}
                                onNodeClicked={(e) => {
                                    console.log(e)
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basic}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>树组件-可勾选</Box.Header>
                        <Box.Body>
                            <DataTree
                                data={this.state.data2}
                                options={this.state.options}
                                canCheck={true}
                                onCurrentChange={(keys, nodes) => {
                                    console.log('选择的keys', keys)
                                    console.log('选择的nodes', nodes)
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicCheck}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>树组件-默认选中和展开</Box.Header>
                        <Box.Body>
                            <DataTree
                                data={this.state.data3}
                                options={this.state.options}
                                canCheck={true}
                                defaultCheckedKeys={[1, 2, 3]}
                                defaultExpandedKeys={[1, 2, 3, 4, 5]}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicDefault}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>树组件-可编辑</Box.Header>
                        <Box.Body>
                            <DataTree
                                data={this.state.data4}
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
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{editEx}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>树组件-可筛选</Box.Header>
                        <Box.Body>
                            <DataTree
                                data={this.state.data5}
                                options={this.state.options}
                                canCheck={true}
                                canSearch={true}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicFilter}</Prism>
                        </Box.Footer>
                    </Box>
                    
                    <Box>
                        <Box.Header>DataTree Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>data</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>展示数据</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>emptyText</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>内容为空时展示的文本</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>nodeKey</Td>
                                        <Td>string</Td>
                                        <Td>id</Td>
                                        <Td>每个节点唯一标识属性</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>options</Td>
                                        <Td>object</Td>
                                        <Td>-</Td>
                                        <Td>配置选项{'{label: 制定节点标签名, children: 指定节点的子节点}'}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>defaultExpandAll</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否默认展开所有节点</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>defaultExpandedKeys</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>默认展开节点的key数组</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>defaultCheckedKeys</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>默认选中节点的key数组</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>canEdit</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>节点是否可编辑</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>canCheck</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>节点是否可选择</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>canSearch</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否有筛选功能</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onNodeClicked</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>点击节点的回调，返回(nodeModel.data, node)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onCurrentChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>勾选节点的回调，返回(keys, nodes)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onRemoveNode</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>可编辑树组件时可用。执行删除操作， 成功后需执行回调cb("success"），通知进行树删除</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onAddNode</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>可编辑树组件时可用。执行添加操作，成功后需执行回调cb("success", id)，id为新节点的key值，通知树进行节点添加</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onEditNode</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>可编辑树组件时可用。执行编辑操作，成功后需执行回调cb("success")，通知树进行节点更新</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
