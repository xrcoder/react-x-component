import React from 'react';
import {Checkbox, Row, Col, Box, Button, Icon} from 'react-x-component';
import './index.scss';


export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMark: false,
            isDisabled: false,
            data: [
                {
                    value: 1,
                    label: '苹果',
                    disabled: true
                },
                {
                    value: 2,
                    label: '桃子'
                },
                {
                    value: 3,
                    label: '猕猴桃'
                },
                {
                    value: 4,
                    label: '牛油果',
                    disabled: true
                },
                {
                    value: 5,
                    label: '香蕉'
                }
            ],
            selected: [1, 2],
            halfValue: 'off'
        }
    }

    render() {

        return (
            <Row className="x-pagination-demo">
                <Col lg={6} md={12}>
                    <Box>
                        <Box.Header>基本使用</Box.Header>
                        <Box.Body>
                            <Checkbox
                                options={this.state.data}
                                value={this.state.selected}
                                onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Button.Box align={'left'}>
                                <Button onClick={() => {
                                    this.setState({
                                        selected: [1, 2, 3]
                                    })
                                }}>修改</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        data: [
                                            {
                                                value: 1,
                                                label: '苹果'
                                            },
                                            {
                                                value: 2,
                                                label: '桃子'
                                            },
                                            {
                                                value: 3,
                                                label: '猕猴桃'
                                            },
                                            {
                                                value: 4,
                                                label: '牛油果'
                                            },
                                            {
                                                value: 5,
                                                label: '香蕉'
                                            },
                                            {
                                                value: 6,
                                                label: '励志'
                                            }
                                        ]
                                    })
                                }}>添加</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        selected: null
                                    })
                                }}>清空</Button>
                            </Button.Box>
                        </Box.Footer>
                    </Box>
                </Col>
                <Col lg={6} md={12}>
                    <Box>
                        <Box.Header>单独使用</Box.Header>
                        <Box.Body>
                            <Checkbox.Item
                                label={'记住密码'}
                                value={this.state.isMark}
                                disabled={this.state.isDisabled}
                                onChange={(e, res) => {
                                    this.setState({
                                        isMark: res
                                    })
                                }}/>
                        </Box.Body>
                        <Box.Footer>
                            <Button.Box align={'left'}>
                                <Button onClick={() => {
                                    this.setState({
                                        isMark: !this.state.isMark
                                    })
                                }}><Icon name={'plus'}/>切换状态</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        isDisabled: !this.state.isDisabled
                                    })
                                }}><Icon name={'ban'}/>切换禁用</Button>
                            </Button.Box>
                        </Box.Footer>
                    </Box>
                </Col>
                <Col lg={6} md={12}>
                    <Box>
                        <Box.Header>半选状态</Box.Header>
                        <Box.Body>
                            <Checkbox.Half
                                label={'当前选择'}
                                value={this.state.halfValue}
                                onChange={(e, res) => {
                                    this.setState({
                                        halfValue: res
                                    })
                                }}/>
                        </Box.Body>
                        <Box.Footer>
                            <Button.Box align={'left'}>
                                <Button onClick={() => {
                                    this.setState({
                                        halfValue: 'on'
                                    })
                                }}><Icon name={'plus'}/>全选</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        halfValue: 'off'
                                    })
                                }}><Icon name={'ban'}/>取消</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        halfValue: 'half'
                                    })
                                }}><Icon name={'check'}/>半选</Button>
                            </Button.Box>
                        </Box.Footer>
                    </Box>
                </Col>
            </Row>
        )
    }
}
