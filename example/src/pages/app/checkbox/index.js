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
            selected: [1, 2]
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
                                data={this.state.data}
                                selected={this.state.selected}
                                onChange={(res) => {
                                    console.log(res);
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Button onClick={() => {
                                this.setState({
                                    selected: [1, 2, 3]
                                })
                            }}><Icon name={'plus'}/>添加选中项</Button>
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
                            }}><Icon name={'plus'}/>添加列表项</Button>
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
                        </Box.Footer>
                    </Box>
                </Col>
            </Row>
        )
    }
}