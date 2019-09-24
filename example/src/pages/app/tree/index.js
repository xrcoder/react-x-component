import React from 'react';
import { DataTree, Row, Col, Box } from 'react-x-component';

class TreeDemo extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
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
}

class TreeDemoSecond extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
        }
    }

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
}

class TreeDemoThird extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
        }
    }

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
}

class TreeDemoFourth extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
        }
    }

    render() {
        return (
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
}

class TreeDemoFifth extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
        }
    }

    render() {
        return (
            <DataTree
                data={this.state.data}
                options={this.state.options}
                canCheck={true}
                canSearch={true}
            />
        )
    }
}

class TreeDemoSixth extends React.Component {

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
            options: {
                children: 'children',
                label: 'label'
            }
        }
    }

    render() {
        return (
            <DataTree
                data={this.state.data}
                options={this.state.options}
                maxChoose={2}
                canCheck={true}
            />
        )
    }
}

export default function () {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件</Box.Header>
                        <Box.Body>
                            <TreeDemo></TreeDemo>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件（可选择）</Box.Header>
                        <Box.Body>
                            <TreeDemoSecond></TreeDemoSecond>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件（默认展开和默认选中）</Box.Header>
                        <Box.Body>
                            <TreeDemoThird></TreeDemoThird>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件（可编辑的）</Box.Header>
                        <Box.Body>
                            <TreeDemoFourth></TreeDemoFourth>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件（可筛选的）</Box.Header>
                        <Box.Body>
                            <TreeDemoFifth></TreeDemoFifth>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={6}>
                    <Box>
                        <Box.Header>树组件（最大可选）</Box.Header>
                        <Box.Body>
                            <TreeDemoSixth></TreeDemoSixth>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        </React.Fragment>
    );
}