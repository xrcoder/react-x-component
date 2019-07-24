import './index.scss';
import React from 'react';
import {Radio, Row, Col, Box, Button, Icon} from 'react-x-component';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    label: '猕猴桃',
                    disabled: true
                },
                {
                    value: 4,
                    label: '牛油果'
                },
                {
                    value: 5,
                    label: '香蕉'
                }
            ],
            selected: {
                value: 5,
                label: '香蕉'
            }
        }
    }

    render() {
        return (
            <div>
                <Row className="x-pagination-demo">
                    <Col lg={6} md={12}>
                        <Box>
                            <Box.Header>基本使用</Box.Header>
                            <Box.Body>
                                <Radio options={this.state.data} value={this.state.selected} onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}></Radio>
                            </Box.Body>
                            <Box.Body>
                                <span>当前选中：{JSON.stringify(this.state.selected)}</span>
                            </Box.Body>
                            <Box.Footer>
                                <Button onClick={() => {
                                    this.setState({
                                        selected: {
                                            value: 2,
                                            label: '桃子',
                                            disabled: true
                                        }
                                    })
                                }}>重置</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        data: [
                                            {
                                                value: 1,
                                                label: '苹果'
                                            },
                                            {
                                                value: 2,
                                                label: '桃子',
                                                disabled: true
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
                                                label: '荔枝'
                                            }
                                        ]
                                    })
                                }}>添加</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        selected: null
                                    })
                                }}>清空</Button>
                            </Box.Footer>
                        </Box>
                    </Col>
                </Row>
            </div>
        )
    }
}
